import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TabsetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';
import { FORMLY_TABS_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './formly-tabs.config';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(FORMLY_TABS_FORMLY_CONFIG),
    ],
    declarations: [
        TabsetComponent,
        TabComponent,

        FIELD_TYPE_COMPONENTS
    ],
    exports: [
        TabsetComponent,
        TabComponent
    ]
})
export class FormlyTabsModule { }
