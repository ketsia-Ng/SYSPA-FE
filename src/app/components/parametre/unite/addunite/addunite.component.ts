import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { unite } from 'src/app/entity/unite';
import { UniteService } from 'src/app/service/unite.service';

@Component({
  selector: 'app-addunite',
  templateUrl: './addunite.component.html',
  styleUrls: ['./addunite.component.scss']
})
export class AdduniteComponent implements OnInit{
    unite:unite
    codesection:number=0;
    constructor(
        private uniteservice:UniteService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}
    ngOnInit() {
        this.codesection=this.dialogconfig.data.codesection
    }
    create(formulaire:NgForm){
        this.unite=formulaire.value;
        this.unite.codesection=this.codesection
       this.uniteservice.create(this.unite).subscribe({
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
