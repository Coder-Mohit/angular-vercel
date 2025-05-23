import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
    console.log("product service");
    
   }
   products = [
    {name:"mobile",brand:"samsung",price:"20000"},
    {name:"laptop",brand:"dell",price:"12000"},
    {name:"mouse",brand:"lenovo",price:"550"},
   ]
   getProductData(){
    return this.products
   }

   getProductList(){
    const url="https://dummyjson.com/product";
    return this.http.get(url)
   }
}
