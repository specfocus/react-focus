import * as React from 'react';
declare const _default: {
    table: {
        component: (props: any) => JSX.Element;
        representation: (_: any, children: any) => string;
    };
    array: {
        component: ({ children, ...props }: {
            [x: string]: any;
            children: any;
        }) => JSX.Element;
        representation: (props: any, children: any) => string;
    };
    boolean: {
        component: React.FC<import("../field/BooleanField").BooleanFieldProps>;
        representation: (props: any) => string;
    };
    date: {
        component: React.FC<import("../field/DateField").DateFieldProps>;
        representation: (props: any) => string;
    };
    email: {
        component: React.FC<import("../field/EmailField").EmailFieldProps>;
        representation: (props: any) => string;
    };
    id: {
        component: React.FC<import("../field/TextField").TextFieldProps>;
        representation: (props: any) => string;
    };
    number: {
        component: React.FC<import("../field/NumberField").NumberFieldProps>;
        representation: (props: any) => string;
    };
    reference: {
        component: React.FC<import("../field/ReferenceField").ReferenceFieldProps<import("../../app").Record>>;
        representation: (props: any) => string;
    };
    referenceChild: {
        component: (props: any) => JSX.Element;
        representation: () => string;
    };
    referenceArray: {
        component: React.FC<import("../field/ReferenceArrayField").ReferenceArrayFieldProps>;
        representation: (props: any) => string;
    };
    referenceArrayChild: {
        component: (props: any) => JSX.Element;
        representation: () => string;
    };
    richText: any;
    string: {
        component: React.FC<import("../field/TextField").TextFieldProps>;
        representation: (props: any) => string;
    };
    url: {
        component: React.FC<import("../field/UrlField").UrlFieldProps>;
        representation: (props: any) => string;
    };
};
export default _default;
