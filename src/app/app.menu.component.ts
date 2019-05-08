import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Components', icon: 'list',
                items: [
                    {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'input', routerLink: ['/forms']},
                    {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
                    {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'message', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'attach_file', routerLink: ['/file']},
                    {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
                ]
            },
            {
                label: 'Mega', icon: 'list', badge: 2, mega: true,
                items: [
                    {
                        label: 'Components',
                        items: [
                            {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
                            {label: 'Forms', icon: 'input', routerLink: ['/forms']},
                            {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
                            {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
                            {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
                            {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
                            {label: 'Messages', icon: 'message', routerLink: ['/messages']},
                            {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
                            {label: 'File', icon: 'attach_file', routerLink: ['/file']},
                            {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
                        ]
                    },
                    {
                        label: 'Templates',
                        items: [
                            {label: 'Ultima', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/ultima-ng' },
                            {label: 'Serenity', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/serenity-ng'},
                            {label: 'Avalon', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/avalon-ng'},
                            {label: 'Apollo', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/apollo-ng'},
                            {label: 'Roma', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/roma-ng'},
                            {label: 'Babylon', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/babylon-ng'},
                            {label: 'Manhattan', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/manhattan-ng'},
                            {label: 'Verona', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/verona-ng'},
                            {label: 'Olympia', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/olympia-ng'},
                            {label: 'Ecuador', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/ecuador-ng'}
                        ]
                    },
                    {
                        label: 'Demo',
                        items: [
                            {label: 'PrimeFaces', icon: 'desktop_mac', url: 'https://www.primefaces.org/showcase'},
                            {label: 'PrimeNG', icon: 'desktop_mac',  url: 'https://www.primefaces.org/primeng'},
                            {label: 'PrimeReact', icon: 'desktop_mac',  url: 'https://www.primefaces.org/primereact'}
                        ]
                    }
                ]
            },
            {
                label: 'Pages', icon: 'get_app',
                items: [
                    {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']},
                    {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login Page', icon: 'verified_user', routerLink: ['/login'], target: '_blank'},
                    {label: 'Error Page', icon: 'error', routerLink: ['/error'], target: '_blank'},
                    {label: '404 Page', icon: 'error_outline', routerLink: ['/404'], target: '_blank'},
                    {label: 'Access Denied Page', icon: 'security', routerLink: ['/accessdenied'], target: '_blank'}
                ]
            },
            {
                label: 'Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'subject'},
                                    {label: 'Submenu 1.1.2', icon: 'subject'},
                                    {label: 'Submenu 1.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'subject'},
                                    {label: 'Submenu 1.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'subject'},
                                    {label: 'Submenu 2.1.2', icon: 'subject'},
                                    {label: 'Submenu 2.1.3', icon: 'subject'}
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'subject'},
                                    {label: 'Submenu 2.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'build', routerLink: ['/utils']},
            {label: 'Docs', icon: 'find_in_page', routerLink: ['/documentation']}
        ];
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" *ngIf="!child.routerLink"
                   [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                   (mouseenter)="onMouseEnter(i)" class="ripplelink">
                    <i class="material-icons">{{child.icon}}</i>
                    <span class="menuitem-text">{{child.label}}</span>
                    <i class="material-icons layout-submenu-toggler" *ngIf="child.items">keyboard_arrow_down</i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>

                <a (click)="itemClick($event,child,i)" *ngIf="child.routerLink"
                   [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                   (mouseenter)="onMouseEnter(i)" class="ripplelink">
                    <i class="material-icons">{{child.icon}}</i>
                    <span class="menuitem-text">{{child.label}}</span>
                    <i class="material-icons layout-submenu-toggler" *ngIf="child.items">>keyboard_arrow_down</i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <span class="layout-megamenu-submenu-text" *ngIf="!root && mega">
                    {{child.label}}
                </span>
                <div class="layout-submenu-container" *ngIf="child.items"
                     [ngClass]="{'layout-submenu-megamenu-container':child.mega}" [ngStyle]="{'padding':isActive(i) ? '':'0'}"
                     [@children]="(app.horizontal && !app.isMobile() && root) ? isActive(i) ? 'visible' : 'hidden' : !root && mega ? 'visible' :
                     isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'">
                    <ul app-submenu [item]="child" class="layout-submenu"
                        [ngClass]="{'layout-megamenu':child.mega}" [mega]="child.mega"
                        [parentActive]="isActive(i)"></ul>
                </div>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px',
            })),
            state('hiddenAnimated', style({
                height: '0px',
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    @Input() mega: boolean;

    _reset: boolean;

    _parentActive: boolean;

    activeIndex: number;

    constructor(public app: AppMainComponent, public router: Router, public location: Location, public appMenu: AppMenuComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
            event.preventDefault();
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex as number === index) ? -1 : index;
        }

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item: item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (!this.app.horizontal) {
                this.app.menuActive = false;
            }

            if (this.app.horizontal) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && this.app.horizontal
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && this.app.horizontal) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
