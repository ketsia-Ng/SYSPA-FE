import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { barem } from 'src/app/entity/barem';
import { fonction } from 'src/app/entity/fonction';
import { section } from 'src/app/entity/section';
import { BaremService } from 'src/app/service/barem.service';
import { FonctionService } from 'src/app/service/fonction.service';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-editbarem',
  templateUrl: './editbarem.component.html',
  styleUrls: ['./editbarem.component.scss']
})
export class EditbaremComponent  implements OnInit {

    barem!:barem
    fonction:fonction[]=[]
    section:section[]=[]
    codesection:number=0
    constructor(
    private baremservice:BaremService,
    private Fonctionservice:FonctionService,
    private sectionservice:SectionService,
    private dialogconfig:DynamicDialogConfig,
    private toastservice:MessageService,
    private modalRef:DynamicDialogRef
    ){}

    ngOnInit() {
        this.barem=this.dialogconfig.data.barem
        this.codesection=this.dialogconfig.data.codesection
        this.collection()
        this.getfonction()
    }

collection(){
    this.sectionservice.collectionallsections().subscribe(
        (data)=>{
            this.section=data;
        }
    )


        }
        getfonction(){
            this.Fonctionservice.collectionallfonctions(this.codesection).subscribe(
                (data)=>{
                    this.fonction=data;
                }
            )
        }

    edit(){

        this.baremservice.create(this.barem).subscribe({
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
