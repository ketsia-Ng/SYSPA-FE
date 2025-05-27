import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { fonction } from 'src/app/entity/fonction';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-addfonction',
  templateUrl: './addfonction.component.html',
  styleUrls: ['./addfonction.component.scss']
})
export class AddfonctionComponent implements OnInit{
    fonction:fonction
    codesection:number=0;
    constructor(
        private fonctionservice:FonctionService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}
    ngOnInit() {
        this.codesection=this.dialogconfig.data.codesection
    }
    create(formulaire:NgForm){
        this.fonction=formulaire.value;
        this.fonction.codesection=this.codesection
       this.fonctionservice.create(this.fonction).subscribe({
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
