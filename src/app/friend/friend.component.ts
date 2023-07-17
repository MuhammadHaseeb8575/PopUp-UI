import { Component, OnInit } from '@angular/core';
import { Main } from '../main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
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

Popup:boolean= true;

  Close(){
    this.Popup = false
    this.router.navigate([""])
  }

  Back():void{
    this.router.navigate(["./"])
  }

  SelectedItem = "";

  OnSelect(value:any):void{
    this.SelectedItem = value
   alert(this.SelectedItem)
  }

  Next():void{
    this.router.navigate([this.SelectedItem])
    this.Popup = false
  }

}
