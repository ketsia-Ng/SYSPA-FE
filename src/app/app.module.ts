import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

// PrimeNG Components for demos
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {FullCalendarModule} from '@fullcalendar/angular';

// Application Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppConfigComponent} from './app.config.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';

// Demo services
import {BreadcrumbService} from './app.breadcrumb.service';
import {MenuService} from './app.menu.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ListbanqueComponent } from './components/parametre/banque/listbanque/listbanque.component';
import { AddbanqueComponent } from './components/parametre/banque/addbanque/addbanque.component';
import { EditbanqueComponent } from './components/parametre/banque/editbanque/editbanque.component';
import { ListpositionComponent } from './components/parametre/position/listposition/listposition.component';
import { AddpositionComponent } from './components/parametre/position/addposition/addposition.component';
import { EditpositionComponent } from './components/parametre/position/editposition/editposition.component';
import { ListprovinceComponent } from './components/parametre/province/listprovince/listprovince.component';
import { AddprovinceComponent } from './components/parametre/province/addprovince/addprovince.component';
import { EditprovinceComponent } from './components/parametre/province/editprovince/editprovince.component';
import { ListsectionComponent } from './components/parametre/section/listsection/listsection.component';
import { AddsectionComponent } from './components/parametre/section/addsection/addsection.component';
import { EditsectionComponent } from './components/parametre/section/editsection/editsection.component';
import { ListuniteComponent } from './components/parametre/unite/listunite/listunite.component';
import { AdduniteComponent } from './components/parametre/unite/addunite/addunite.component';
import { EdituniteComponent } from './components/parametre/unite/editunite/editunite.component';
import { ListfonctionComponent } from './components/parametre/fonction/listfonction/listfonction.component';
import { AddfonctionComponent } from './components/parametre/fonction/addfonction/addfonction.component';
import { EditfonctionComponent } from './components/parametre/fonction/editfonction/editfonction.component';
import { ListentiteremComponent } from './components/parametre/entiterem/listentiterem/listentiterem.component';
import { AddentiteremComponent } from './components/parametre/entiterem/addentiterem/addentiterem.component';
import { EditentiteremComponent } from './components/parametre/entiterem/editentiterem/editentiterem.component';
import { ListbaremComponent } from './components/parametre/barem/listbarem/listbarem.component';
import { AddbaremComponent } from './components/parametre/barem/addbarem/addbarem.component';
import { EditbaremComponent } from './components/parametre/barem/editbarem/editbarem.component';
import { ListdetailbaremComponent } from './components/parametre/detailbarem/listdetailbarem/listdetailbarem.component';
import { AdddetailbaremComponent } from './components/parametre/detailbarem/adddetailbarem/adddetailbarem.component';
import { EditdetailbaremComponent } from './components/parametre/detailbarem/editdetailbarem/editdetailbarem.component';
import { ListidentificationComponent } from './components/miseajour/identification/listidentification/listidentification.component';
import { AddidentificationComponent } from './components/miseajour/identification/addidentification/addidentification.component';
import { EditidentificationComponent } from './components/miseajour/identification/editidentification/editidentification.component';
import { ListidentifsituationComponent } from './components/miseajour/changementsituation/listidentifsituation/listidentifsituation.component';
import { AddsituationComponent } from './components/miseajour/changementsituation/addsituation/addsituation.component';
import { EditsituationComponent } from './components/miseajour/changementsituation/editsituation/editsituation.component';
import { ListsituationComponent } from './components/miseajour/changementsituation/listsituation/listsituation.component';
import { ListidentifvalidationComponent } from './components/miseajour/validation/listidentifvalidation/listidentifvalidation.component';
import { ListsituationvalidationComponent } from './components/miseajour/validation/listsituationvalidation/listsituationvalidation.component';
import { ListidentifconsultationComponent } from './components/consultation/simple/listidentifconsultation/listidentifconsultation.component';
import { ListsituationconsultationComponent } from './components/consultation/simple/listsituationconsultation/listsituationconsultation.component';
import { ListidentifavanceComponent } from './components/consultation/avancé/listidentifavance/listidentifavance.component';
import { ListsituationavanceComponent } from './components/consultation/avancé/listsituationavance/listsituationavance.component';
import { ListidentifadminsectComponent } from './components/administration/listsection/listidentifadminsect/listidentifadminsect.component';
import { ListsituationsectComponent } from './components/administration/listsection/listsituationsect/listsituationsect.component';
import { ListidentifsectentiteComponent } from './components/administration/listsectionentite/listidentifsectentite/listidentifsectentite.component';
import { ListsituationsectentiteComponent } from './components/administration/listsectionentite/listsituationsectentite/listsituationsectentite.component';
import { ListentiteComponent } from './components/administration/listsectionentite/listentite/listentite.component';
import { FichesituationComponent } from './components/consultation/fichesituation/fichesituation.component';
import { ImpressionComponent } from './components/administration/impression/impression.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DynamicDialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        FullCalendarModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ReactiveFormsModule,
        FormsModule,
        NgxExtendedPdfViewerModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        ListbanqueComponent,
        AddbanqueComponent,
        EditbanqueComponent,
        ListpositionComponent,
        AddpositionComponent,
        EditpositionComponent,
        ListprovinceComponent,
        AddprovinceComponent,
        EditprovinceComponent,
        ListsectionComponent,
        AddsectionComponent,
        EditsectionComponent,
        ListuniteComponent,
        AdduniteComponent,
        EdituniteComponent,
        ListfonctionComponent,
        AddfonctionComponent,
        EditfonctionComponent,
        ListentiteremComponent,
        AddentiteremComponent,
        EditentiteremComponent,
        ListbaremComponent,
        AddbaremComponent,
        EditbaremComponent,
        ListdetailbaremComponent,
        AdddetailbaremComponent,
        EditdetailbaremComponent,
        ListidentificationComponent,
        AddidentificationComponent,
        EditidentificationComponent,
        ListidentifsituationComponent,
        AddsituationComponent,
        EditsituationComponent,
        ListsituationComponent,
        ListidentifvalidationComponent,
        ListsituationvalidationComponent,
        ListidentifconsultationComponent,
        ListsituationconsultationComponent,
        ListidentifavanceComponent,
        ListsituationavanceComponent,
        ListidentifadminsectComponent,
        ListsituationsectComponent,
        ListidentifsectentiteComponent,
        ListsituationsectentiteComponent,
        ListentiteComponent,
        FichesituationComponent,
        ImpressionComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         MenuService, BreadcrumbService, DatePipe,MessageService,ConfirmationService, DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
