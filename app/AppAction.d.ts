export declare const WIDGET_ACTIVATE = "WIDGET_ACTIVATE";
declare type CustomAction = {
    type: string;
    [key: string]: any;
};
declare type WidgetActivate = {
    type: typeof WIDGET_ACTIVATE;
    widget: string;
};
export declare type AppAction = WidgetActivate | CustomAction;
export {};
