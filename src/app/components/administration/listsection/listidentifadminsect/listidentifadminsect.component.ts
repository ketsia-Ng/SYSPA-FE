import { Component, OnInit, Output } from '@angular/core';
import { identification } from 'src/app/entity/identification';
import { section } from 'src/app/entity/section';
import { paramModel } from 'src/app/models/paramModel';
import printJS from 'print-js';
import { IdentificationService } from 'src/app/service/identification.service';
import { SectionService } from 'src/app/service/section.service';
import { SituationService } from 'src/app/service/situation.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImpressionComponent } from '../../impression/impression.component';

@Component({
  selector: 'app-listidentifadminsect',
  templateUrl: './listidentifadminsect.component.html',
  styleUrls: ['./listidentifadminsect.component.scss']
})
export class ListidentifadminsectComponent  implements OnInit {
    identification:identification[]=[]
    page:number=0
    section:section[]=[]
    id:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    codesection:number=0
    search:string=""
    recherche:string=""
    message:string=""
    @Output() param!:paramModel
    modalref!:DynamicDialogRef|undefined
    constructor(
     private identificationservice:IdentificationService,
     private sectionservice:SectionService,
          private dialogservice:DialogService,
     private toastservice:MessageService,
     private situationservice:SituationService
    ){}

    ngOnInit(): void {
        this.collectionsection()
    }
collectionsection(){
    this.sectionservice.collectionallsections().subscribe(
        (data:any)=>{
            this.section=data
      });
}
collectionidentification(){
      if(this.codesection==0 || this.codesection==null){
    this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
}else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.identificationservice.collectionsidentificationconsultationavance(this.search,this.codesection,this.page,this.size).subscribe(
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
fonctionclick(data:identification){
this.param=new paramModel()
this.param.identifiant=data.identifiant;
this.id=data.identifiant
this.param.codesection=this.codesection

}
imprimersection(){
    if(this.codesection==0 || this.codesection==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section', life: 3000 });
    }else{
    this.situationservice.impressionlistidentifsection(this.codesection).subscribe(
        (data:any)=>{
          printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
        }
      );
}
}
imprimeragent(identification:identification){

    this.situationservice.impressionpersidentifsection(this.codesection,identification.identifiant).subscribe(
        (data:any)=>{
            // printJS({printable: data.report, type: 'pdf', base64: true, showModal:true});
          //window.open("data:application/pdf;base64," + data.report, "_blank");
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
