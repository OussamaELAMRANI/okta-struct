import {Okta} from "./Okta"

export class LinkedList<T> {

    get last(): Okta<T> | null {
        return this._last;
    }

    set last(value: Okta<T> | null) {
        this._last = value;
    }

    get first(): Okta<T> | null {
        return this._first;
    }

    set first(value: Okta<T> | null) {
        this._first = value;
    }

    private _first: Okta<T> | null
    private _last: Okta<T> | null

    constructor() {
        this._first = null;
        this._last = null;
    }

    public addLast(item: T) {
        const okta = new Okta<T>(item);

        if (this._first === null || this._last === null) {
            this._first = this._last = okta;
        } else {
            this._last.next = okta;
            this._last = okta;
        }

        return this;
    }

    public addFist(item: T) {
        const okta = new Okta<T>(item);
        if (this._first === null || this._last === null) {
            this._first = this._last = okta;
        } else {
            okta.next = this._first;
            this._first = okta;
        }

        return this;
    }


    public print() {
        let okta = this._first;
        if (okta == null) {
            console.log('empty list')
            return
        }
        while (okta !== null) {
            console.log(okta.value)
            okta = okta.next
        }
    }
}
