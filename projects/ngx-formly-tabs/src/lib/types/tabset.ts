import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { TabsetService } from '../tabset/tabset.service';

@Component({
    selector: 'formly-field-tabset',
    template: `
        <formly-tabs-tabset (activeTabChange)="onActiveTagChange($event)">
            <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
        </formly-tabs-tabset>
    `,
    host: {
        '[class]': 'field.fieldGroupClassName || ""',
    },
    providers: [TabsetService]
})
export class FormlyFieldTabsetComponent extends FieldType {

    get activeTab(): string {
        return this.to.activeTab;
    }

    onActiveTagChange(tabTitle: string): void {
        this.to.activeTab = tabTitle == null ? null : tabTitle;
        if (this.to.activeTabChange) {
            this.to.activeTabChange(this.to.activeTab);
        }
    }
}
