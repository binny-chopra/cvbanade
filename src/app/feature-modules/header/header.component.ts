import { Component } from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PricingDescComponent } from '../pricing-desc/pricing-desc.component';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { UiService } from 'src/app/services/ui.service';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loginLabel: string = ApplicationConstants.LOGIN;
  public createMyResumeLabel: string = ApplicationConstants.CREATE_MY_RESUME;
  public help: string = ApplicationConstants.HELP;

  constructor(private ngbModal: NgbModal, private uiService: UiService) { }

  public openLoginPopup(): void {
    document.getElementById("navbarColor01")?.classList.remove("show");
    this.ngbModal.open(LoginModalComponent);
  }

  public openPricing(): void {
    document.getElementById("navbarColor01")?.classList.remove("show");
    this.ngbModal.open(PricingDescComponent, this.uiService.openPopup('xl'));
  }

  public openHelp(): void {
    document.getElementById("navbarColor01")?.classList.remove("show");
    this.ngbModal.open(HelpModalComponent, this.uiService.openPopup());
  }

  public openAbout(): void {
    document.getElementById("navbarColor01")?.classList.remove("show");
    this.ngbModal.open(AboutUsComponent, this.uiService.openPopup('lg'));
  }
}
