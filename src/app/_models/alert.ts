export class Alert {
    type: AlertType;
    message: string;
    autoClose?: boolean;
    fade?: boolean;
    keepAfterRouteChange?: boolean;
    id?: string;


    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

