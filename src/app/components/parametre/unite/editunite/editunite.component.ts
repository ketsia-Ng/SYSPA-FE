import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { section } from 'src/app/entity/section';
import { unite } from 'src/app/entity/unite';
import { SectionService } from 'src/app/service/section.service';
import { UniteService } from 'src/app/service/unite.service';

@Component({
  selector: 'app-editunite',
  templateUrl: './editunite.component.html',
  styleUrls: ['./editunite.component.scss']
})
export class EdituniteComponent implements OnInit {

    unite!:unite
    section:section[]=[]
    constructor(
    private uniteservice:UniteService,
    private sectionservice:SectionService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}

    ngOnInit() {
        this.unite=this.dialogconfig.data.unite
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

        this.uniteservice.create(this.unite).subscribe({
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
