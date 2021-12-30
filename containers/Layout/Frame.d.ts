/// <reference types="react" />
import { ContainerProps } from '@mui/material/Container';
import { AppFrame } from '../../app/AppStack';
export interface FrameProps extends AppFrame, Pick<ContainerProps, 'children'> {
    name: string;
}
export default function Frame({ children, name, title, tools, widgets, }: FrameProps): JSX.Element;
