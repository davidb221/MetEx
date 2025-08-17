import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';


export const routes: Routes = [
    { path: "", component: Home,},
    { path: "faq", component: Faq,}
];
