import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';
import { NgxConfettiComponent } from './ngx-confetti.component';

@NgModule({
    declarations: [NgxConfettiComponent],
    imports: [CommonModule, InViewportModule],
    exports: [NgxConfettiComponent]
})
export class NgxConfettiModule {}
