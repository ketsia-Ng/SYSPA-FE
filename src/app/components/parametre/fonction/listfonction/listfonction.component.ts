import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { fonction } from 'src/app/entity/fonction';
import { section } from 'src/app/entity/section';
import { FonctionService } from 'src/app/service/fonction.service';
import { SectionService } from 'src/app/service/section.service';
import { AddfonctionComponent } from '../addfonction/addfonction.component';
import { EditfonctionComponent } from '../editfonction/editfonction.component';

@Component({
  selector: 'app-listfonction',
  templateUrl: './listfonction.component.html',
  styleUrls: ['./listfonction.component.scss']
})
export class ListfonctionComponent implements OnInit{
    section:section[]=[]
    fonction:fonction[]=[]
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
     private fonctionservice:FonctionService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private sectionservice:SectionService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectioncharger();
    }

    collectioncharger(){
        this.sectionservice.collectionallsections().subscribe(
            (data:any)=>{
                this.section=data
          });
    }
collectionfonction(){
    if(this.codesection==null||this.codesection==0){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
}else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.fonctionservice.collectionsfonctions(this.search,this.codesection,this.page,this.size).subscribe(
        (data:any)=>{
            this.fonction=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
    }
}
openmodal(){
    if(this.codesection==0||this.codesection==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
}else{
    this.modalref=this.dialogservice.open(AddfonctionComponent,{
        header: 'Enregistrement Fonction',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data:{
            codesection:this.codesection
          }
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionfonction();
      }
  });

}
}
openmodaledit(fonction:fonction){

    this.modalref=this.dialogservice.open(EditfonctionComponent,{
      header: 'Modification Fonction',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        fonction:fonction
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionfonction();
    }
});

      }
      confirm(fonction:fonction) {
        if(fonction.etat==false){
        this.message="Voulez vous activer la fonction "+fonction.nomfonction+" ?"
        }else{
          this.message="Voulez vous desactiver la fonction "+fonction.nomfonction+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(fonction)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(fonctions:fonction){
            this.fonctionservice.changerstatut(fonctions.codefonction).subscribe(
              (response)=>{
                const index = this.fonction.indexOf(fonctions);
                      fonctions.etat = response;
                      this.fonction[index] = fonctions;
                      this.fonction = [...this.fonction];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La fonction est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La fonction est desactivée ',life:3000});
                      }
              }
            );
          }

          onPageChange(event: any) {
            this.page = event.page;
            this.size=event.rows;
            this.collectionfonction();
        }
}
