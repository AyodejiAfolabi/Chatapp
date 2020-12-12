import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { FirstPipe } from './pipes/first.pipe';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LandingComponent } from './landing/landing.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ChatpipePipe } from './pipes/chatpipe.pipe';
import { MessagePipe } from './pipes/message.pipe';
import { MessagesPipe } from './pipes/messages.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ChatComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    NewComponent,
    FirstPipe,
    SigninComponent,
    SignupComponent,
    LandingComponent,
    ChatpageComponent,
    ChatpipePipe,
    MessagePipe,
    MessagesPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // AngularFontAwesomeModule
// ,
ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
