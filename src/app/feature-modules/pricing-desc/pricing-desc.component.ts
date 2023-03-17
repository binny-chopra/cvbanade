import { Component } from '@angular/core';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { IPricing } from 'src/app/interfaces/i-common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pricing-desc',
  templateUrl: './pricing-desc.component.html',
  styleUrls: ['./pricing-desc.component.scss']
})
export class PricingDescComponent {
  public pricingOptions: IPricing[] = ObjectConstants.PRICING_OPTIONS;
  constructor(public ngbActiveModal: NgbActiveModal) { }
}
