import { Component, OnInit } from '@angular/core';
import {  ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { banque } from 'src/app/entity/banque';
import { BanqueService } from 'src/app/service/banque.service';
import { AddbanqueComponent } from '../addbanque/addbanque.component';
import { EditbanqueComponent } from '../editbanque/editbanque.component';

@Component({
  selector: 'app-listbanque',
  templateUrl: './listbanque.component.html',
  styleUrls: ['./listbanque.component.scss']
})
export class ListbanqueComponent implements OnInit {
    banque:banque[]=[]
page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private banqueservice:BanqueService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionbanque();
    }

collectionbanque(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.banqueservice.collectionsbanques(this.search,this.page,this.size).subscribe(
        (data:any)=>{
            this.banque=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
}
openmodal(){
    this.modalref=this.dialogservice.open(AddbanqueComponent,{
        header: 'Enregistrement Banque',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionbanque();
      }
  });
}
openmodaledit(banque:banque){
    this.modalref=this.dialogservice.open(EditbanqueComponent,{
      header: 'Modification Banque',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        banque:banque
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionbanque();
    }
});
      }
      confirm(banque:banque) {
        if(banque.etat==false){
        this.message="Voulez vous activer la banque "+banque.nombanque+" ?"
        }else{
          this.message="Voulez vous desactiver la banque "+banque.nombanque+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(banque)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(banques:banque){
            this.banqueservice.changerstatut(banques.codebanque).subscribe(
              (response)=>{
                const index = this.banque.indexOf(banques);
                      banques.etat = response;
                      this.banque[index] = banques;
                      this.banque = [...this.banque];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La banque est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La banque est desactivée ',life:3000});
                      }
              }
            );
          }

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionbanque();
        }
}
