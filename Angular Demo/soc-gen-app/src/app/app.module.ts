import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { UserDirective } from './directives/user.directive';
import { RegisterComponent } from './auth/register/register.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.route';
import { LoginGuardService } from './services/login-guard.service';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './products/overview/overview.component';
import { SpecificationComponent } from './products/specification/specification.component';
import { EmployeeModule } from './employee-module/employee.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    UserDirective,
    RegisterComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    EmployeeModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [DataService, AuthService, LoginGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
