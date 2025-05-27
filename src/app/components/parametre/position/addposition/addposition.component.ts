import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { position } from 'src/app/entity/position';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-addposition',
  templateUrl: './addposition.component.html',
  styleUrls: ['./addposition.component.scss']
})
export class AddpositionComponent {
    position:position
    constructor(
        private positionservice:PositionService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {

    }
    create(formulaire:NgForm){
        this.position=formulaire.value;

        this.positionservice.create(this.position).subscribe({
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
