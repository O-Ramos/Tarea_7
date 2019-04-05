import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { Subscriber } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productoService.getProducts()
      .subscribe(productos => this.productos = productos);
  }

}

