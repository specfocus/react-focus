import { ContainerProps } from '@mui/material/Container';
import { IconProps } from '@mui/material/Icon';
import React from 'react';
export interface AsideProps extends ContainerProps {
    title: string;
    onClose?: () => void;
}
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"icon" | "title" | "button" | "header" | "content" | "toolbar" | "container" | "divider" | "speedDial" | "buttons" | "speedDialFav">;
export interface AsideAction {
    action: any;
    icon: React.FC<IconProps>;
    label: string;
}
export interface AsideProps extends Pick<ContainerProps, 'children' | 'maxWidth'> {
}
declare const Aside: React.FC<AsideProps>;
export default Aside;
