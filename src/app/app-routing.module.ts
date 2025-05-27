import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { ListbanqueComponent } from './components/parametre/banque/listbanque/listbanque.component';
import { ListpositionComponent } from './components/parametre/position/listposition/listposition.component';
import { ListprovinceComponent } from './components/parametre/province/listprovince/listprovince.component';
import { ListsectionComponent } from './components/parametre/section/listsection/listsection.component';
import { ListuniteComponent } from './components/parametre/unite/listunite/listunite.component';
import { ListfonctionComponent } from './components/parametre/fonction/listfonction/listfonction.component';
import { ListentiteremComponent } from './components/parametre/entiterem/listentiterem/listentiterem.component';
import { ListbaremComponent } from './components/parametre/barem/listbarem/listbarem.component';
import { ListidentificationComponent } from './components/miseajour/identification/listidentification/listidentification.component';
import { ListidentifsituationComponent } from './components/miseajour/changementsituation/listidentifsituation/listidentifsituation.component';
import { ListidentifvalidationComponent } from './components/miseajour/validation/listidentifvalidation/listidentifvalidation.component';
import { ListidentifconsultationComponent } from './components/consultation/simple/listidentifconsultation/listidentifconsultation.component';
import { ListidentifavanceComponent } from './components/consultation/avancé/listidentifavance/listidentifavance.component';
import { ListidentifadminsectComponent } from './components/administration/listsection/listidentifadminsect/listidentifadminsect.component';
import { ListidentifsectentiteComponent } from './components/administration/listsectionentite/listidentifsectentite/listidentifsectentite.component';
import { ListentiteComponent } from './components/administration/listsectionentite/listentite/listentite.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
               children: [
                    {path:'banque',component:ListbanqueComponent},
                    {path:'position',component:ListpositionComponent},
                    {path:'province',component:ListprovinceComponent},
                    {path:'fonction',component:ListfonctionComponent},
                    {path:'unite',component:ListuniteComponent},
                    {path:'entite',component:ListentiteremComponent},
                    {path:'section',component:ListsectionComponent},
                    {path:'identification',component:ListidentificationComponent},
                    {path:'validationattente/:val',component:ListidentifvalidationComponent},
                    {path:'validation/:val',component:ListidentifvalidationComponent},
                    {path:'validationrejete/:val',component:ListidentifvalidationComponent},
                    {path:'validationbloque/:val',component:ListidentifvalidationComponent},
                    {path:'changementsituation',component:ListidentifsituationComponent},
                    {path:'consultationsimple',component:ListidentifconsultationComponent},
                    {path:'consultationavance',component:ListidentifavanceComponent},
                    {path:'listsection',component:ListidentifadminsectComponent},
                    {path:'listsectionentite',component:ListentiteComponent},
                    {path:'bareme',component:ListbaremComponent}
                ]
            },
          /*  {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},*/
            //{path: 'login', component: AppLoginComponent},
            //{path: 'login', component: LoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
