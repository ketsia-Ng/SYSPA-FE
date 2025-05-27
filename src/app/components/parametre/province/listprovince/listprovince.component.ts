import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { province } from 'src/app/entity/province';
import { ProvinceService } from 'src/app/service/province.service';
import { EditprovinceComponent } from '../editprovince/editprovince.component';
import { AddprovinceComponent } from '../addprovince/addprovince.component';

@Component({
  selector: 'app-listprovince',
  templateUrl: './listprovince.component.html',
  styleUrls: ['./listprovince.component.scss']
})
export class ListprovinceComponent  implements OnInit {
    province:province[]=[]
    page:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    search:string=""
    recherche:string=""
    message:string=""
   modalref!:DynamicDialogRef|undefined
    constructor(
     private provinceservice:ProvinceService,
     private dialogservice:DialogService,
    private toastservice:MessageService,
    private confirmservice:ConfirmationService
    ){}

    ngOnInit(): void {
        this.collectionprovince();
    }

collectionprovince(){
    if(this.recherche.length==0){
        this.search="0"
      }else{
        this.search=this.recherche
      }
      this.provinceservice.collectionsprovinces(this.search,this.page,this.size).subscribe(
        (data:any)=>{
            this.province=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });
}
openmodal(){
    this.modalref=this.dialogservice.open(AddprovinceComponent,{
        header: 'Enregistrement Province',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
    });
    this.modalref.onClose.subscribe((res) => {
      if (res) {
      this.collectionprovince();
      }
  });
}
openmodaledit(province:province){
    this.modalref=this.dialogservice.open(EditprovinceComponent,{
      header: 'Modification Province',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        province:province
      }
  });
   this.modalref.onClose.subscribe((res) => {
    if (res) {
    this.collectionprovince();
    }
});
      }
      confirm(province:province) {
        if(province.etat==false){
        this.message="Voulez vous activer la province "+province.nomprovince+" ?"
        }else{
          this.message="Voulez vous desactiver la province "+province.nomprovince+" ?"
        }
         this.confirmservice.confirm({
              message: this.message,
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle text-primary',
              rejectButtonStyleClass: 'p-button-sm',
              acceptButtonStyleClass: 'p-button-outlined p-button-sm',
              accept: () => {
                this.changerstatut(province)
            },
            reject: () => {
              this.toastservice.add({ severity: 'error', summary: 'Rejet', detail: 'Operation non effectuée', life: 3000 });
            }
          });
        }

        changerstatut(provinces:province){
            this.provinceservice.changerstatut(provinces.codeprovince).subscribe(
              (response)=>{
                const index = this.province.indexOf(provinces);
                      provinces.etat = response;
                      this.province[index] = provinces;
                      this.province = [...this.province];
                      if(response){
                        this.toastservice.add({ severity: 'info', summary: 'info', detail: 'La province est activée',life:3000});

                      }else{
                        this.toastservice.add({ severity: 'info', summary: 'Info', detail: 'La province est desactivée ',life:3000});
                      }
              }
            );
          }
          onPageChange(event: any) {

            this.page = event.page;
            this.size=event.rows;
            this.collectionprovince();
        }
}
