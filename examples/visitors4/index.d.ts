/// <reference types="react" />
declare const resource: {
    list: (props: import("../../components").ListProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    create: (props: import("../../components").CreateProps) => JSX.Element;
    edit: (props: import("../../components").EditProps) => JSX.Element;
    icon: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};
export default resource;
