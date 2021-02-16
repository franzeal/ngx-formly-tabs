import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-formly-tabs';
    options = { formState: {} as { [key: string]: any } };
    fields = [
        {
            type: 'tabset',
            className: 'd-block',
            fieldGroup: [
                {
                    type: 'tab',
                    templateOptions: {
                        tabTitle: 'Primary',
                    },
                    fieldGroup: [
                        {
                            key: 'name',
                            type: 'input',
                            templateOptions: {
                                label: 'Name'
                            }
                        }
                    ],
                    expressionProperties: {
                        'templateOptions.tabHidden': 'model.hidePrimary === true'
                    }
                },
                {
                    wrappers: ['tab'],
                    templateOptions: {
                        tabTitle: 'Secondary'
                    },
                    fieldGroup: [
                        {
                            key: 'hobby',
                            type: 'select',
                            templateOptions: {
                                label: 'Hobby',
                                options: ['Biking', 'Hiking', 'Reading'].map(hobby => ({ label: hobby, value: hobby }))
                            }
                        }
                    ],
                    expressionProperties: {
                        'templateOptions.tabDisabled': 'model.disableSecondary === true'
                    }
                }
            ],
            templateOptions: {
                activeTabChange: (tabTitle: string) => {
                    this.options.formState.activeTab = tabTitle;
                }
            }
        },
        {
            key: 'primaryText',
            type: 'input',
            className: 'app-d-block mt-4',
            templateOptions: {
                label: 'Occupation'
            },
            hideExpression: 'formState.activeTab !== \'Primary\''
        },
        {
            key: 'secondaryText',
            type: 'input',
            className: 'app-d-block mt-4',
            templateOptions: {
                label: 'Activity'
            },
            hideExpression: 'formState.activeTab !== \'Secondary\''
        },
        {
            key: 'hidePrimary',
            type: 'checkbox',
            className: 'app-d-block mt-4',
            templateOptions: {
                label: 'Hide Primary'
            },
            expressionProperties: {
                'templateOptions.tabDisabled': 'formState.disableSecondary === true'
            }
        },
        {
            key: 'disableSecondary',
            type: 'checkbox',
            className: 'app-d-block mt-4',
            templateOptions: {
                label: 'Disable Secondary'
            },
            expressionProperties: {
                'templateOptions.tabDisabled': 'model.disableSecondary === true'
            }
        }
    ];
    pristineFields = JSON.parse(JSON.stringify(this.fields));
    model = {};
}
