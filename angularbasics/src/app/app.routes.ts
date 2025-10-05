import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { Directive } from '@angular/core';
import { DirectivesComponent } from './components/directives/directives.component';
import { pipe } from 'rxjs';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { ServiceComponent } from './components/service/service.component';
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'data-binding',component:DatabindingComponent},
    {path:"input-output",component: InputAndOutputComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipe',component:PipeExamplesComponent},
    {path:'services', component:ServiceComponent},
    {path:'component-lifecycle', component:ComponentLifecycleComponent}
];
