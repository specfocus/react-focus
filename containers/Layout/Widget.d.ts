import { ContainerProps } from '@mui/material/Container';
import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"title" | "button" | "header" | "content" | "icon" | "toolbar" | "speedDial" | "container" | "divider" | "buttons" | "speedDialFav">;
export interface WidgetAction {
    action: any;
    icon: React.FC<SvgIconProps>;
    label: string;
}
export interface WidgetProps extends Pick<ContainerProps, 'children'> {
    actions: Record<string, WidgetAction>;
    icon: React.FC<SvgIconProps>;
    maxWidth: ContainerProps['maxWidth'];
    reducer: (state: any, action: any) => any;
    title: string;
}
export default function Widget({ actions, children, icon: Icon, maxWidth, reducer, title: subtitle, title, ...props }: WidgetProps): JSX.Element;
