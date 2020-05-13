import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient){}
  
getData(){
  return this.http.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=J09RLAfyWqa6sLvPPQehDdvzgWq5mIey')
}
}

//https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=J09RLAfyWqa6sLvPPQehDdvzgWq5mIey

//https://api.openrates.io/latest?callback=MY_CALLBACK