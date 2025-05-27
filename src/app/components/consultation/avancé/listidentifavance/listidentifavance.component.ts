import { Component, OnInit, Output } from '@angular/core';
import { identification } from 'src/app/entity/identification';
import { section } from 'src/app/entity/section';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-listidentifavance',
  templateUrl: './listidentifavance.component.html',
  styleUrls: ['./listidentifavance.component.scss']
})
export class ListidentifavanceComponent  implements OnInit {
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
    constructor(
     private identificationservice:IdentificationService,
     private sectionservice:SectionService
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

}
