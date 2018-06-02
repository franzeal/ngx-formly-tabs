import { AfterContentInit, Component, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { addClassName } from '../util';

@Component({
    selector: 'formly-wrapper-tabset',
    template: `
        <formly-tabs-tabset>
            <ng-template #fieldComponent></ng-template>
        </formly-tabs-tabset>
    `
})
export class FormlyWrapperTabsetComponent extends FieldWrapper implements AfterContentInit {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

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
