import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'formly-wrapper-tab',
    template: `
        <formly-tabs-tab [title]="tabTitle">
            <ng-template #fieldComponent>
            </ng-template>
        </formly-tabs-tab>
    `
})
export class FormlyWrapperTabComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

    get tabTitle(): string {
        return this.to.tabTitle;
    }
}
