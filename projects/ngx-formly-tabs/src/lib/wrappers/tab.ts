import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'formly-wrapper-tab',
    template: `
        <formly-tabs-tab [title]="title" [disabled]="disabled" [hidden]="hidden">
            <ng-template #fieldComponent>
            </ng-template>
        </formly-tabs-tab>
    `
})
export class FormlyWrapperTabComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

    get title(): string {
        return this.to.tabTitle;
    }

    get disabled(): boolean {
        return this.to.tabDisabled;
    }

    set disabled(value: boolean) {
        this.to.tabDisabled = !!value;
    }

    get hidden(): boolean {
        return this.to.tabHidden;
    }

    set hidden(value: boolean) {
        this.to.tabHidden = !!value;
    }
}
