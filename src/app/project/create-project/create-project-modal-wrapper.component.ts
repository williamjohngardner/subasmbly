import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-create-assembly-modal-wrapper',
  template: ''
})
export class CreateProjectModalWrapperComponent implements OnDestroy {

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
        this.currentDialog = this.modalService.open(CreateProjectComponent, {centered: true});
      } else {
        this.modalService.dismissAll();
        this.currentDialog = this.modalService.open(CreateProjectComponent, {centered: true});
      }

      // Go back to home page after the modal is closed
      this.currentDialog.result.then((result: any) => {
        _router.navigateByUrl('/project');
      }, (reason: any) => {
        _router.navigateByUrl('/project');
      });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
