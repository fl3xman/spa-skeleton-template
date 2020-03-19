import * as React from "react";

import { IReactionDisposer, reaction } from "mobx";
import { inject, observer } from "mobx-react";

import { StateInject } from "../../../../assembly/StateInject";
import { injectProvider } from "../../../../foundation/assembly/InjectProvider";

import { Button } from "../../../base/button";
import { HorizontalFlow } from "../../../base/flow/horizontal";
import { VerticalFlow } from "../../../base/flow/vertical";
import { Text, Typography } from "../../../base/text";
import { Header } from "../../../items/header";

import { CallendarEventDetailProps, CallendarEventDetailProviderProps } from "./CallendarEventDetailProps";

import "./styles.scss";

@inject(StateInject.CallendarEvent)
@observer
@injectProvider()
export class CallendarEventDetail extends React.Component<CallendarEventDetailProps> {

    private provider: CallendarEventDetailProviderProps;

    private disposables: IReactionDisposer[] = [];

    public componentDidMount() {
        this.disposables = [
            reaction(() => this.provider.callendarEventState.hasCurrent, (hasCurrent) => {
                if (!hasCurrent) {
                    this.props.history.push("/");
                }
            }, { fireImmediately: true }),
        ];

        this.provider.callendarEventState.find(this.props.match.params.eventId);
    }

    public componentWillUnmount() {
        this.disposables.forEach((dispose) => dispose());
    }

    public render() {
        const { callendarEventState } = this.provider;

        if (!callendarEventState.hasCurrent) {
            return null;
        }

        const current = callendarEventState.current;

        return (
            <VerticalFlow className="event-detail">
                <Header leftAccessory={<Button to="/">Back</Button>} />
                <div className="event-detail__wrapper">
                    <Text className="event-detail__wrapper__title" type={Typography.Heading2}>{current?.name}</Text>
                    <HorizontalFlow spacing="space-between" verticalAlign="flex-start" className="event-detail__wrapper__content">
                        <Text className="event-detail__wrapper__content__description">{current?.address}</Text>
                    </HorizontalFlow>
                </div>
            </VerticalFlow>
        );
    }
}
