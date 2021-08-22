import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'goods', component: GoodsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/createUser', component: CreateUserComponent },
  { path: 'user/modifyUser', component: CreateUserComponent },
  { path: '', redirectTo: 'goods', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
