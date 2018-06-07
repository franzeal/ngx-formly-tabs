import { Pipe, PipeTransform } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Pipe({name: 'visible'})
export class VisiblePipe implements PipeTransform {
  transform(tabs: TabComponent[]): TabComponent[] {
    return Array.isArray(tabs) ? tabs.filter(t => !t.hidden) : [];
  }
}
