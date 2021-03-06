import { NotificationSideEffect, RedirectionSideEffect } from '../sideEffect';
import { OnSuccess, OnFailure } from '../types';
declare const useDeclarativeSideEffects: () => (resource: any, { onSuccess, onFailure, }?: DeclarativeSideEffects) => FunctionSideEffects;
export interface DeclarativeSideEffect {
    notification?: NotificationSideEffect;
    redirectTo?: RedirectionSideEffect;
    refresh?: boolean;
    unselectAll?: boolean;
}
export interface DeclarativeSideEffects {
    onSuccess?: DeclarativeSideEffect;
    onFailure?: DeclarativeSideEffect;
}
export interface FunctionSideEffects {
    onSuccess: OnSuccess;
    onFailure: OnFailure;
}
export default useDeclarativeSideEffects;
