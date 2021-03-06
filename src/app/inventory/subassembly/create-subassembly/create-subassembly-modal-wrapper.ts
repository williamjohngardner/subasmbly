import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CreateSubassemblyComponent } from '../create-subassembly/create-subassembly.component';

@Component({
  selector: 'app-create-subassembly-modal-wrapper',
  template: ''
})
export class CreateSubassemblyModalWrapperComponent implements OnDestroy {

  destroy: Subject<any> = new Subject<any>();
  currentDialog: any = null;

  constructor(
    readonly modalService: NgbModal,
    readonly _route: ActivatedRoute,
    readonly _router: Router,
  ) {
    _route.params.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this.modalService.hasOpenModals() === false) {
        // When router navigates to this component is takes the params and opens up the modal
        this.currentDialog = this.modalService.open(CreateSubassemblyComponent, {centered: true});
      } else {
        this.modalService.dismissAll();
        this.currentDialog = this.modalService.open(CreateSubassemblyComponent, {centered: true});
      }

      // Go back to home page after the modal is closed
      this.currentDialog.result.then((result: any) => {
        _router.navigateByUrl('/subassembly');
      }, (reason: any) => {
        _router.navigateByUrl('/subassembly');
      });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
