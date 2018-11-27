import { Item } from './item';

export interface Orden {
    email?: string,
    orden?: Item[],
    id?: string,
    monto?: number
}