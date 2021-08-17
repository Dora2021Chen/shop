import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'all_goods', component: BodyComponent },
  { path: 'all_users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
