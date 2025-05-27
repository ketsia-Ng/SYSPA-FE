import { Component, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { barem } from 'src/app/entity/barem';
import { fonction } from 'src/app/entity/fonction';
import { BaremService } from 'src/app/service/barem.service';
import { FonctionService } from 'src/app/service/fonction.service';
import { SectionService } from 'src/app/service/section.service';
import { AddbaremComponent } from '../addbarem/addbarem.component';
import { EditbaremComponent } from '../editbarem/editbarem.component';
import { section } from 'src/app/entity/section';
import { paramModel } from 'src/app/models/paramModel';

@Component({
  selector: 'app-listbarem',
  templateUrl: './listbarem.component.html',
  styleUrls: ['./listbarem.component.scss']
})
export class ListbaremComponent  implements OnInit{
    section:section[]=[]
    fonction:fonction[]=[]
    barem:barem[]=[]
    codefonction:number=0
    codesection:number=0
    id:number=0
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
    @Input() parame!:paramModel
    @Output() param:paramModel=new paramModel()
   modalref!:DynamicDialogRef|undefined
    constructor(
     private baremservice:BaremService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private sectionservice:SectionService,
    private fonctionservice:FonctionService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionsection();
    }
rechercher(){
    this.initialiser();
    this.collectionbarem();
}

collectionbarem(){

    if(  this.codefonction==0||this.codefonction==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une section et une fonction', life: 3000 });

    }else{
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.baremservice.collectionsbarems(this.search,this.codefonction,this.page,this.size).subscribe(
        (data:any)=>{
            this.barem=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
    }

}
collectionsection(){
   this.initialiser()
    this.sectionservice.collectionallsections().subscribe(
        (data:any)=>{
            this.section=data
      });
}
getfonction(event:any){
    this.fonctionservice.collectionallfonctions(event.value).subscribe(
        (data:any)=>{
            this.fonction=data

      });
}


openmodal(){
    if(this.codefonction==0||this.codefonction==null){
        this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Veuillez selectionner une fonction', life: 3000 });
}else{
    this.modalref=this.dialogservice.open(AddbaremComponent,{
        header: 'Enregistrement Unité',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data:{
            codefonction:this.codefonction
          }
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {

      this.collectionbarem();
      }
  });

}
}
openmodaledit(barem:barem){

    this.modalref=this.dialogservice.open(EditbaremComponent,{
      header: 'Modification Unité',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        barem:barem,
        codesection:this.codesection
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {

    this.collectionbarem();
    }
});

      }
      confirm(barem:barem) {
        if(barem.etat==false){
        this.message="Voulez vous activer la barem "+barem.libelle+" ?"
        }else{
          this.message="Voulez vous desactiver la barem "+barem.libelle+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(barem)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(barems:barem){
            this.baremservice.changerstatut(barems.codebarem).subscribe(
              (response)=>{
                const index = this.barem.indexOf(barems);
                      barems.etat = response;
                      this.barem[index] = barems;
                      this.barem = [...this.barem];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La barem est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La barem est desactivée ',life:3000});
                      }
              }
            );
          }
fonctionclick(barem:barem){
    this.param=new paramModel();
    this.param.codebarem=barem.codebarem
    this.param.titre=barem.libelle
    this.id=barem.codebarem
}
rafraichir(){
    this.collectionbarem()
}

onPageChange(event: any) {

    this.page = event.page;
    this.size=event.rows;
    this.collectionbarem();
}
initialiser(){
    this.param.identifiant=0
    this.param.codebarem=0
    this.param.titre=""

}
}
