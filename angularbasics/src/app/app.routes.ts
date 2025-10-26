import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { Directive } from '@angular/core';
import { DirectivesComponent } from './components/directives/directives.component';
import { observable, pipe } from 'rxjs';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { ServiceComponent } from './components/service/service.component';
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';
import { ObservablesComponent } from './observables/observables.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { FormHandling1Component } from './components/form-handling1/form-handling1.component';
import { FormHandling2Component } from './components/form-handling2/form-handling2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { ProductAPIComponent } from './components/product-api/product-api.component';
import { authGuard } from './guards/authguard.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent, title:'Home'},
    {path:'data-binding',component:DatabindingComponent, title:'Data Binding'},
    {path:"input-output",component: InputAndOutputComponent, title:'Input and Output' , canActivate: [authGuard]},
    {path:'directives',component:DirectivesComponent, title:'Directives'},
    {path:'pipe',component:PipeExamplesComponent, title:'Pipe Examples'},
    {path:'services/:id', component:ServiceComponent, title:'Services'},
    {path:'component-lifecycle', component:ComponentLifecycleComponent, title:'Component Lifecycle'},
    {path:'observables', component:ObservablesComponent, title:'Observables'},
    {path:'products', component:ProductAPIComponent, title:'Products',
        children:[
            {path:':id', component:ProductDetailComponent, title:'Product Detail'},
            {path:':id/order', component:ProductOrderComponent, title:'Order'}
    ]},
    {path:'quotes', component:QuotesComponent, title:'Quotes'},
    {path:'Form1', component:FormHandling1Component, title:'Form Handling 1'},
    {path:'Form2', component:FormHandling2Component, title:'Form Handling 2'},
    {path:'**', component:NotFoundComponent, title:'Page Not Found'}
];
