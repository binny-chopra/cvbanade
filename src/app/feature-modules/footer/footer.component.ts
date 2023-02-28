import { Component } from '@angular/core';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public cvbanadeUrl: string = ApplicationConstants.CVBANADE_URL;
  public copyrightLabel: string = ApplicationConstants.COPYRIGHT;
}
