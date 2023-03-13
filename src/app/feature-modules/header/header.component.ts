import { Component } from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loginLabel: string = ApplicationConstants.LOGIN;
  public createMyResumeLabel: string = ApplicationConstants.CREATE_MY_RESUME;
  public help: string = ApplicationConstants.HELP;

  constructor(private ngbModal: NgbModal) { }

  public openLoginPopup(): void {
    document.getElementById("navbarColor01")?.classList.remove("show");
    const modalRef = this.ngbModal.open(LoginModalComponent);
  }

}
