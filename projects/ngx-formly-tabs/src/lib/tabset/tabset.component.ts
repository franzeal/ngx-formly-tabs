import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { TabsetService } from './tabset.service';
import { TabComponent } from '../tab/tab.component';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
    selector: 'formly-tabs-tabset',
    templateUrl: './tabset.component.html',
    styleUrls: ['./tabset.component.css'],
    providers: [TabsetService]
})
export class TabsetComponent implements AfterContentInit, OnDestroy {
    private subscription: Subscription;
    private _tabs: TabComponent[] = [];

    constructor(
        private tabsetService: TabsetService
    ) { }

    get tabs(): TabComponent[] {
        return this._tabs;
    }

    ngAfterContentInit(): void {
        this.subscription = this.tabsetService.tabs$.subscribe(tabs => {
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
        timer().subscribe(() => {
            if (this.subscription.closed) {
                return;
            }

            const tabs = this.tabsetService.tabs;
            this._tabs = tabs;

            if (!tabs.some(pane => pane.active)) {
                this.select(tabs[0]);
            }
        });
    }
}
