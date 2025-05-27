import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { entiterem } from 'src/app/entity/entiterem';
import { EntiteremService } from 'src/app/service/entiterem.service';

@Component({
  selector: 'app-addentiterem',
  templateUrl: './addentiterem.component.html',
  styleUrls: ['./addentiterem.component.scss']
})

export class AddentiteremComponent implements OnInit{
    entiterem:entiterem
    codesection:number=0;
    codeprovince:number=0;
    constructor(
        private entiteremservice:EntiteremService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}

    ngOnInit() {
        this.codesection=this.dialogconfig.data.codesection
        this.codeprovince=this.dialogconfig.data.codeprovince
    }

    create(formulaire:NgForm){
        this.entiterem=formulaire.value;
        this.entiterem.codesection=this.codesection
        this.entiterem.codeprovince=this.codeprovince
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
