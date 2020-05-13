import { Component } from '@angular/core';
import{ServiceService} from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createPipe } from '@angular/compiler/src/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data:any = [];

  dataArray;
  constructor(private service:ServiceService){};
  
  ngOnInit (){
   this.mydata();
  }

 async mydata(){
   return this.service.getData().subscribe((data) => {
      this.data=data['results'];
      //var results;
      //for(var i=0; i<results; i++)
      //this.dataArray = this.data;
      console.log(this.data);
      //console.log(this.data[0].media[0]["media-metadata"][0].url);
    })
  }

  }
