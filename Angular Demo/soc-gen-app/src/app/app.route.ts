import { Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserComponent } from './user/user.component';
import { LoginGuardService } from './services/login-guard.service';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './products/overview/overview.component';
import { SpecificationComponent } from './products/specification/specification.component';
import { EmployeeComponent } from './employee-module/employee/employee.component';
export const APP_ROUTES: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'pipe',
    component: PipeDemoComponent
},
{
    path: 'user',
    component: UserComponent,
    canActivate: [LoginGuardService]
},
{
    path: 'products',
    component: ProductsComponent,
    canActivate: [LoginGuardService],
    children: [
        {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
        },
        {
            path: 'overview/:id',
            component: OverviewComponent
        },
        {
            path: 'specification',
            component: SpecificationComponent
        },
        {
            path: '**',
            redirectTo: 'overview',
            pathMatch: 'full'
        }
    ]
},
{
    path: 'employee',
    component: EmployeeComponent,
},
{
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module#LazyModule'
},
{
    path: '**',
    redirectTo: 'Login',
    pathMatch: "full"
}]