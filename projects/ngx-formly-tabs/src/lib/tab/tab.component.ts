import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { TabsetService } from '../tabset/tabset.service';

@Component({
  selector: 'formly-tabs-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnChanges, OnDestroy, OnInit {
    @Input() active: boolean;
    @Input() disabled: boolean;
    @Input() hidden: boolean;
    @Input() title: string;

    constructor(
        @Optional() public tabsetService: TabsetService
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.title) {
            this.tabsetService.update();
        }
    }

    ngOnInit(): void {
        if (this.tabsetService) {
            this.tabsetService.add(this);
        }
    }

    ngOnDestroy(): void {
        if (this.tabsetService) {
            this.tabsetService.remove(this);
        }
    }
}
