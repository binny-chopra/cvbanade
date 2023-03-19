import { Injectable } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class UiService {

  public openPopup(size?: string): NgbModalOptions {
    let ngbOptions: NgbModalOptions = {
      centered: true,
      size: size ?? '500'
    };
    return ngbOptions;
  }
}
