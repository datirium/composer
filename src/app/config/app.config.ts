import {OpaqueToken} from "@angular/core";

export interface AppConfig {
    hostname?: string;
    port?: number;
    protocol?: string;
}

//noinspection TypeScriptUnresolvedVariable
export const CONFIG: AppConfig = APP_ENV_CONFIG;

export let APP_CONFIG = new OpaqueToken("app.config");