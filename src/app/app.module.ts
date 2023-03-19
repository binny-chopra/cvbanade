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
import { EnterCvInfoComponent } from './feature-modules/enter-cv-info/enter-cv-info.component';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from './feature-modules/login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PricingDescComponent } from './feature-modules/pricing-desc/pricing-desc.component';
import { HelpModalComponent } from './feature-modules/help-modal/help-modal.component';
import { UiService } from './services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    HomepageComponent,
    FaqsComponent,
    EnterCvInfoComponent,
    LoginModalComponent,
    PricingDescComponent,
    HelpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    CarouselModule,
    NgbRatingModule
  ],
  providers: [UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
