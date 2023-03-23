import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent {
  public closeLabel: string = ApplicationConstants.CLOSE;
  public imagesPath: string = ApplicationConstants.CDN_IMG_PATH;
  constructor(public ngbActiveModal: NgbActiveModal) { }
}
