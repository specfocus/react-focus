export const data: ({
    name: string;
    label: string;
    type: string;
}[][] | ({
    name: string;
    label: string;
    type: string;
    options?: undefined;
    optionLabelKey?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    options: {
        realName: string;
    }[];
    optionLabelKey: string;
})[] | ({
    name: string;
    type: string;
    options: {
        label: string;
        value: boolean;
    }[];
} | {
    name: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
})[])[];
export const validationSchema: (Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date, Record<string, any>>;
}>>>)[];
export const initialValues: ({
    username: string;
    password: string;
    date: any;
    email?: undefined;
    time?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    email: string;
    time: any;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    checkbox: any;
    radio: any;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    email?: undefined;
    time?: undefined;
})[];
import * as Yup from "yup";
