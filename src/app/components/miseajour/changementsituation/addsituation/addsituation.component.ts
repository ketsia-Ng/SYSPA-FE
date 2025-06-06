import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { banque } from 'src/app/entity/banque';
import { barem } from 'src/app/entity/barem';
import { detailbarem } from 'src/app/entity/detailbarem';
import { entiterem } from 'src/app/entity/entiterem';
import { fonction } from 'src/app/entity/fonction';
import { identification } from 'src/app/entity/identification';
import { position } from 'src/app/entity/position';
import { province } from 'src/app/entity/province';
import { section } from 'src/app/entity/section';
import { situation } from 'src/app/entity/situation';
import { unite } from 'src/app/entity/unite';
import { BanqueService } from 'src/app/service/banque.service';
import { BaremService } from 'src/app/service/barem.service';
import { DetailbaremService } from 'src/app/service/detailbarem.service';
import { EntiteremService } from 'src/app/service/entiterem.service';
import { FonctionService } from 'src/app/service/fonction.service';
import { PositionService } from 'src/app/service/position.service';
import { ProvinceService } from 'src/app/service/province.service';
import { SectionService } from 'src/app/service/section.service';
import { SituationService } from 'src/app/service/situation.service';
import { UniteService } from 'src/app/service/unite.service';

@Component({
  selector: 'app-addsituation',
  templateUrl: './addsituation.component.html',
  styleUrls: ['./addsituation.component.scss']
})
export class AddsituationComponent implements OnInit{

    situation:situation=new situation()
    section:section[]=[]
    province:province[]=[]
    entite:entiterem[]=[]
    unite:unite[]=[]
    barem:barem[]=[]
    baremone!:barem
    fonction:fonction[]=[]
    banque:banque[]=[]
    position:position[]=[]
    codesection:number=0
    codeprovince:number=0
    identification!:identification
    detailbarem:detailbarem[]=[]
    page:number=0
    codebarem:number=0
    totalpages:number=0
    size:number=10
    count:number=0
    constructor(
        private situationservice:SituationService,
        private detailbaremservice:DetailbaremService,
        private sectionervice:SectionService,
        private baremservice:BaremService,
        private provinceservice:ProvinceService,
        private entiteservice:EntiteremService,
        private uniteservice:UniteService,
        private fonctionservice:FonctionService,
        private positionservice:PositionService,
        private banqueservice:BanqueService,
        private toastservice:MessageService,
        private modalRef:DynamicDialogRef,
        private dialogconfig:DynamicDialogConfig
    ){}

    ngOnInit() {
    this.identification=this.dialogconfig.data.identification
    this.collectionssection()
    }

    create(form:NgForm){
        this.situation=form.value
        this.situation.identifiant=this.identification.identifiant
        this.situationservice.create(this.situation).subscribe({
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
collectionssection(){
  this.sectionervice.collectionallsections().subscribe(
    (data)=>{
      this.section=data
    }
  )
  this.banqueservice.collectionallbanques().subscribe(
    (data)=>{
      this.banque=data
    }
  )
  this.positionservice.collectionallposition().subscribe(
    (data)=>{
      this.position=data
    }
  )
  this.provinceservice.collectionallprovinces().subscribe(
    (data)=>{
      this.province=data
    }
  )
}
getentiterem(codesection:any,codeprovince:any){

    if( codesection==null && codeprovince==null){
  }else{
      this.entiteservice.collectionallentiterem(codesection,codeprovince).subscribe(
        (data:any)=>{
            this.entite=data
      });
    }
}
getunite(codesection:any){
    if(codesection==null||codesection==0){
}else{
      this.uniteservice.collectionallunite(codesection).subscribe(
        (data:any)=>{
            this.unite=data
      });
    }
}
getbarem(event:any){
    this.baremservice.collectionsallbarems(event.value).subscribe(
        (data)=>{
            this.barem=data
        }
    )
}
getfonction(codesection:any){
    if(codesection==null||codesection==0){


    }else{
      this.fonctionservice.collectionallfonctions(codesection).subscribe(
        (data:any)=>{
            this.fonction=data
      });
    }
}
changesection(event:any){
this.codesection=event.value
    this.getentiterem(this.codesection,this.codeprovince);
    this.getunite(this.codesection);
    this.getfonction(this.codesection);
}

changeprovince(event:any){
    this.codeprovince=event.value
    this.getentiterem(this.codesection,this.codeprovince);
}
getdetailbarem(event:any){
this.codebarem=event.value
this.baremone=this.barem.find(e=>e.codebarem==this.codebarem)
      this.detailbaremservice.collectionsdetailbarems( "0",this.codebarem,this.page,this.size).subscribe(
        (data:any)=>{

            this.detailbarem=data.content
            this.count=data.totalElements
            this.totalpages=data.totalPages
      });

}
onPageChange(event: any) {

    this.page = event.page;
    this.size=event.rows;
    this.getdetailbarem(this.codebarem);
}
}
