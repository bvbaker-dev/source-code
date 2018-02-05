import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Modules

const appRoutes: Routes = [

];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }