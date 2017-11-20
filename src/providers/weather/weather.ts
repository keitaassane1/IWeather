import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';


@Injectable()
export class WeatherProvider {
  apikey = 'a63c283432825ad1d592b9cf915fb72b';
  url:any;

  constructor(public http: Http) {
  	this.url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&apikey='+this.apikey+'&q=';
  }

  getWeather(city){
  	return this.http.get(this.url+''+city)
  		   	   .map(response => response.json());
  }

}
