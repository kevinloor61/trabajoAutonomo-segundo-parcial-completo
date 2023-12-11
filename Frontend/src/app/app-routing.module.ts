import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [
    {path:"Doctores" , component:CrudComponent},
    {path: '', redirectTo: 'Doctores', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
