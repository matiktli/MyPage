import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { AppMenuComponent } from './component/core/app-menu/app-menu.component';
import { AppFooterComponent } from './component/core/app-footer/app-footer.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LandingPageTitleComponent } from './component/landing-page/landing-page-title/landing-page-title.component';
import { ResumePageComponent } from './component/about-page/resume-page/resume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AppMenuComponent,
    AppFooterComponent,
    LandingPageComponent,
    LandingPageTitleComponent,
    ResumePageComponent
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
