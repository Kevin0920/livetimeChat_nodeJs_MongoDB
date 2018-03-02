import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

const ROUTES = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatComponent }
];

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("925531526163-vkqev4lf4v1so37ta95e401d02msjfng.apps.googleusercontent.com")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SocialLoginModule.initialize(config)
  ],
  providers: [
    ChatService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
