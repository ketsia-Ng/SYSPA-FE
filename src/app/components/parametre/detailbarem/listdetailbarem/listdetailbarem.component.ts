import { Component, Input, OnInit,OnChanges, SimpleChanges,EventEmitter, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { detailbarem } from 'src/app/entity/detailbarem';
import { paramModel } from 'src/app/models/paramModel';
import {  DetailbaremService } from 'src/app/service/detailbarem.service';
import { AdddetailbaremComponent } from '../adddetailbarem/adddetailbarem.component';
import { EditdetailbaremComponent } from '../editdetailbarem/editdetailbarem.component';

@Component({
  selector: 'app-listdetailbarem',
  templateUrl: './listdetailbarem.component.html',
  styleUrls: ['./listdetailbarem.component.scss']
})
export class ListdetailbaremComponent  implements OnInit,OnChanges{

    detailbarem:detailbarem[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
    @Input() param!:paramModel
    @Output()parame:EventEmitter<paramModel>=new EventEmitter<paramModel>()
   modalref!:DynamicDialogRef|undefined

    constructor(
     private detailbaremservice:DetailbaremService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private confirmservice:ConfirmationService
    ){}
    ngOnChanges(): void {
        this.ngOnInit()
    }

    ngOnInit(): void {
        this.collectiondetailbarem();
    }


collectiondetailbarem(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.detailbaremservice.collectionsdetailbarems(this.search,this.param.codebarem,this.page,this.size).subscribe(
        (data:any)=>{

            this.detailbarem=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });

}

openmodal(){
    this.modalref=this.dialogservice.open(AdddetailbaremComponent,{
        header: 'Enregistrement Unité',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data:{
            codebarem:this.param.codebarem
          }
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectiondetailbarem();
        this.parame.emit();
      }
  });
}

openmodaledit(detailbarem:detailbarem){

    this.modalref=this.dialogservice.open(EditdetailbaremComponent,{
      header: 'Modification Unité',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        detailbarem:detailbarem,
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectiondetailbarem();
    }
});

      }
      confirm(detailbarem:detailbarem) {
        if(detailbarem.etat==false){
        this.message="Voulez vous activer la detailbarem "+detailbarem.intitule+" ?"
        }else{
          this.message="Voulez vous desactiver la detailbarem "+detailbarem.intitule+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(detailbarem)
                this.parame.emit()
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }
        supprimer(detailbarem:detailbarem) {

              this.message="Voulez vous Supprimer "+detailbarem.intitule+" ?"

             this.confirmservice.confirm({
                  message: this.message,
                  header: 'Suppression',
                  icon: 'pi pi-exclamation-triangle text-primary',
                  rejectButtonStyleClass: 'p-button-sm',
                  acceptButtonStyleClass: 'p-button-outlined p-button-sm',
                  accept: () => {
                  this.detailbaremservice.supprimerdetailbarem(detailbarem.id).subscribe(
                    (data)=>{
                        this.toastservice.add({ severity: 'info', summary: 'Suppression', detail: 'Operation effectuée', life: 3000 });
                        this.collectiondetailbarem();
                        this.parame.emit()

                    }
                  )
                },
                reject: () => {
                  this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
                }
              });
            }
        changerstatut(detailbarems:detailbarem){
            this.detailbaremservice.changerstatut(detailbarems.id).subscribe(
              (response)=>{
                const index = this.detailbarem.indexOf(detailbarems);
                      detailbarems.etat = response;
                      this.detailbarem[index] = detailbarems;
                      this.detailbarem = [...this.detailbarem];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La detailbarem est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La detailbarem est desactivée ',life:3000});
                      }
              }
            );
          }

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectiondetailbarem();
        }

}
