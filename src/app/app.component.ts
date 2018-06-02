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
            fieldGroup: [
                {
                    wrappers: ['tab'],
                    templateOptions: {
                        tabTitle: 'Primary'
                    },
                    fieldGroup: [
                        {
                            key: 'name',
                            type: 'input',
                            templateOptions: {
                                label: 'Name'
                            }
                        }
                    ]
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
                    ]
                }
            ]
        }
    ];
    fields = JSON.parse(JSON.stringify(this.pristineFields));
    model = {};
}
