import {Component} from '@angular/core';
import {BreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs h1 {
            margin-top: 30px;
            font-weight: 400;
            font-size: 24px;
        }

        .docs pre.doc-command {
            font-family: monospace;
            background-color: #424242;
            color: #ffffff;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

        .docs p,
        .docs li {
            line-height: 1.5;
        }
        `
    ]
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Documentation'}
        ]);
    }

}
