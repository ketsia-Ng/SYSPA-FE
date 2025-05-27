import { Component, Input, OnChanges, OnInit ,EventEmitter, Output} from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ValidationModel } from 'sapphire-ng-15.0.0/src/app/models/AppModels';
import { FichesituationComponent } from 'src/app/components/consultation/fichesituation/fichesituation.component';
import { identification } from 'src/app/entity/identification';
import { identificationModel } from 'src/app/models/identificationModel';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';
import { SituationService } from 'src/app/service/situation.service';
import {  } from 'stream';

@Component({
  selector: 'app-listsituationvalidation',
  templateUrl: './listsituationvalidation.component.html',
  styleUrls: ['./listsituationvalidation.component.scss']
})
export class ListsituationvalidationComponent  implements OnInit,OnChanges {
    identification!:identification
    situation:identificationModel[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    validation:number=0
    message:string=""
    @Input() param!:paramModel
    tableausituation:identificationModel[]=[]
     @Output() parame:EventEmitter<paramModel>=new EventEmitter<paramModel>()
     modalref!:DynamicDialogRef|undefined
    constructor(
         private identificationservice:IdentificationService,
         private toastservice:MessageService,
         private dialogservice:DialogService,
         private confirmservice:ConfirmationService,
         private situationservice:SituationService
        ){}

    ngOnChanges(): void {
        this.ngOnInit();
    }

        ngOnInit(): void {
            this.collectionidentification()
        this.collectionsituation()
        }

    collectionidentification(){

          this.identificationservice.afficheridentifications(this.param.identifiant).subscribe(
            (data:any)=>{
                this.identification=data

          });
    }

    collectionsituation(){
        this.situationservice.collectionssituations(this.param.identifiant,this.param.validation,this.page,this.size).subscribe(
            (data)=>{
                this.situation=data.content
                this.count=data.totalElements
                this.totalpages=data.totalPages
            }
        )
    }


     onPageChange(event: any) {
     this.page = event.page;
     this.size=event.rows;
     this.collectionsituation();
            }

 validationenattente(){
this.validationsituation(this.validation);
 }
    validationsituation(validation:number){
        if(validation==1){
                this.message="Voulez vous Valider ces situations selectionnées?"
        }else if(validation==2){
                 this.message="Voulez vous Rejeter ces situations selectionnées?"
        }else{
                this.message="Voulez vous Bloquer ces situations selectionnées?"

        }
    if(this.tableausituation.length!=0){

        const tabid:number[]=[]
        this.tableausituation.forEach(s=>{
            tabid.push(s.id);
        })
       this.confirmservice.confirm({
            message: this.message,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle text-primary',
            rejectButtonStyleClass: 'p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
            this.situationservice.validationsituations(tabid,validation).subscribe();
            this.collectionsituation();
            if(this.situation.length==0){
                this.parame.emit()
            }
          },
          reject: () => {
            this.toastservice.add({ severity: 'error', summary: 'exception', detail: 'Operation non effectuée', life: 3000 });
          }
        });

}
    }
    openmodalfiche(situation:identificationModel){
        this.modalref=this.dialogservice.open(FichesituationComponent,{
          header: 'Situation N° '+ situation.id,
          width:'50%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: false,
          data:{
            identification:this.identification,
            situation:situation
          }
      });
       this.modalref.onClose.subscribe((res) => {
        if (res) {
        }
    });
          }
}
