import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Components', icon: 'list', routerLink: ['/components'],
                items: [
                    {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/components/sample']},
                    {label: 'Forms', icon: 'input', routerLink: ['/components/forms']},
                    {label: 'Data', icon: 'grid_on', routerLink: ['/components/data']},
                    {label: 'Panels', icon: 'content_paste', routerLink: ['/components/panels']},
                    {label: 'Overlays', icon: 'content_copy', routerLink: ['/components/overlays']},
                    {label: 'Menus', icon: 'menu', routerLink: ['/components/menus']},
                    {label: 'Messages', icon: 'message', routerLink: ['/components/messages']},
                    {label: 'Charts', icon: 'insert_chart', routerLink: ['/components/charts']},
                    {label: 'File', icon: 'attach_file', routerLink: ['/components/file']},
                    {label: 'Misc', icon: 'toys', routerLink: ['/components/misc']}
                ]
            },
            {
                label: 'Mega', icon: 'list', badge: 2, mega: true,
                items: [
                    {
                        label: 'Components',
                        items: [
                            {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/components/sample']},
                            {label: 'Forms', icon: 'input', routerLink: ['/components/forms']},
                            {label: 'Data', icon: 'grid_on', routerLink: ['/components/data']},
                            {label: 'Panels', icon: 'content_paste', routerLink: ['/components/panels']},
                            {label: 'Overlays', icon: 'content_copy', routerLink: ['/components/overlays']},
                            {label: 'Menus', icon: 'menu', routerLink: ['/components/menus']},
                            {label: 'Messages', icon: 'message', routerLink: ['/components/messages']},
                            {label: 'Charts', icon: 'insert_chart', routerLink: ['/components/charts']},
                            {label: 'File', icon: 'attach_file', routerLink: ['/components/file']},
                            {label: 'Misc', icon: 'toys', routerLink: ['/components/misc']}
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
                label: 'Pages', icon: 'get_app', routerLink: ['/pages'],
                items: [
                    {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/pages/empty']},
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
