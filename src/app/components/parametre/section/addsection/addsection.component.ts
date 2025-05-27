import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { section } from 'src/app/entity/section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-addsection',
  templateUrl: './addsection.component.html',
  styleUrls: ['./addsection.component.scss']
})
export class AddsectionComponent implements OnInit{
    section:section
    constructor(
        private sectionservice:SectionService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
    ){}
    ngOnInit() {

    }
    create(formulaire:NgForm){
        this.section=formulaire.value;

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
