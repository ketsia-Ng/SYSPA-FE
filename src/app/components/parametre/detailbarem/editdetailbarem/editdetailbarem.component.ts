import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { detailbarem } from 'src/app/entity/detailbarem';
import { DetailbaremService } from 'src/app/service/detailbarem.service';

@Component({
  selector: 'app-editdetailbarem',
  templateUrl: './editdetailbarem.component.html',
  styleUrls: ['./editdetailbarem.component.scss']
})
export class EditdetailbaremComponent implements OnInit {

        detailbarem!:detailbarem
        constructor(
        private detailbaremservice:DetailbaremService,
        private dialogconfig:DynamicDialogConfig,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef
        ){}

        ngOnInit() {
            this.detailbarem=this.dialogconfig.data.detailbarem
        }

        edit(){

            this.detailbaremservice.create(this.detailbarem).subscribe({
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
