import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { addClassName } from '../util';

@Component({
    selector: 'formly-field-tabset',
    template: `
        <formly-tabs-tabset>
            <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
        </formly-tabs-tabset>
    `
})
export class FormlyFieldTabsetComponent extends FieldType implements AfterContentInit {
    constructor(
        private elementRef: ElementRef
    ) {
        super();
    }

    get tabsetClassName(): string {
        return this.to.tabsetClassName;
    }

    ngAfterContentInit(): void {
        addClassName(this.elementRef.nativeElement, this.tabsetClassName);
    }
}
