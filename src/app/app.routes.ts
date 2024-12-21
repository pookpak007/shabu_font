import { Routes } from '@angular/router';
import { MaintComponent } from './layouts/maint/maint.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component:PageLoginComponent,
        title:'Login'
    }
];
