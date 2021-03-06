import * as React from 'react';
import { ElementType } from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
export interface ExpandRowButtonProps extends IconButtonProps {
    classes?: any;
    component?: ElementType;
    expanded: boolean;
    expandContentId?: string;
}
declare const _default: React.MemoExoticComponent<({ classes, expanded, expandContentId, ...props }: ExpandRowButtonProps) => JSX.Element>;
export default _default;
