import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb.service';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit {

    lineData: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Components'},
            {label: 'Charts', routerLink: ['/chart']}
        ]);
    }

    ngOnInit() {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#03A9F4'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#E91E63'
                }
            ]
        };

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#4CAF50',
                    borderColor: '#4CAF50',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFC107',
                    borderColor: '#FFC107',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.pieData = {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [
                {
                    data: [540, 325, 702, 421],
                    backgroundColor: [
                        '#03A9F4',
                        '#E91E63',
                        '#4CAF50',
                        '#FFC107'
                    ],
                    hoverBackgroundColor: [
                        '#81D4FA',
                        '#e976a1',
                        '#A5D6A7',
                        '#FFE082'
                    ]
                }]
            };

        this.polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    '#FFC107',
                    '#03A9F4',
                    '#4CAF50',
                    '#E91E63',
                    '#9C27B0'
                ],
                label: 'My dataset'
            }],
            labels: [
                'Yellow',
                'Blue',
                'Green',
                'Red',
                'Purple'
            ]
        };

        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,193,7,0.2)',
                    borderColor: 'rgba(255,193,7,1)',
                    pointBackgroundColor: 'rgba(255,193,7,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,193,7,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(76,175,80,0.2)',
                    borderColor: 'rgba(76,175,80,1)',
                    pointBackgroundColor: 'rgba(76,175,80,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(76,175,80,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    }
}
