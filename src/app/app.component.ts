import { Component } from '@angular/core';
import { LoginpageComponent} from './loginpage/loginpage.component';
import { AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'black-dashboard-angular';
  addcon = 'false';
}
