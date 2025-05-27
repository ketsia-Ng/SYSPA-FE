import { Component, OnInit, Output } from '@angular/core';
import { identification } from 'src/app/entity/identification';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';

@Component({
  selector: 'app-listidentifconsultation',
  templateUrl: './listidentifconsultation.component.html',
  styleUrls: ['./listidentifconsultation.component.scss']
})
export class ListidentifconsultationComponent implements OnInit {
    identification:identification[]=[]
    page:number=0
    id:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
    @Output() param!:paramModel
    constructor(
     private identificationservice:IdentificationService,
    ){}

    ngOnInit(): void {
    }

collectionidentification(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.identificationservice.collectionsidentifications(this.search,this.page,this.size).subscribe(
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

}

}
