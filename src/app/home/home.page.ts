import { Component } from "@angular/core";
import { ServiceService } from "../service.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { createPipe } from "@angular/compiler/src/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  dataArray: any = [];
  con: string;
  data_filter: any = [];

  str = 'this.dataArray[0].media[0].["media-metadata"]';

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.mydata();
  }

  async mydata() {
    this.service.getData().subscribe((data) => {
      this.dataArray = data["results"];
      console.log(this.dataArray);
      // this.con = this.dataArray + this.str;
      // console.log(this.str);

      //Filtering the array to give just  section mentioned as U.S.

      // var data_filter = data.filter( element => element.website =="yahoo")
      // console.log(data_filter);

      //Image <img [src]='{{ item.media[0].["media-metadata"][0] }}'></img>

      this.data_filter = this.dataArray.filter(
        (element) => element.section == "U.S."
      );
      console.log(this.data_filter);
      return this.data_filter;
    });
  }
}
