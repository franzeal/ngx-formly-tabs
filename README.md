# ngx-formly-tabs

Adds support for flexible tab use within your [Ngx Formly](https://formly-js.github.io/ngx-formly/) form.

The current version is barebones and intended for use with bootstrap.  Feel welcome to issue feature requests or submit PRs.

## Quick Start

Follow these steps to get started with Ngx Formly Tabs. Also check out the [demo](https://franzeal.github.io/ngx-formly-tabs) for an example.

#### 1. Install the ngx-formly-tabs package:
```bash
  npm install ngx-formly-tabs --save
```

#### 2. Import the `FormlyTabsModule`:

```typescript
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyTabsModule} from 'ngx-formly-tabs';

@NgModule({
  imports: [
    ...,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    FormlyTabsModule
  ],
})
export class AppModule {}
```

#### 3. Use the tabset and tab wrappers within the form config of your component:

```typescript
import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(model)">
      <formly-form [fields]="fields" [model]="model">
        <button type="submit" class="btn btn-default">Submit</button>
      </formly-form>
    </form>
  `,
})
export class AppComponent {
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
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
              type: 'input',
              templateOptions: {
                label: 'Hobby'
              }
            }
          ]
        }
      ]
    }
  ];

  submit(model) {
    console.log(model);
  }
}
```
