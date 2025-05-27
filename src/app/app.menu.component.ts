import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Tableau de Bord', icon: 'pi pi-home', routerLink: ['/']},
            {
                label: 'Consultation', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    {label: 'Simple', icon: 'pi pi-fw pi-id-card', routerLink: ['/consultationsimple']},
                    {label: 'Avancée', icon: 'pi pi-fw pi-check-square', routerLink: ['/consultationavance']},
                 ]
            },
            {
                label: 'Mises à Jours', icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Identification', icon: 'pi pi-fw pi-star', routerLink: ['/identification']},
                    {label: 'Changement de Situation', icon: 'pi pi-fw pi-check-square', routerLink: ['/changementsituation']},
                    {label: 'Validation', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {label: 'En Attente', icon: 'pi pi-fw pi-align-left', routerLink: ['/validationattente/0']},
                            {label: 'Validé ', icon: 'pi pi-fw pi-align-left', routerLink: ['/validation/1']},
                            {label: 'Rejété', icon: 'pi pi-fw pi-align-left', routerLink: ['/validationrejete/2']},
                            {label: 'Bloqué', icon: 'pi pi-fw pi-align-left', routerLink: ['/validationbloque/3']},
                        ]
                    },
                    ]

                    },
                    {
                        label: 'Administration',
                        items: [
                            {label: 'Liste par section', icon: 'pi pi-desktop', routerLink: ['/listsection'] },
                            {label: 'impression par section et entité', icon: 'pi pi-desktop',  routerLink: ['/listsectionentite'] },
                        ]
                    },
                    {
                        label: 'Paramètres',
                        items: [
                            {label: 'Section', icon: 'pi pi-fw pi-pencil', routerLink: ['/section']},
                            {label: 'Province', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/province']},
                            {label: 'Entité rémunérée', icon: 'pi pi-fw pi-calendar', routerLink: ['/entite']},
                            {label: 'Unité d’affectation', icon: 'pi pi-fw pi-globe', routerLink: ['/unite']},
                            {label: 'Fonction', icon: 'pi pi-fw pi-sign-in', routerLink: ['/fonction']},
                            {label: 'Position', icon: 'pi pi-fw pi-dollar', routerLink: ['/position']},
                            {label: 'Barème', icon: 'pi pi-fw pi-question-circle', routerLink: ['/bareme']},
                            {label: 'Banque', icon: 'pi pi-fw pi-times-circle', routerLink: ['/banque']}
                        ]
                    }
                ]
            }


    }

