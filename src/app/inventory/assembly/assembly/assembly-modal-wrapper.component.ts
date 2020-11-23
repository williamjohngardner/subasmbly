import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AssemblyComponent } from './assembly.component';

@Component({
    selector: 'app-create-pla-modal-wrapper',
    template: ''
})
export class AssemblyModalWrapperComponent implements OnDestroy {
    readonly _assembly: Observable<object> = this._route.data;
    destroy: Subject<any> = new Subject<any>();
    currentDialog: any = null;

    constructor(
        readonly _modalService: NgbModal,
        readonly _route: ActivatedRoute,
        readonly _router: Router,
    ) {
        _route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
            if (this._modalService.hasOpenModals() === false) {
                // When router navigates to this component is takes the params and opens up the modal
                this.currentDialog = this._modalService.open(AssemblyComponent, { centered: true });
                this.currentDialog.componentInstance._assembly = this._assembly['_value']['assembly']['body'];
            } else {
                this._modalService.dismissAll();
                this.currentDialog = this._modalService.open(AssemblyComponent, { centered: true });
                this.currentDialog.componentInstance._assembly = this._assembly['_value']['assembly']['body'];
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