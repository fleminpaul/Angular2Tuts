import { Route, Routes } from "@angular/router";
import { LazyloadComponent } from "./lazyload/lazyload.component";

export const LAZY_ROUTE: Routes = [{
    path: '',
    component: LazyloadComponent
}]