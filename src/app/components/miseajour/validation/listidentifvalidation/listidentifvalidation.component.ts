import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identification } from 'src/app/entity/identification';
import { paramModel } from 'src/app/models/paramModel';
import { IdentificationService } from 'src/app/service/identification.service';

@Component({
  selector: 'app-listidentifvalidation',
  templateUrl: './listidentifvalidation.component.html',
  styleUrls: ['./listidentifvalidation.component.scss']
})

export class ListidentifvalidationComponent implements OnInit {
    identification:identification[]=[]
    page:number=0
    id:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    titre:string=""
    validation:number=0
    @Output() param:paramModel=new paramModel()
    @Input() parame!: paramModel
    constructor(
    private route:ActivatedRoute,
     private identificationservice:IdentificationService,
    ){}

    ngOnInit(): void {
        this.validation=+this.route.snapshot.params["val"];
        this.collectionidentification();
        this.changementtitre()

    }
changementtitre(){
    switch(this.validation){
        case 0:
            this.titre="Situation En attente";
            break;
        case 1:
            this.titre="Situation Validée";
            break;
        case 2:
            this.titre="Situation Rejetée"
            break;
        case 3:
            this.titre="Situation Bloquée"
            break;
    }
}
collectionidentification(){
    this.initialiser();
  if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
     this.identificationservice.collectionsidentificationvalidation(this.search,this.validation,this.page,this.size).subscribe(
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
this.param.validation=this.validation
this.id=data.identifiant


}
initialiser(){
    this.param=new paramModel()
    this.param.identifiant=0
    this.param.validation=0

}
rafraichir(event:Event){
    this.collectionidentification();
}
}
