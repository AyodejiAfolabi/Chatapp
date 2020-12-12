import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewComponent } from './new/new.component';
// import { HomeComponent } from './home/home.component';
import { FirstGuard } from './guards/first.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

const routes: Routes = [
{path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'welcome',component:LandingComponent},
{path:'chat',component:ChatpageComponent,canActivate:[FirstGuard]},
{path:'new',component:NewComponent,children:[
  {path:'up',component:SigninComponent},
  {path:'in',component:SignupComponent},
  
]},
// {path:'home',,component:HomeComponent,},

// {path:'login',component:LoginComponent},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
