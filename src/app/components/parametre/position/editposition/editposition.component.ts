import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { position } from 'src/app/entity/position';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-editposition',
  templateUrl: './editposition.component.html',
  styleUrls: ['./editposition.component.scss']
})
export class EditpositionComponent {
    position!:position
    constructor(
    private positionservice:PositionService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {
        this.position=this.dialogconfig.data.position
    }
    edit(){

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
