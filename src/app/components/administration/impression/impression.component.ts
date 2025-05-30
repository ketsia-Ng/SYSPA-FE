import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
    pdfSrc:any;
    constructor(
        private configdialog:DynamicDialogConfig
    ){}
ngOnInit() {

    this.pdfSrc=  this.configdialog.data.pdfSrc
    console.log(this.pdfSrc);

}

}
