import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CreateAssemblyComponent } from '../create-assembly/create-assembly.component';

@Component({
  selector: 'app-create-assembly-modal-wrapper',
  template: ''
})
export class CreateAssemblyModalWrapperComponent implements OnDestroy {

  destroy: Subject<any> = new Subject<any>();
  currentDialog: any = null;

  constructor(
    readonly _modalService: NgbModal,
    readonly _route: ActivatedRoute,
    readonly _router: Router,
  ) {
    _route.params.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this._modalService.hasOpenModals() === false) {
        // When router navigates to this component is takes the params and opens up the modal
        this.currentDialog = this._modalService.open(CreateAssemblyComponent, {centered: true});
      } else {
        this._modalService.dismissAll();
        this.currentDialog = this._modalService.open(CreateAssemblyComponent, {centered: true});
      }

      // Go back to home page after the modal is closed
      this.currentDialog.result.then((result: any) => {
        _router.navigateByUrl('/inventory/assembly');
      }, (reason: any) => {
        _router.navigateByUrl('/inventory/assembly');
      });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
