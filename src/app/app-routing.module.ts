import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { LoginComponent } from './component/login/login.component';
exports: [RouterModule]
})
export class AppRoutingModule { }
