import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { detailbarem } from 'src/app/entity/detailbarem';
import { DetailbaremService } from 'src/app/service/detailbarem.service';

@Component({
  selector: 'app-adddetailbarem',
  templateUrl: './adddetailbarem.component.html',
  styleUrls: ['./adddetailbarem.component.scss']
})
export class AdddetailbaremComponent  implements OnInit{
    codebarem:number=0
    detailbarem!:detailbarem
    constructor(
        private detailbaremservice:DetailbaremService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}
    ngOnInit() {
        this.codebarem=this.dialogconfig.data.codebarem
    }
    create(formulaire:NgForm){
        this.detailbarem=formulaire.value;
        this.detailbarem.codebarem=this.codebarem
       this.detailbaremservice.create(this.detailbarem).subscribe({
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
