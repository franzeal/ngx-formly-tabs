import { ConfigOption } from '@ngx-formly/core';
import {
    FormlyFieldTabComponent,
    FormlyFieldTabsetComponent
} from './types/types';
import {
    FormlyWrapperTabComponent
} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
    // types
    FormlyFieldTabComponent,
    FormlyFieldTabsetComponent,

    // wrappers
    FormlyWrapperTabComponent
];

export const FORMLY_TABS_FORMLY_CONFIG: ConfigOption = {
    types: [
        { name: 'tab', component: FormlyFieldTabComponent },
        { name: 'tabset', component: FormlyFieldTabsetComponent }
    ],
    wrappers: [
        { name: 'tab', component: FormlyWrapperTabComponent }
    ]
};
