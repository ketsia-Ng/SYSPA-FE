import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { banque } from 'src/app/entity/banque';
import { BanqueService } from 'src/app/service/banque.service';

@Component({
  selector: 'app-editbanque',
  templateUrl: './editbanque.component.html',
  styleUrls: ['./editbanque.component.scss']
})
export class EditbanqueComponent implements OnInit {
    banque!:banque
    constructor(
    private banqueservice:BanqueService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {
        this.banque=this.dialogconfig.data.banque
    }
    edit(){

        this.banqueservice.create(this.banque).subscribe({
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
