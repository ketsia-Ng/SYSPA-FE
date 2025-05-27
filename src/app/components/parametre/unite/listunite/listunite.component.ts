import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { section } from 'src/app/entity/section';
import { unite } from 'src/app/entity/unite';
import { UniteService } from 'src/app/service/unite.service';
import { AdduniteComponent } from '../addunite/addunite.component';
import { EdituniteComponent } from '../editunite/editunite.component';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-listunite',
  templateUrl: './listunite.component.html',
  styleUrls: ['./listunite.component.scss']
})
export class ListuniteComponent  implements OnInit{
    section:section[]=[]
    unite:unite[]=[]
    codesection:number=0
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private uniteservice:UniteService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private sectionservice:SectionService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionsection()
    }


collectionunite(){
    if(this.codesection==null||this.codesection==0){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
}else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.uniteservice.collectionsunites(this.search,this.codesection,this.page,this.size).subscribe(
        (data:any)=>{
            this.unite=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
    }
}
collectionsection(){
    this.sectionservice.collectionallsections().subscribe(
        (data:any)=>{
            this.section=data
      });

}
openmodal(){
    if(this.codesection==0||this.codesection==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
}else{
    this.modalref=this.dialogservice.open(AdduniteComponent,{
        header: 'Enregistrement Unité',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data:{
            codesection:this.codesection
          }
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionunite();
      }
  });

}
}
openmodaledit(unite:unite){

    this.modalref=this.dialogservice.open(EdituniteComponent,{
      header: 'Modification Unité',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        unite:unite
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionunite();
    }
});

      }
      confirm(unite:unite) {
        if(unite.etat==false){
        this.message="Voulez vous activer la unite "+unite.nomunite+" ?"
        }else{
          this.message="Voulez vous desactiver la unite "+unite.nomunite+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(unite)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(unites:unite){
            this.uniteservice.changerstatut(unites.codeunite).subscribe(
              (response)=>{
                const index = this.unite.indexOf(unites);
                      unites.etat = response;
                      this.unite[index] = unites;
                      this.unite = [...this.unite];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La unite est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La unite est desactivée ',life:3000});
                      }
              }
            );
          }

          onPageChange(event: any) {
            this.page = event.page;
            this.size=event.rows;
            this.collectionunite();
        }
}
