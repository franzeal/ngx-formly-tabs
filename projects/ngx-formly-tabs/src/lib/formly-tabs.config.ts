import { ConfigOption } from '@ngx-formly/core';
import {
    FormlyFieldTabsetComponent
} from './types/types';
import {
    FormlyWrapperTabComponent
} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
    // types
    FormlyFieldTabsetComponent,

    // wrappers
    FormlyWrapperTabComponent
];

export const FORMLY_TABS_FORMLY_CONFIG: ConfigOption = {
    types: [
        { name: 'tabset', component: FormlyFieldTabsetComponent }
    ],
    wrappers: [
        { name: 'tab', component: FormlyWrapperTabComponent }
    ]
};
