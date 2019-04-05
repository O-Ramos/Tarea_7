import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  @Input() producto: Producto;
  carrito: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(producto => this.producto = producto);
  }

  goBack(): void {
    this.location.back();
  }

  getCart(producto: Producto): boolean {
    console.log(this.carrito);
    this.carrito.push(Object.assign({}, producto));
    console.log(this.carrito);
    return true;
  }
}
