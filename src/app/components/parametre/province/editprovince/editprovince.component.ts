import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { province } from 'src/app/entity/province';
import { ProvinceService } from 'src/app/service/province.service';

@Component({
  selector: 'app-editprovince',
  templateUrl: './editprovince.component.html',
  styleUrls: ['./editprovince.component.scss']
})
export class EditprovinceComponent implements OnInit {
    province!:province
    constructor(
    private provinceservice:ProvinceService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {
        this.province=this.dialogconfig.data.province
    }
    edit(){

        this.provinceservice.create(this.province).subscribe({
         next:(res:any)=>{
           this.toastservice.add({ severity: 'success', summary: 'Opératioon effectuée', detail: "L'enregistrement reussi avec succes!!" })
            this.modalRef.close(res);
          },
          error:(error)=>{
            this.toastservice.add({ severity: 'error', summary: 'Opération non effectuée', detail: "L'enregistrement echouée!!!" })
          }
        });

        }
        effacer(){
            this.modalRef.close();
          }

}
