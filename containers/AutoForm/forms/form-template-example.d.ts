export const data: ({
    name: string;
    label: string;
    type: string;
}[] | {
    name: string;
    label: string;
    type: string;
    options?: undefined;
    optionLabelKey?: undefined;
    multiple?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    options: {
        realName: string;
    }[];
    optionLabelKey: string;
    multiple?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    options: {
        title: string;
    }[];
    optionLabelKey: string;
    multiple: boolean;
} | {
    name: string;
    type: string;
    options: {
        label: string;
        value: boolean;
    }[];
    label?: undefined;
    optionLabelKey?: undefined;
    multiple?: undefined;
} | {
    name: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
    label?: undefined;
    optionLabelKey?: undefined;
    multiple?: undefined;
})[];
export const validationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    autocomplete: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    autocomplete: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    date: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    time: import("yup/lib/date").RequiredDateSchema<Date | null | undefined, Record<string, any>>;
    autocomplete: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export namespace initialValues {
    const username: string;
    const password: string;
    const email: string;
    const date: null;
    const time: null;
    const autocomplete: never[];
}
import * as Yup from "yup";
