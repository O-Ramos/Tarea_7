import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from './mock-productos';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private lastId = 1;

  productos: Producto[];
  carrito: [];

  constructor() { }


  getCart() {
    console.log(this.carrito);
    return this.carrito.slice();
  }
  getProducts(): Observable<Producto[]> {
    return of(PRODUCTOS);
  }

  getProduct(id: number): Observable<Producto> {
    return of(PRODUCTOS.find(producto => producto.id === id));
  }

  /* GET heroes whose name contains search term */
  searchProducts(term: string): Observable<Producto[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    // return this.http.get<Producto[]>(`${this.productosUrl}/?name=${term}`).pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }
}
