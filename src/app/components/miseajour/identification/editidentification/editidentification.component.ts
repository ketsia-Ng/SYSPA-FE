import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { identification } from 'src/app/entity/identification';
import { IdentificationService } from 'src/app/service/identification.service';

@Component({
  selector: 'app-editidentification',
  templateUrl: './editidentification.component.html',
  styleUrls: ['./editidentification.component.scss']
})
export class EditidentificationComponent  implements OnInit {
    identification!:identification
    constructor(
    private identificationservice:IdentificationService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {
        this.identification=this.dialogconfig.data.identification
        console.log(this.identification)
    }
    edit(){

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
