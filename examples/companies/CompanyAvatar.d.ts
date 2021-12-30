/// <reference types="react" />
import { Company } from '../../data/db/types';
export declare const CompanyAvatar: ({ record, size, }: {
    record?: Company | undefined;
    size?: "small" | "large" | undefined;
}) => JSX.Element | null;
