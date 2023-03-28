import { Component, AfterViewInit } from '@angular/core';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { ISectionWithImg } from 'src/app/interfaces/i-common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PricingDescComponent } from '../pricing-desc/pricing-desc.component';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  public homepgImgTitle: string = ApplicationConstants.HOMEPG_IMG_TITLE;
  public homepgImgSubtitle: string = ApplicationConstants.HOMEPG_IMG_SUBTITLE;
  public startingAt: string = ApplicationConstants.STARTING_AT;
  public tryForFree: string = ApplicationConstants.TRY_FOR_FREE;
  public imagesPath: string = ApplicationConstants.ASSETS_IMG;
  public marqueeHpTextArray: string[] = ObjectConstants.MARQUEE_HP_TEXT;
  public images: string[] = ObjectConstants.CAROUSEL_IMGS.map((img: string) => `${ApplicationConstants.CDN_IMG_PATH}${img}`);
  public hpIconSection: ISectionWithImg[] = ObjectConstants.HOME_PG_ICON_SECTION;
  public hpClientsCounter: ISectionWithImg[] = ObjectConstants.HP_CLIENTS_COUNTER;

  constructor(private ngbModal: NgbModal, private uiService: UiService) { }

  ngAfterViewInit(): void {
    const counterSection: HTMLElement = document.getElementById(ApplicationConstants.INC_NUM_COUNTER_HP)!;
    const counterSectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (!entries[0].isIntersecting) {
        return;
      }
      const counterNum: NodeListOf<HTMLElement> = document.querySelectorAll(ApplicationConstants.C_TITLE_HP);
      counterNum.forEach((currElm: HTMLElement) => {
        const updateNumber = () => {
          const targetNumber: number = parseInt(currElm['dataset']['number']!);
          const initialNumber: number = parseInt(currElm.innerText);
          if (initialNumber < targetNumber) {
            currElm.innerText = `${(initialNumber + 1)}${ApplicationConstants.PLUS}`;
            setTimeout(updateNumber, 1500);
          }
        }
        updateNumber();
      });
      counterSectionObserver.unobserve(counterSection);
    }, { root: null, threshold: 0 });
    counterSectionObserver.observe(counterSection);
  }

  public openPricing(): void {
    this.ngbModal.open(PricingDescComponent, this.uiService.openPopup('xl'));
  }

  public openHelp(): void {
    this.ngbModal.open(HelpModalComponent, this.uiService.openPopup());
  }
}
