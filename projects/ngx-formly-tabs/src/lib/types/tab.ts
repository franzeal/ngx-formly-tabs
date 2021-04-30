import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-tab',
    template: `
        <formly-tabs-tab [title]="title" [disabled]="disabled" [hidden]="hidden">
            <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
        </formly-tabs-tab>
    `,
    host: {
        '[class]': 'field.fieldGroupClassName || ""',
    }
})
export class FormlyFieldTabComponent extends FieldType {

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
