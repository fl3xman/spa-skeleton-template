import * as React from "react";

import { inject, observer } from "mobx-react";

import { StateInject } from "../../../../assembly/StateInject";
import { injectProvider } from "../../../../foundation/assembly/InjectProvider";

import { Button } from "../../../base/button";
import { VerticalFlow } from "../../../base/flow/vertical";
import { Header } from "../../../items/header";
import { CallendarEventRow } from "../../../layouts/callendar-event-row";

import { CallendarEventListProps, CallendarEventListProviderProps } from "./CallendarEventListProps";

import "./styles.scss";

@inject(StateInject.CallendarEvent)
@observer
@injectProvider()
export class CallendarEventList extends React.Component<CallendarEventListProps> {

    private provider: CallendarEventListProviderProps;

    public render() {
        const { callendarEventState } = this.provider;

        return (
            <VerticalFlow className="event-list">
                <Header title="Events" rightAccessory={this.renderRightAccessory()} />
                <VerticalFlow className="event-list__content">
                    {callendarEventState.isListEmpty ? "Empty" : null}
                    {callendarEventState.list.map(($) => <CallendarEventRow key={$.id} event={$} />)}
                </VerticalFlow>
            </VerticalFlow>
        );
    }

    private renderRightAccessory = () => <Button to="/new">Create event</Button>;
}
