import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { fonction } from 'src/app/entity/fonction';
import { section } from 'src/app/entity/section';
import { FonctionService } from 'src/app/service/fonction.service';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-editfonction',
  templateUrl: './editfonction.component.html',
  styleUrls: ['./editfonction.component.scss']
})
export class EditfonctionComponent implements OnInit {

    fonction!:fonction
    section:section[]=[]
    
    constructor(
    private fonctionservice:FonctionService,
    private sectionservice:SectionService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}

    ngOnInit() {
        this.fonction=this.dialogconfig.data.fonction
        this.collection()
    }

    collection(){
this.sectionservice.collectionallsections().subscribe(
    (data)=>{
        this.section=data;
    }
)
        }

    edit(){

        this.fonctionservice.create(this.fonction).subscribe({
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
