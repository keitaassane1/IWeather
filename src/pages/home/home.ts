import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	weather:any;
	location:{
		city: string
	};
	mysunrise: any;
	mysunset:	any;
	myjour: any;

  constructor(
  	public navCtrl: NavController,
  	private weatherProvider: WeatherProvider,
  	private storage: Storage
  	) {	  		
  }

    ionViewWillEnter() {	
  	  
  	  this.storage.get('location').then((val) => {
  	  		if(val != null){
  	  		   this.location = JSON.parse(val);		
  	  		}else{
  	  		   this.location = {
  			       city:'Dakar'
  	  			}
  	  		}

  	  	  this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
          this.weather = weather;      
          this.mysunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
          this.mysunset = new Date(weather.sys.sunset* 1000).toLocaleTimeString();    
          this.myjour = moment().lang("fr").format('LL');
          //this.myjour = new Date(weather.sys.sunrise * 1000).toLocaleDateString('fr-FR');
          //console.log(moment().lang("fr").format('LLLL'));
       	  });    
  	  
  	  });

  }

}
