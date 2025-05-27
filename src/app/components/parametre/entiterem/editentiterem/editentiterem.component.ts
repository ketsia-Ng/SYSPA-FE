import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { entiterem } from 'src/app/entity/entiterem';
import { province } from 'src/app/entity/province';
import { section } from 'src/app/entity/section';
import { EntiteremService } from 'src/app/service/entiterem.service';
import { ProvinceService } from 'src/app/service/province.service';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-editentiterem',
  templateUrl: './editentiterem.component.html',
  styleUrls: ['./editentiterem.component.scss']
})
export class EditentiteremComponent  implements OnInit {

    entiterem!:entiterem
    section:section[]=[]
    province:province[]=[]
    constructor(
    private entiteremservice:EntiteremService,
    private sectionservice:SectionService,
    private provinceservice:ProvinceService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}

    ngOnInit() {
        this.entiterem=this.dialogconfig.data.entiterem
        this.collection()
    }

    collection(){
this.sectionservice.collectionallsections().subscribe(
    (data)=>{
        this.section=data;
    }
)
this.provinceservice.collectionallprovinces().subscribe(
    (data)=>{
        this.province=data;
    }
)
        }

    edit(){

        this.entiteremservice.create(this.entiterem).subscribe({
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
