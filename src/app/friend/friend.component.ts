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

Popup3:boolean= true;

  Close(){
    this.Popup3 = false
    this.router.navigate([""])
  }

  Back():void{
    this.router.navigate(["/self"])
  }

  SelectedItem = "";

  OnSelect(value:any):void{
    this.SelectedItem = value
   alert(this.SelectedItem)
   this.router.navigate([this.SelectedItem])
  this.Popup3 = false
  }

  Next():void{
    this.router.navigate([this.SelectedItem])
    this.Popup3= false
  }

}
