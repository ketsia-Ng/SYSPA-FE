import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <div class="grid">
                <div class="col">
                    <img src="assets/layout/images/logo-white.svg" alt="sapphire-layout" />
                    <div class="layout-footer-appname">Syspa</div>
                </div>
                <div class="col">
                    <span>Tout droit reservé</span>
                </div>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
