import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';

@Component({
  selector: 'help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent {
  public closeLabel: string = ApplicationConstants.CLOSE;
  constructor(public ngbActiveModal: NgbActiveModal) { }
}
