import { ConfigOption } from '@ngx-formly/core';
import {
    FormlyWrapperTabsetComponent,
    FormlyWrapperTabComponent
} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
    // wrappers
    FormlyWrapperTabComponent,
    FormlyWrapperTabsetComponent
];

export const FORMLY_TABS_FORMLY_CONFIG: ConfigOption = {
    wrappers: [
        { name: 'tabset', component: FormlyWrapperTabsetComponent },
        { name: 'tab', component: FormlyWrapperTabComponent }
    ]
};
