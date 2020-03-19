import { Moment } from "moment";

export interface CallendarEvent {
    id: string;
    name: string;
    address: string;
    startAt: Moment;
    active: boolean;
}
