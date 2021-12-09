export class Okta<T> {
    private _value: T | null;
    private _next: Okta<T> | null = null;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T | null {
        return this._value;
    }

    set value(value: T | null) {
        this._value = value;
    }

    get next(): Okta<T> | null {
        return this._next;
    }

    set next(value: Okta<T> | null) {
        this._next = value;
    }
}
