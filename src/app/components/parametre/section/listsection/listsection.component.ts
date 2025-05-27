import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { section } from 'src/app/entity/section';
import { AddsectionComponent } from '../addsection/addsection.component';
import { EditsectionComponent } from '../editsection/editsection.component';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-listsection',
  templateUrl: './listsection.component.html',
  styleUrls: ['./listsection.component.scss']
})
export class ListsectionComponent  implements OnInit {
    section:section[]=[]
    page:number=0
    totalpages:number=0
    size:number=10;
    count:number=0;
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private sectionservice:SectionService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionsection();
    }

collectionsection(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.sectionservice.collectionssections(this.search,this.page,this.size).subscribe(
        (data:any)=>{
          //  console.log(data);
            this.section=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
}
openmodal(){
    this.modalref=this.dialogservice.open(AddsectionComponent,{
        header: 'Enregistrement Section',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionsection();
      }
  });
}
openmodaledit(section:section){
    this.modalref=this.dialogservice.open(EditsectionComponent,{
      header: 'Modification Section',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        section:section
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionsection();
    }
});
      }
      confirm(section:section) {
        if(section.etat==false){
        this.message="Voulez vous activer la section "+section.nomsection+" ?"
        }else{
          this.message="Voulez vous desactiver la section "+section.nomsection+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(section)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(sections:section){
            this.sectionservice.changerstatut(sections.codesection).subscribe(
              (response)=>{
                const index = this.section.indexOf(sections);
                      sections.etat = response;
                      this.section[index] = sections;
                      this.section = [...this.section];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La section est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La section est desactivée ',life:3000});
                      }
              }
            );
          }



          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionsection();
        }

}
