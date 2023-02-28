import { Component } from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loginLabel: string = ApplicationConstants.LOGIN;
  public createMyResumeLabel: string = ApplicationConstants.CREATE_MY_RESUME;
  public help: string = ApplicationConstants.HELP;

}
