import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { identification } from 'src/app/entity/identification';
import { identificationModel } from 'src/app/models/identificationModel';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';
import { SituationService } from 'src/app/service/situation.service';
import { FichesituationComponent } from '../../fichesituation/fichesituation.component';

@Component({
  selector: 'app-listsituationavance',
  templateUrl: './listsituationavance.component.html',
  styleUrls: ['./listsituationavance.component.scss']
})
export class ListsituationavanceComponent  implements OnInit,OnChanges {
    identification!:identification
    situation:identificationModel[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    message:string=""
    @Input() param!:paramModel
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
            this.collectionidentification()
        this.collectionsituation(0)
        }

    collectionidentification(){

          this.identificationservice.afficheridentifications(this.param.identifiant).subscribe(
            (data:any)=>{
                this.identification=data

          });
    }

    collectionsituation(validation:number){
        this.situationservice.collectionssituationsection(this.param.identifiant,this.param.codesection,validation,this.page,this.size).subscribe(
            (data)=>{
                this.situation=data.content
                this.count=data.totalElements
                this.totalpages=data.totalPages
            }
        )
    }
    Changeentete(event:any){
    console.log(event.index);
    this.collectionsituation(event.index)
    }

     onPageChange(event: any) {
     this.page = event.page;
     this.size=event.rows;
     this.collectionsituation(0);
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
                    this.collectionsituation(0);
                }
            });
                  }
}
