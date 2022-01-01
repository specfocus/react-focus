export interface AppUser {
}
export declare const atomUser: import("recoil").RecoilState<AppUser>;
export declare const useSetUserState: () => import("recoil").SetterOrUpdater<AppUser>;
export declare const useUserState: () => [AppUser, import("recoil").SetterOrUpdater<AppUser>];
export declare const useUserValue: () => AppUser;
