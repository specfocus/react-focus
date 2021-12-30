import { ListItemProps } from '@mui/material/ListItem';
import React from 'react';
interface TranslatedListItemLinkProps extends ListItemProps {
    icon: React.ReactElement;
    primary: string;
    secondary?: string;
    to: string;
}
export default function TranslatedListItemLink({ icon, primary, secondary, to, ...otherProps }: TranslatedListItemLinkProps): JSX.Element;
export {};
