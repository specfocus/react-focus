/// <reference types="react" />
import { MenuItemLinkProps } from '../../app';
import { ResourceConfiguration } from '../ResourceConfiguration';
export declare const ResourceMenuItem: (props: Omit<MenuItemLinkProps, "resource" | "to"> & {
    resource: ResourceConfiguration;
}) => JSX.Element;
