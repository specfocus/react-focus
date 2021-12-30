import { ReactElement, ReactNode } from 'react';
interface Props {
    dense: boolean;
    handleToggle: () => void;
    icon: ReactElement;
    isOpen: boolean;
    name: string;
    children: ReactNode;
}
declare const SubMenu: (props: Props) => JSX.Element;
export default SubMenu;
