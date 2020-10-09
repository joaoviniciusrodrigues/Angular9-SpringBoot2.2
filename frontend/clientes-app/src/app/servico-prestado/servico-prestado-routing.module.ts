import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


const routes: Routes = [
  {path: 'servico-prestado', component: LayoutComponent, children:[
    { path: 'form', component: ServicoPrestadoFormComponent },
    { path: 'lista', component: ServicoPrestadoListaComponent },
    { path: 'form/:id', component: ServicoPrestadoFormComponent},
    { path: '', redirectTo: '/servico-prestado/lista', pathMatch: 'full'},
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
