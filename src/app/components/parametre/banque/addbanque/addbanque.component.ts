import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { banque } from 'src/app/entity/banque';
import { BanqueService } from 'src/app/service/banque.service';

@Component({
  selector: 'app-addbanque',
  templateUrl: './addbanque.component.html',
  styleUrls: ['./addbanque.component.scss']
})
export class AddbanqueComponent implements OnInit{
    banque:banque
    constructor(
        private banqueservice:BanqueService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {

    }
    create(formulaire:NgForm){
        this.banque=formulaire.value;

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
