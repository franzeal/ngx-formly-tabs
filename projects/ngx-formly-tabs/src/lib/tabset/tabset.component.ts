import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { TabsetService } from './tabset.service';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'formly-tabs-tabset',
    templateUrl: './tabset.component.html',
    styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements AfterContentInit, OnDestroy {
    private subscription: Subscription;
    private _tabs: TabComponent[] = [];
    private _visibleCount = 0;

    constructor(
        private tabsetService: TabsetService
    ) { }

    get tabs(): TabComponent[] {
        return this._tabs;
    }

    get visibleCount(): number {
        return this._visibleCount;
    }

    ngAfterContentInit(): void {
        this.subscription = this.tabsetService.tabs$.subscribe(() => {
            this.onTabsChanged();
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    select(tab: TabComponent): void {
        this.tabsetService.tabs.forEach(t => {
            t.active = t === tab;
        });
    }

    private onTabsChanged(): void {
        Promise.resolve().then(() => {
            if (this.subscription.closed) {
                return;
            }

            const tabs = this.tabsetService.tabs;
            this._tabs = tabs;
            this._visibleCount = tabs.filter(t => !t.hidden).length;

            if (!tabs.some(tab => tab.active && !tab.disabled && !tab.hidden)) {
                this.select(tabs.find(t => !t.disabled && !t.hidden));
            }
        });
    }
}
