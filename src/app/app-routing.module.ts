import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent, children: [
    {path: '', component: ProductosListaComponent},
    {path: ':id', component: ProductoDetalleComponent}
  ]},
  { path: 'home', component: HomeComponent },
  // { path: 'productos/:id', component: ProductoDetalleComponent },
  // { path: 'carrito/:id', component: ProductoItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
