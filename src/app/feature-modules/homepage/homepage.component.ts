import { Component } from '@angular/core';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';
import { ObjectConstants } from 'src/app/constants/ObjectConstants';
import { ISectionWithImg } from 'src/app/interfaces/i-common';

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
  public images: string[] = ObjectConstants.CAROUSEL_IMGS.map((img: string) => `${ApplicationConstants.ASSETS_IMG}${img}`);
  public hpIconSection: ISectionWithImg[] = ObjectConstants.HOME_PG_ICON_SECTION;
}
