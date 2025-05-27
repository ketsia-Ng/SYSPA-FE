import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { entiterem } from 'src/app/entity/entiterem';
import { identification } from 'src/app/entity/identification';
import { province } from 'src/app/entity/province';
import { section } from 'src/app/entity/section';
import { paramModel } from 'src/app/models/paramModel';
import { EntiteremService } from 'src/app/service/entiterem.service';
import { IdentificationService } from 'src/app/service/identification.service';
import { ProvinceService } from 'src/app/service/province.service';
import { SectionService } from 'src/app/service/section.service';
import printJS from 'print-js';
import { SituationService } from 'src/app/service/situation.service';
import { identificationModel } from 'src/app/models/identificationModel';


@Component({
  selector: 'app-listidentifsectentite',
  templateUrl: './listidentifsectentite.component.html',
  styleUrls: ['./listidentifsectentite.component.scss']
})
export class ListidentifsectentiteComponent  implements OnInit,OnChanges {
    identification:identification[]=[]
    page:number=0
    section:section[]=[]
    province:province[]=[]
    entite:entiterem[]=[]
    codeprovince:number=0
    @Input() entit:identificationModel=new identificationModel()
    @Output() codeentite:number=0
    id:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    codesection:number=0
    search:string=""
    recherche:string=""
    message:string=""
    @Output() identificat!:identification
    constructor(
     private identificationservice:IdentificationService,
     private sectionservice:SectionService,
     private provinceservice:ProvinceService,
     private situationservice:SituationService,
     private toastservice:MessageService,
     private entiteservice:EntiteremService

    ){}
    ngOnChanges(): void {
        this.ngOnInit();
    }
    ngOnInit(): void {
        this.codeentite=0
        this.identificat=new identificationModel()
        this.collectionidentification()
        this.codeentite=this.entit.codeentite
    }


collectionidentification(){
    if( this.entit.codeentite==null||this.entit.codeentite==0){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une entité', life: 3000 });

    }else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.identificationservice.collectionsidentificationadminsection(this.search,this.entit.codeentite,this.page,this.size).subscribe(
        (data:any)=>{
            this.identification=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
    }
}

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionidentification();
        }

imprimer(){
    if(this.entit.codeentite==0 || this.entit.codeentite==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une entité', life: 3000 });

    } else{
    this.situationservice.impressionlistidentifentite(this.entit.codeentite).subscribe(
        (data:any)=>{
          printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
        }
      );
    }
}
imprimeragent(identification:identification){

    this.situationservice.impressionpersidentifentite(this.entit.codeentite,identification.identifiant).subscribe(
        (data:any)=>{
          printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
        }
      );

}
}
