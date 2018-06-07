import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabComponent } from '../tab/tab.component';

@Injectable()
export class TabsetService {
    private readonly _tabs = new BehaviorSubject<TabComponent[]>([]);

    get tabs(): TabComponent[] {
        return this._tabs.value.slice();
    }

    get tabs$(): Observable<TabComponent[]> {
        return this._tabs.asObservable();
    }

    add(tab: TabComponent): void {
        this._tabs.next(this._tabs.value.filter(t => t !== tab).concat(tab));
    }

    remove(tab: TabComponent): void {
        this._tabs.next(this._tabs.value.filter(t => t !== tab));
    }

    update(): void {
        this._tabs.next(this.tabs);
    }
}
