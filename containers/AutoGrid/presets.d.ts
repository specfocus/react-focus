import { ReactNode } from 'react';
export declare const SHORT = "short";
export declare const TALL = "tall";
export declare const TIGHT = "tight";
export declare const WIDE = "wide";
export declare const HEIGHT: readonly [0, 1, 2, 3];
export declare const WIDTH: readonly [0, 1, 2, 3];
export declare type AreaHeight = typeof HEIGHT[number];
export declare type AreaWidth = typeof WIDTH[number];
export declare type AreaTuple = [AreaWidth, AreaHeight, ReactNode];
export declare type AreaArray = Array<AreaTuple>;
export declare type AreaSize = [number, number];
export declare type AreaPresetKey = [number, ...Array<AreaSize>];
export declare type AreaMatrix = number[][];
export declare type AreaPreset = [AreaPresetKey, AreaMatrix];
export declare const generateSystemProps: ([width, ...sizes]: [number, ...AreaSize[]]) => Record<string, any>;
