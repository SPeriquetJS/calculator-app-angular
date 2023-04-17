import { Component } from '@angular/core';

type Method = '+' | '-' | 'x' | '/' | '=';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    result: string = '0';
    allValues: Array<number | string> = [];
    numbers: Array<number> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    constructor() {}

    setNumber(number: number): void {
        this.result === '0' ? (this.result = '') : '';
        this.result += `${number}`;
    }

    reset(): void {
        this.result = `${0}`;
        this.allValues = [];
    }

    /**
     * Methods
     */

    setMethod(method: Method): void {
        let response = null;
        if (this.result) {
            if (this.result.length) this.allValues.push(+this.result);
            this.result = '0';
        }

        if (this.allValues.length === 3) {
            if (!isNaN(this.allValues[0] as number) && !isNaN(this.allValues[2] as number) && isNaN(this.allValues[1] as number)) {
                switch (this.allValues[1]) {
                    case '+':
                        response = this.add(this.allValues[0] as number, this.allValues[2] as number);
                        this.allValues = [];
                        this.result = response;
                        break;
                    case '-':
                        response = this.minus(this.allValues[0] as number, this.allValues[2] as number);
                        this.allValues = [];
                        this.result = response;
                        break;
                    case '/':
                        response = this.divide(this.allValues[0] as number, this.allValues[2] as number);
                        this.allValues = [];
                        this.result = response;
                        break;
                    case 'x':
                        response = this.time(this.allValues[0] as number, this.allValues[2] as number);
                        this.allValues = [];
                        console.log(response);
                        this.result = response;
                        break;
                }
            }
        }

        if (method && this.allValues.length > 0 && this.allValues[this.allValues.length - 1] !== method && !response) {
            switch (method) {
                case '+':
                    this.allValues.push('+');
                    break;
                case '-':
                    this.allValues.push('-');
                    break;
                case '/':
                    this.allValues.push('/');
                    break;
                case 'x':
                    this.allValues.push('x');
                    break;
                case '=':
                    this.allValues.push('=');

                    break;
                default:
                    this.allValues.push('+');
            }
        }
    }
    add(x: number, y: number): number {
        return x + y;
    }

    minus(x: number, y: number): number {
        return x - y;
    }

    divide(x: number, y: number): number {
        return x / y;
    }

    time(x: number, y: number): number {
        return x * y;
    }
}
