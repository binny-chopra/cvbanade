import { Component, ViewEncapsulation } from '@angular/core';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { IFaqs } from 'src/app/interfaces/i-common';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqsComponent {
  public faqsList: IFaqs[] = ObjectConstants.FAQS;
}
