import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})

export class FilterTextBoxComponent implements OnInit{


    private _filter!: string;
    @Input() get filter(){
        return this._filter;
    }

    set filter(val: string){
        this._filter = val;
        this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();


    constructor() {}

    ngOnInit(): void {
        
    }
}