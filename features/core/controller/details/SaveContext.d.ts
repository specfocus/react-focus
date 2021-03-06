import * as React from 'react';
import { MutableRefObject } from 'react';
import { RedirectionSideEffect } from '../../sideEffect';
import { Record, OnFailure, OnSuccess } from '../../types';
import { SideEffectContextValue, TransformData } from '../saveModifiers';
interface SaveContextValue extends SideEffectContextValue {
    onFailureRef?: MutableRefObject<OnFailure>;
    onSuccessRef?: MutableRefObject<OnSuccess>;
    transformRef?: MutableRefObject<TransformData>;
    save?: (record: Partial<Record>, redirect: RedirectionSideEffect, callbacks?: {
        onSuccess?: OnSuccess;
        onFailure?: OnFailure;
        transform?: TransformData;
    }) => void;
    saving?: boolean;
}
export declare const SaveContext: React.Context<SaveContextValue>;
export declare const SaveContextProvider: ({ children, value }: {
    children: any;
    value: any;
}) => JSX.Element;
/**
 * Get the save() function and its status
 *
 * Used in forms.
 *
 * @example
 *
 * const {
 *     save,
 *     saving
 * } = useSaveContext();
 */
export declare const useSaveContext: <PropsType extends SaveContextValue = SaveContextValue>(props?: PropsType) => SaveContextValue;
export declare const usePickSaveContext: <ContextType extends SaveContextValue = SaveContextValue>(context: ContextType) => SaveContextValue;
export {};
