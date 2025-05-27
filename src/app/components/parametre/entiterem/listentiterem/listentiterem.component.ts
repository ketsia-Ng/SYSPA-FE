import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { entiterem } from 'src/app/entity/entiterem';
import { province } from 'src/app/entity/province';
import { section } from 'src/app/entity/section';
import { EntiteremService } from 'src/app/service/entiterem.service';
import { SectionService } from 'src/app/service/section.service';
import { AddentiteremComponent } from '../addentiterem/addentiterem.component';
import { EditentiteremComponent } from '../editentiterem/editentiterem.component';
import { ProvinceService } from 'src/app/service/province.service';
import { log } from 'console';

@Component({
  selector: 'app-listentiterem',
  templateUrl: './listentiterem.component.html',
  styleUrls: ['./listentiterem.component.scss']
})
export class ListentiteremComponent implements OnInit{
    section:section[]=[]
    province:province[]=[]
    entiterem:entiterem[]=[]
    codesection:number=0
    codeprovince:number=0
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private entiteremservice:EntiteremService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private provinceservice:ProvinceService,
    private sectionservice:SectionService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectioncharger();
    }


collectionentiterem(){

    if( this.codesection==null && this.codeprovince==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section et une province', life: 3000 });

    }else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      console.log(this.codesection+" "+ this.codeprovince)
      this.entiteremservice.collectionsentiterems(this.search,this.codesection,this.codeprovince,this.page,this.size).subscribe(
        (data:any)=>{
            this.entiterem=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
    }

}
collectioncharger(){
    this.sectionservice.collectionallsections().subscribe(
        (data:any)=>{
            this.section=data
      });
      this.provinceservice.collectionallprovinces().subscribe(
        (data:any)=>{
            this.province=data
      });
}
openmodal(){
    if(this.codesection==0||this.codesection==null||this.codeprovince==0||this.codeprovince==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section et une province', life: 3000 });
}else{
    this.modalref=this.dialogservice.open(AddentiteremComponent,{
        header: 'Enregistrement Entité Remunerée',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data:{
            codesection:this.codesection,
            codeprovince:this.codeprovince
          }
    });


}
this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionentiterem();
    }
});
}
openmodaledit(entiterem:entiterem){

    this.modalref=this.dialogservice.open(EditentiteremComponent,{
      header: 'Modification Entité Remunerée',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        entiterem:entiterem
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionentiterem();
    }
});

      }
      confirm(entiterem:entiterem) {
        if(entiterem.etat==false){
        this.message="Voulez vous activer l'entité "+entiterem.nomentite+" ?"
        }else{
          this.message="Voulez vous desactiver l'entité"+entiterem.nomentite+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(entiterem)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(entiterems:entiterem){
            this.entiteremservice.changerstatut(entiterems.codeentite).subscribe(
              (response)=>{
                const index = this.entiterem.indexOf(entiterems);
                      entiterems.etat = response;
                      this.entiterem[index] = entiterems;
                      this.entiterem = [...this.entiterem];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La entiterem est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La entiterem est desactivée ',life:3000});
                      }
              }
            );
          }

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionentiterem();
        }
}
