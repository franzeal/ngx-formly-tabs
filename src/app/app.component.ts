import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-formly-tabs';
    pristineFields = [
        {
            wrappers: ['tabset'],
            className: 'd-block',
            fieldGroup: [
                {
                    wrappers: ['tab'],
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
            ]
        },
        {
            key: 'hidePrimary',
            type: 'checkbox',
            className: 'd-block mt-4',
            templateOptions: {
                label: 'Hide Primary'
            },
            defaultValue: false
        },
        {
            key: 'disableSecondary',
            type: 'checkbox',
            className: 'd-block mt-4',
            templateOptions: {
                label: 'Disable Secondary'
            },
            defaultValue: false
        }
    ];
    fields = JSON.parse(JSON.stringify(this.pristineFields));
    model = {};
}
