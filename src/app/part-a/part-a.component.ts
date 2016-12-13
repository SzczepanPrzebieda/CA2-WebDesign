import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit{

  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"]),
        this.router.navigate(["part-b"]);
    }


  Celcius : number = 0;
  Farenheit : number = 0;

  

  CelciusToFarenheit() {
    this.Farenheit = Math.round(this.Celcius * 9/5 + 32);
  }

  fahrenthetToCelcius() {
    this.Celcius= Math.round(this.Farenheit - 32) * 5/9;
  }
  
  ngOnInit() {
  }
}