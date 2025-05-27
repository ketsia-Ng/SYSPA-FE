import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { position } from 'src/app/entity/position';
import { AddpositionComponent } from '../addposition/addposition.component';
import { PositionService } from 'src/app/service/position.service';
import { EditpositionComponent } from '../editposition/editposition.component';

@Component({
  selector: 'app-listposition',
  templateUrl: './listposition.component.html',
  styleUrls: ['./listposition.component.scss']
})
export class ListpositionComponent implements OnInit{
    position:position[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private positionservice:PositionService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionposition();
    }

collectionposition(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.positionservice.collectionsposition(this.search,this.page,this.size).subscribe(
        (data:any)=>{
            this.position=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
}
openmodal(){
    this.modalref=this.dialogservice.open(AddpositionComponent,{
        header: 'Enregistrement Banque',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionposition();
      }
  });
}
openmodaledit(position:position){
    this.modalref=this.dialogservice.open(EditpositionComponent,{
      header: 'Modification Banque',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        position:position
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionposition();
    }
});
      }
      confirm(position:position) {
        if(position.etat==false){
        this.message="Voulez vous activer la position "+position.nomposition+" ?"
        }else{
          this.message="Voulez vous desactiver la position "+position.nomposition+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(position)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(positions:position){
            this.positionservice.changerstatut(positions.codeposition).subscribe(
              (response)=>{
                const index = this.position.indexOf(positions);
                      positions.etat = response;
                      this.position[index] = positions;
                      this.position = [...this.position];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La position est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La position est desactivée ',life:3000});
                      }
              }
            );
          }
          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionposition();
        }
}
