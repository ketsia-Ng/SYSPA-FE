import { Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from './app.menu.service';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-menuitem]',
    /* tslint:enable:component-selector */
    template: `
		<ng-container>
			<a [attr.href]="item.url" (click)="itemClick($event)" *ngIf="(!item.routerLink || item.items) && item.visible !== false "
               (mouseenter)="onMouseEnter()" (keydown.enter)="itemClick($event)" pRipple [ngClass]="item.class"
			   [attr.target]="item.target" [attr.tabindex]="0">
				<i *ngIf="item.icon" [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
				<span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
			</a>
			<a (click)="itemClick($event)" (mouseenter)="onMouseEnter()" *ngIf="(item.routerLink && !item.items) && item.visible !== false "
			   [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink" pRipple [ngClass]="item.class"
			   [routerLinkActiveOptions]="{exact: !item.preventExact}" [attr.target]="item.target" [attr.tabindex]="0">
                <i *ngIf="item.icon" [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
				<span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
			</a>
			<span class="layout-megamenu-submenu-text" *ngIf="(!root && mega) && item.visible !== false">
                {{item.label}}
            </span>

			<div class="layout-submenu-container" *ngIf="item.items && (active || (!root && mega)) && item.visible !== false "
				 [ngClass]="{'layout-submenu-megamenu-container':mega}" [ngStyle]="{'padding':active ? '':'0'}"
				 [@children]="(app.horizontal && !appMain.isMobile() && root) ? active ? 'visible' : 'hidden' :
                     !root && mega ? 'visible' : active ? 'visibleAnimated' : 'hiddenAnimated'">
                <ul class="layout-submenu" [ngClass]="{'layout-megamenu': item.mega}">
                    <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                        <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [mega]="item.mega" [class]="child.badgeClass"></li>
                    </ng-template>
                </ul>
            </div>
		</ng-container>
    `,
    host: {
        '[class.active-menuitem]': 'active && item.visible !== false'
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px'
            })),
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

    @Input() item: any;

    @Input() index: number;

    @Input() root: boolean;

    @Input() mega: boolean;

    @Input() parentKey: string;

    active = false;

    menuSourceSubscription: Subscription;

    menuResetSubscription: Subscription;

    key: string;

    constructor(public app: AppComponent, public appMain: AppMainComponent, public router: Router,
                private cd: ChangeDetectorRef, private menuService: MenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
                if (this.app.horizontal) {
                    this.active = false;
                } else {
                    if (this.item.routerLink) {
                        this.updateActiveStateFromRoute();
                    } else {
                        this.active = false;
                    }
                }
            });
    }

    ngOnInit() {
        if (!this.app.horizontal && this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }

        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);
    }

    itemClick(event: Event) {
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        // navigate with hover in horizontal mode
        if (this.root) {
            this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
        }

        // notify other items
        this.menuService.onMenuStateChange(this.key);

        // execute command
        if (this.item.command) {
            this.item.command({originalEvent: event, item: this.item});
        }

        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        } else {
            // activate item
            this.active = true;

            // reset horizontal menu
            if (this.app.horizontal) {
                this.menuService.reset();
            }

            if (!this.app.horizontal || this.appMain.isMobile()) {
                this.appMain.menuActive = false;
                this.appMain.unblockBodyScroll();
            }

            this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
        }
    }

    onMouseEnter() {
        // activate item on hover
        if (this.root && this.appMain.menuHoverActive && this.app.horizontal && !this.appMain.isMobile() && !this.appMain.isTablet()) {
            this.menuService.onMenuStateChange(this.key);
            this.active = true;
        }
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
