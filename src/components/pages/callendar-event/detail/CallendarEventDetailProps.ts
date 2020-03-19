import { RouteComponentProps } from "react-router";

import { CallendarEventState } from "../../../../contracts/callendar-event";

export type CallendarEventDetailProps = RouteComponentProps<{ eventId: string }>;

export interface CallendarEventDetailProviderProps {
    callendarEventState: CallendarEventState;
}
