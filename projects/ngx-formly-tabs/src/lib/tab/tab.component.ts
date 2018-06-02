import { Component, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { TabsetService } from '../tabset/tabset.service';

@Component({
  selector: 'formly-tabs-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnDestroy, OnInit {
    @Input() active: boolean;
    @Input() title: string;

    constructor(
        @Optional() public tabsetService: TabsetService
    ) { }

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
