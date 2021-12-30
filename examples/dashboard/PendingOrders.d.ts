/// <reference types="react" />
import { Customer, Order } from '../types';
interface Props {
    orders?: Order[];
    customers?: {
        [key: string]: Customer;
    };
}
declare const PendingOrders: (props: Props) => JSX.Element;
export default PendingOrders;
