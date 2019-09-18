import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitInfoComponent } from './component/git-info/git-info.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { AppMenuComponent } from './component/core/app-menu/app-menu.component';
import { AppFooterComponent } from './component/core/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GitInfoComponent,
    HomePageComponent,
    ErrorPageComponent,
    AppMenuComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
