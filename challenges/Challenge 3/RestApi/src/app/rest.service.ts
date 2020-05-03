import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestService {

	endpoint = 'http://localhost:9090/webapi/v1/user';
	httpOptions = {
  	headers: new HttpHeaders({
    	'Content-Type':  'application/json'
  	})
};

  constructor(private http: HttpClient) {}

    postData(postString) 
    {
        console.log(postString);
        return this.http.post(this.endpoint,postString);
    }


    extractData() 
    {
        // return this.http.get(this.endpoint);
        return this.http.get(this.endpoint).pipe(map(res => res));
    }


    update(id,postString)
    {
        let url = this.endpoint+'/'+id.toString();
        return this.http.put(url,postString);
    }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }

  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'products').pipe(
  //     map(this.extractData));
  // }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }

  // addProduct (product): Observable<any> {
  //   console.log(product);
  //   return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }

  // updateProduct (id, product): Observable<any> {
  //   return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>('deleteProduct'))
  //   );
  // }

}
