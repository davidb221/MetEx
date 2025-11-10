import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { Estimate } from './estimate/estimate';
import { About } from './about/about';


export const routes: Routes = [
    { path: "", component: Home,},
    { path: "faq", component: Faq,},
    { path: "estimate", component: Estimate,},
    { path: "about", component: About,}
];