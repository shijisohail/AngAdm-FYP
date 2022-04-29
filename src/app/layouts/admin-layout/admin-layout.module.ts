import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSlideToggleModule} from '@angular/material';
import {
  AccordionModule,
  ChartModule,
  CheckboxModule,
  DialogModule,
  InputSwitchModule,
  RatingModule,
  ToggleButtonModule
} from 'primeng';
import {LoginpageComponent} from '../../loginpage/loginpage.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        MatSlideToggleModule,
        InputSwitchModule,
        ToggleButtonModule,
        DialogModule,
        AccordionModule,
        ChartModule,
        RatingModule,
        MatCardModule,
        MatButtonModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
        CheckboxModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDividerModule,


    ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
   // TRAININGComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
