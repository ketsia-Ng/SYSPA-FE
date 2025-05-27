import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { section } from 'src/app/entity/section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-editsection',
  templateUrl: './editsection.component.html',
  styleUrls: ['./editsection.component.scss']
})
export class EditsectionComponent implements OnInit {
    section!:section
    constructor(
    private sectionservice:SectionService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {
        this.section=this.dialogconfig.data.section
    }
    edit(){

        this.sectionservice.create(this.section).subscribe({
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
