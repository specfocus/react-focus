import { ContainerProps } from '@mui/material/Container';
import { IconProps } from '@mui/material/Icon';
import React from 'react';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "header" | "title" | "content" | "icon" | "container" | "toolbar" | "speedDial" | "divider" | "buttons" | "speedDialFav">;
export interface WidgetAction {
    action: any;
    icon: React.FC<IconProps>;
    label: string;
}
export interface WidgetProps extends Pick<ContainerProps, 'children'> {
    actions: Record<string, WidgetAction>;
    icon: React.FC<IconProps>;
    maxWidth: ContainerProps['maxWidth'];
    reducer: (state: any, action: any) => any;
    title: string;
}
export default function Widget({ actions, children, icon: Icon, maxWidth, reducer, title: subtitle, title, ...props }: WidgetProps): JSX.Element;
