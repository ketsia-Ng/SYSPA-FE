import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { identification } from 'src/app/entity/identification';
import { IdentificationService } from 'src/app/service/identification.service';

@Component({
  selector: 'app-addidentification',
  templateUrl: './addidentification.component.html',
  styleUrls: ['./addidentification.component.scss']
})
export class AddidentificationComponent implements OnInit{
    identification:identification
    constructor(
        private identificationservice:IdentificationService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {

    }
    create(formulaire:NgForm){
        this.identification=formulaire.value;

        this.identificationservice.create(this.identification).subscribe({
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
