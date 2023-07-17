import { Component, OnInit } from '@angular/core';
import { Main } from './main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-1';
  constructor(private router:Router){}

  cities: Main[] | any;

  selectedCity: Main | undefined;

    ngOnInit() {
        this.cities = [
            {name: 'Default', code:'Xy'},
            { name: 'self', code: 'NY' },
            { name: 'Friend', code: 'PRS' }
        ];
    }

Popup:boolean= false;

  Open(){
    this.Popup = true
  }
  Close(){
    this.Popup = false
  }

  Back():void{
  }

  SelectedItem = "";

  OnSelect(value:any):void{
    this.SelectedItem = value
   alert(this.SelectedItem)
   this.router.navigate([this.SelectedItem])
  this.Popup = false
  }

  Next():void{
    debugger
    this.router.navigate([this.SelectedItem])
    this.Popup = false
  }

}

