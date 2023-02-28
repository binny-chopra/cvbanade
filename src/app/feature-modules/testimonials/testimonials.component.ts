import { Component } from '@angular/core';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { ISectionWithImg } from 'src/app/interfaces/i-common';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  successClients: ISectionWithImg[] = ObjectConstants.CLIENT_TESTIMONY;
}
