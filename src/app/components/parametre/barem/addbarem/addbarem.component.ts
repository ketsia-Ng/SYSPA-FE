import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { barem } from 'src/app/entity/barem';
import { BaremService } from 'src/app/service/barem.service';

@Component({
  selector: 'app-addbarem',
  templateUrl: './addbarem.component.html',
  styleUrls: ['./addbarem.component.scss']
})
export class AddbaremComponent  implements OnInit{
    barem:barem
    codefonction:number=0;
    constructor(
        private baremservice:BaremService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}
    ngOnInit() {
        this.codefonction=this.dialogconfig.data.codefonction
    }
    create(formulaire:NgForm){
        this.barem=formulaire.value;
        this.barem.codefonction=this.codefonction
       this.baremservice.create(this.barem).subscribe({
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
