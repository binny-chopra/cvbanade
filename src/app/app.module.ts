import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature-modules/header/header.component';
import { FooterComponent } from './feature-modules/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialsComponent } from './feature-modules/testimonials/testimonials.component';
import { HomepageComponent } from './feature-modules/homepage/homepage.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsComponent } from './feature-modules/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    HomepageComponent,
    FaqsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
