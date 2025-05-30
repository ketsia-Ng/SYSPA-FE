import { Component, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { province } from 'src/app/entity/province';
import { section } from 'src/app/entity/section';
import { identificationModel } from 'src/app/models/identificationModel';
import { EntiteremService } from 'src/app/service/entiterem.service';
import { ProvinceService } from 'src/app/service/province.service';
import { SectionService } from 'src/app/service/section.service';
import printJS from 'print-js';
import { SituationService } from 'src/app/service/situation.service';
import { ImpressionComponent } from '../../impression/impression.component';

@Component({
  selector: 'app-listentite',
  templateUrl: './listentite.component.html',
  styleUrls: ['./listentite.component.scss']
})
export class ListentiteComponent implements OnInit{
    entiterem:identificationModel[]=[]
    @Output() entit:identificationModel=new identificationModel()
    section:section[]=[]
    province:province[]=[]
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
        private dialogservice:DialogService,
     private entiteremservice:EntiteremService,
    private toastservice:MessageService,
    private provinceservice:ProvinceService,
    private sectionservice:SectionService,
    private situationservice:SituationService
    ){}

    ngOnInit(): void {
        this.collectioncharger();
    }


collectionentiterem(){
this.entit=new identificationModel()
    if( this.codesection==null && this.codeprovince==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section et une province', life: 3000 });

    }else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.entiteremservice.collectionallentiteremunere(this.search,this.codesection,this.codeprovince,this.page,this.size).subscribe(
        (data:any)=>{
            this.entiterem=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
            console.log(this.entiterem)
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

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionentiterem();
        }
        imprimerentite(entite:identificationModel){
            this.situationservice.impressionlistidentifentite(entite.codeentite).subscribe(
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

