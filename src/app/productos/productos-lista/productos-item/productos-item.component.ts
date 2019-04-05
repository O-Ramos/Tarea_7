import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../../productos.service';
import { Producto } from '../../producto';


@Component({
  selector: 'app-productos-item',
  templateUrl: './productos-item.component.html',
  styleUrls: ['./productos-item.component.css']
})
export class ProductosItemComponent implements OnInit {

  @Input() producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
