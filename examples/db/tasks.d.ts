import { Db } from './types';
export declare const generateTasks: (db: Db) => {
    id: number;
    contact_id: any;
    type: any;
    text: any;
    due_date: Date;
    sales_id: any;
}[];
