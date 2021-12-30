/// <reference types="react" />
import { CreateProps } from '../../app';
import { Theme } from '@mui/material/styles';
import { Styles } from '@mui/material/styles/withStyles';
export declare const styles: Styles<Theme, any>;
export declare const validatePasswords: ({ password, confirm_password, }: AnyObject) => any;
declare const VisitorCreate: (props: CreateProps) => JSX.Element;
export default VisitorCreate;
