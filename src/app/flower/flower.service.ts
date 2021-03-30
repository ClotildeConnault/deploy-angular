import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  BASE_URL = 'https://blooming-gorge-90155.herokuapp.com/flowers';

  constructor(
    private http : HttpClient
  ) { }

  getAll() :  Observable<Flower[]> {
    return this.http.get<Flower[]>(this.BASE_URL);
  }

  insert(flower : Flower) : void {
    this.http.post<Flower>(this.BASE_URL, flower);
  }
}

export interface Flower {
  id: number;
  name: string;
}
