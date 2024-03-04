import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserComponent },
    { path: 'user-profile', component: UserProfileComponent},
    { path: '', redirectTo: '/user', pathMatch: 'full' },

];
