import React from 'react';
export interface SidebarConfig {
    banner?: React.ReactNode;
    drawerWidth: number;
    drawerOpen: boolean;
    lists: Array<{
        subheader?: string;
        items: Array<{
            type: string;
            to: string;
            strict?: boolean;
            icon: React.ReactElement<any, any>;
            primary: string;
            secondary?: string;
            help?: string;
        }>;
    }>;
}
export declare const atomSidebar: import("recoil").RecoilState<SidebarConfig>;
export declare const selectorSidebarDawerOpen: import("recoil").RecoilState<boolean>;
export declare const useSidebarDrawerOpen: (open?: boolean) => void;
