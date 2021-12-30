import { FC } from 'react';
import { ReactNode } from 'react';
interface Props {
    icon: FC<any>;
    to: string;
    title?: string;
    subtitle?: string | number;
    children?: ReactNode;
}
declare const CardWithIcon: (props: Props) => JSX.Element;
export default CardWithIcon;
