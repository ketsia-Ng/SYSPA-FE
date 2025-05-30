import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { identification } from 'src/app/entity/identification';
import { identificationModel } from 'src/app/models/identificationModel';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';
import { SituationService } from 'src/app/service/situation.service';
import printJS from 'print-js';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FichesituationComponent } from 'src/app/components/consultation/fichesituation/fichesituation.component';
import { ImpressionComponent } from '../../impression/impression.component';

@Component({
  selector: 'app-listsituationsectentite',
  templateUrl: './listsituationsectentite.component.html',
  styleUrls: ['./listsituationsectentite.component.scss']
})
export class ListsituationsectentiteComponent  implements OnInit,OnChanges {

    situation:identificationModel[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    index:number=0
    count:number=0
    message:string=""
    @Input() codeentite:number=0
    @Input() identificat!:identification
    modalref!:DynamicDialogRef|undefined
    constructor(
         private identificationservice:IdentificationService,
         private dialogservice:DialogService,
         private situationservice:SituationService
        ){}

    ngOnChanges(): void {

        this.ngOnInit();
    }

        ngOnInit(): void {
        this.collectionsituation(0)
        }

        openmodalfiche(situation:identificationModel){
            this.modalref=this.dialogservice.open(FichesituationComponent,{
              header: 'Situation N° '+ situation.id,
              width:'50%',
              contentStyle: { overflow: 'auto' },
              baseZIndex: 10000,
              maximizable: false,
              data:{
                identification:this.identificat,
                situation:situation
              }
          });
           this.modalref.onClose.subscribe((res) => {
            if (res) {
            }
        });
              }
    collectionsituation(validation:number){
        this.situationservice.collectionsadminsituationsection(this.identificat.identifiant,this.codeentite,validation,this.page,this.size).subscribe(
            (data)=>{
                this.situation=data.content
                this.count=data.totalElements
                this.totalpages=data.totalPages
            }
        )
    }
    Changeentete(event:any){
        this.index=event.index
    this.collectionsituation(this.index)
    }

     onPageChange(event: any) {
     this.page = event.page;
     this.size=event.rows;
     this.collectionsituation(this.index);
            }
     imprimeragent(){

                this.situationservice.impressionpersidentifentite(this.codeentite,this.identificat.identifiant).subscribe(
                    (data:any)=>{
                     // printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
                       this.openmodal(data)
                    }
                  );

    }
    openmodal(data:any){
            this.modalref=this.dialogservice.open(ImpressionComponent,{
                width:"100%",
                height:"100%",
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: false,
                data:{
                    pdfSrc:data.report
                }
            });
    }
}
