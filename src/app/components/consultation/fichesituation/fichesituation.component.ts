import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { barem } from 'src/app/entity/barem';
import printJS from 'print-js';
import { detailbarem } from 'src/app/entity/detailbarem';
import { identification } from 'src/app/entity/identification';
import { identificationModel } from 'src/app/models/identificationModel';
import { DetailbaremService } from 'src/app/service/detailbarem.service';
import { SituationService } from 'src/app/service/situation.service';

@Component({
  selector: 'app-fichesituation',
  templateUrl: './fichesituation.component.html',
  styleUrls: ['./fichesituation.component.scss']
})
export class FichesituationComponent implements OnInit {

    identification!:identification
    situation!:identificationModel
    detailbarem:detailbarem[]=[]
    totalpages:number=0
    size:number=10
    count:number=0
    page:number=0
    constructor(
      private dialogconfig:DynamicDialogConfig,
      private modalRef:DynamicDialogRef,
      private detailbaremservice:DetailbaremService,

     private situationservice:SituationService
    ){}
    ngOnInit() {
     this.identification=this.dialogconfig.data.identification
     this.situation=this.dialogconfig.data.situation
    this.getdetailbarem()

    }
    imprimersituation(){

        this.situationservice.affichersituation(this.situation.id).subscribe(
            (data:any)=>{
              printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
            }
          );

    }

    effacer(){
        this.modalRef.close();
      }
    getdetailbarem(){
              this.detailbaremservice.collectionsdetailbarems( "0",this.situation.codebarem,this.page,this.size).subscribe(
                (data:any)=>{

                    this.detailbarem=data.content
                    this.count=data.totalElements
                    this.totalpages=data.totalPages
              });

        }
        onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.getdetailbarem();
        }
}
