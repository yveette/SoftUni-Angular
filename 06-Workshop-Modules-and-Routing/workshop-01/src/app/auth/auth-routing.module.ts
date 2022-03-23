import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
]

export const AuthRoutingModule = RouterModule.forChild(routes);