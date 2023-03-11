import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @Input() name!: string;
  public loginLabel: string = ApplicationConstants.LOGIN;
  public pswdLabel: string = ApplicationConstants.PASSWORD_TITLECASE;
  public newUserLabel: string = ApplicationConstants.REGISTER_NEW_USER;
  public loginGoogle: string = ApplicationConstants.LOGIN_WITH_GOOGLE;
  public loginLinkedin: string = ApplicationConstants.LOGIN_WITH_LINKEDIN;
  public loginOtp: string = ApplicationConstants.LOGIN_WITH_OTP;
  public emailPhoneLabel: string = ApplicationConstants.EMAIL_PHONE;
  public inputType: string = ApplicationConstants.PASSWORD;
  public eyeClass: string = ApplicationConstants.ICON_EYE_SLASH;
  public closeLabel: string = ApplicationConstants.CLOSE;

  constructor(public ngbActiveModal: NgbActiveModal, private router: Router) { }

  public showPassword(): void {
    let inputBox = document.getElementById(ApplicationConstants.ID_PSWD_INPUT);
    let eyeIconBox = document.getElementById(ApplicationConstants.ID_EYE_ICON);
    if (this.inputType === ApplicationConstants.PASSWORD) {
      eyeIconBox?.setAttribute(ApplicationConstants.CLASS, ApplicationConstants.ICON_EYE);
      inputBox?.setAttribute(ApplicationConstants.TYPE, ApplicationConstants.TEXT);
      this.inputType = ApplicationConstants.TEXT;
    } else {
      eyeIconBox?.setAttribute(ApplicationConstants.CLASS, ApplicationConstants.ICON_EYE_SLASH);
      inputBox?.setAttribute(ApplicationConstants.TYPE, ApplicationConstants.PASSWORD);
      this.inputType = ApplicationConstants.PASSWORD;
    }
  }

  public goToSignUp(): void {
    this.router.navigate([`/signup`]);
    this.ngbActiveModal.close();
  }
}
