import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { BrutefoeceattackComponent } from './brutefoeceattack/brutefoeceattack.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatSlideToggleModule } from '@angular/material';
import { InputSwitchModule, CheckboxModule } from 'primeng';
import { MatSliderModule } from '@angular/material/slider';
import { SignuppageComponent } from './signuppage/signuppage.component';
// import { TRAININGComponent } from './training/training.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatSlideToggleModule,
    InputSwitchModule,
    ReactiveFormsModule,
    MatSliderModule,
    CheckboxModule,
    FormsModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, BrutefoeceattackComponent, LoginpageComponent, SignuppageComponent],
  providers: [],
  // exports: [
  //   TRAININGComponent
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
