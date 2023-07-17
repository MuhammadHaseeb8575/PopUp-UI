import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfComponent } from './self/self.component';
import { FriendComponent } from './friend/friend.component';

const routes: Routes = [
  {path:'self', component:SelfComponent},
  {path: 'Friend', component:FriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
