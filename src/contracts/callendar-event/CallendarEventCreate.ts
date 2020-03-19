import { CallendarEvent } from "./CallendarEvent";

export type CallendarEventCreate = Pick<CallendarEvent, "name" | "address" | "startAt">;
    