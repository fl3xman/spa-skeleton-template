import * as React from "react";

import { VerticalFlow } from "../../../base/flow/vertical";
import { Header } from "../../../items/header";
import { CallendarEventNewForm } from "../../../layouts/forms/callendar-event-new";

export class CallendarEventNew extends React.Component {
    public render() {
        return (
            <VerticalFlow>
                <Header title="New event" />
                <CallendarEventNewForm />
            </VerticalFlow>
        );
    }
}
