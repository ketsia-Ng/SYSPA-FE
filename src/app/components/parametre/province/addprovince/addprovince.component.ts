import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { province } from 'src/app/entity/province';
import { ProvinceService } from 'src/app/service/province.service';

@Component({
  selector: 'app-addprovince',
  templateUrl: './addprovince.component.html',
  styleUrls: ['./addprovince.component.scss']
})
export class AddprovinceComponent implements OnInit{
    province:province
    constructor(
        private provinceservice:ProvinceService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {

    }
    create(formulaire:NgForm){
        this.province=formulaire.value;

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
