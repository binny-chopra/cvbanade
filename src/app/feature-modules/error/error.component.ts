import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  public imagesPath: string = ApplicationConstants.CDN_IMG_PATH;

  constructor(private router: Router) { }

  public goToHomepage(): void {
    this.router.navigate([`/`]);
  }
}
