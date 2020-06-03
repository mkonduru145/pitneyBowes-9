import { NgModule, InjectionToken } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import { HomeComponent } from './home.component';

import { AppComponent } from "./app.component";
import { MicroBatchingFormComponent } from './micro-batching-form/micro-batching-form.component' ;

const routes: Routes = [
  { path : 'micro-batching-form' , component : MicroBatchingFormComponent } ,
  { path : "", redirectTo : "retailci", pathMatch : "full" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
