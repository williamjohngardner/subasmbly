import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        MatTreeModule,
        MatIconModule
    ],
    exports: [
        MatTreeModule,
        MatIconModule
    ]
})


export class MaterialModule { }