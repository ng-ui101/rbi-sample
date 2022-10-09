import {Inject, Injectable, Optional} from '@angular/core';
import {ENVIRONMENT} from "../app-injection-tokens";

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    private readonly environment: any;

    constructor(
        @Optional() @Inject(ENVIRONMENT) environment: any
    ) {
        this.environment = environment !== null ? environment : {};
    }

    getValue(key: string, defaultValue?: any): any {
        return this.environment[key] || defaultValue;
    }
}
