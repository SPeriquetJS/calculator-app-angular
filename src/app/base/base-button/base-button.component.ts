import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css'],
})
export class BaseButtonComponent {
    @Input() value: any;
    @Output() chosenValue: EventEmitter<any> = new EventEmitter<any>();
}
