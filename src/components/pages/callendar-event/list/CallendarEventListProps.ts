import { RouteComponentProps } from "react-router";

import { CallendarEventState } from "../../../../contracts/callendar-event";

export type CallendarEventListProps = RouteComponentProps<{ eventId?: string }>;

export interface CallendarEventListProviderProps {
    callendarEventState: CallendarEventState;
}
