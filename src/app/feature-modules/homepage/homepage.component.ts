import { Component } from '@angular/core';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { ISectionWithImg } from 'src/app/interfaces/i-common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PricingDescComponent } from '../pricing-desc/pricing-desc.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public homepgImgTitle: string = ApplicationConstants.HOMEPG_IMG_TITLE;
  public homepgImgSubtitle: string = ApplicationConstants.HOMEPG_IMG_SUBTITLE;
  public startingAt: string = ApplicationConstants.STARTING_AT;
  public tryForFree: string = ApplicationConstants.TRY_FOR_FREE;
  public imagesPath: string = ApplicationConstants.ASSETS_IMG;
  public images: string[] = ObjectConstants.CAROUSEL_IMGS.map((img: string) => `${this.imagesPath}${img}`);
  public hpIconSection: ISectionWithImg[] = ObjectConstants.HOME_PG_ICON_SECTION;

  constructor(private ngbModal: NgbModal) { }

  public openPricing(): void {
    this.ngbModal.open(PricingDescComponent, { size: 'pricing-width' });
  }
}
