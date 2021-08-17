import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './components/goods/goods.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'goods', component: GoodsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
