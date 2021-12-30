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
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
}>>>)[];
export const initialValues: ({
    username: string;
    password: string;
    date: null;
    email?: undefined;
    time?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    email: string;
    time: null;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    checkbox: null;
    radio: null;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    email?: undefined;
    time?: undefined;
})[];
import * as Yup from "yup";
