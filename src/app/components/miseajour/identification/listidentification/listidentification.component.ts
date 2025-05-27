import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { identification } from 'src/app/entity/identification';
import { IdentificationService } from 'src/app/service/identification.service';
import { AddidentificationComponent } from '../addidentification/addidentification.component';
import { EditidentificationComponent } from '../editidentification/editidentification.component';

@Component({
  selector: 'app-listidentification',
  templateUrl: './listidentification.component.html',
  styleUrls: ['./listidentification.component.scss']
})
export class ListidentificationComponent implements OnInit {
    identification:identification[]=[]
page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private identificationservice:IdentificationService,
     private dialogservice:DialogService,
    ){}

    ngOnInit(): void {
        this.collectionidentification();
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
openmodal(){
    this.modalref=this.dialogservice.open(AddidentificationComponent,{
        header: 'Enregistrement Identification',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionidentification();
      }
  });
}
openmodaledit(identification:identification){
    this.modalref=this.dialogservice.open(EditidentificationComponent,{
      header: 'Modification Identification',
      width:'50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,

      maximizable: false,
      data:{
        identification:identification
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionidentification();
    }
});
      }

          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionidentification();
        }

}
