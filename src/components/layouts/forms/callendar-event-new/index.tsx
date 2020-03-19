import * as React from "react";

import { inject, observer } from "mobx-react";
import { Field, Form, FormProps, FormRenderProps } from "react-final-form";
import { RouteComponentProps, withRouter } from "react-router";

import { StateInject } from "../../../../assembly/StateInject";
import { CallendarEventCreate } from "../../../../contracts/callendar-event";
import { injectProvider } from "../../../../foundation/assembly/InjectProvider";

import { requiredField } from "../../../../validation";

import { DatePickerAdapter } from "../../../base/adapters/DatePickerAdapter";
import { InputAdapter } from "../../../base/adapters/InputAdapter";
import { TextAreaAdapter } from "../../../base/adapters/TextareaAdapter";
import { Button } from "../../../base/button";
import { Divider } from "../../../base/divider";
import { HorizontalFlow } from "../../../base/flow/horizontal";
import { VerticalFlow } from "../../../base/flow/vertical";

import { CallendarEventNewProviderProps } from "./CallendarEventNewProps";

import "./styles.scss";

const CallendarEventNewFormWrapper = Form as React.FC<FormProps<CallendarEventCreate>>;

@inject(StateInject.CallendarEvent)
@observer
@injectProvider()
class CallendarEventNewFormClass extends React.Component<RouteComponentProps> {

    private provider: CallendarEventNewProviderProps;

    public render() {
        return (
            <VerticalFlow className="create-event-form">
                <CallendarEventNewFormWrapper
                    onSubmit={this.handleSubmit}
                    render={this.renderForm}
                />
            </VerticalFlow>
        );
    }

    private renderForm = ({ handleSubmit, valid, touched }: FormRenderProps<CallendarEventCreate>) => {
        return (
            <form onSubmit={handleSubmit}>
                <HorizontalFlow verticalAlign="flex-start" wrap="wrap">
                    <Field
                        name="name"
                        label="Event name"
                        placeholder="Name it..."
                        component={InputAdapter}
                        required={true}
                        validate={requiredField}
                        type="text"
                    />
                </HorizontalFlow>
                <Field
                    name="address"
                    label="Address"
                    component={TextAreaAdapter}
                    required={true}
                    validate={requiredField}
                    type="text"
                />
                <HorizontalFlow spacing="flex-start" verticalAlign="flex-start">
                    <Field
                        name="startAt"
                        label="Started"
                        component={DatePickerAdapter}
                        required={true}
                        validate={requiredField}
                    />
                    
                </HorizontalFlow>
                <Divider />
                <HorizontalFlow spacing="space-between">
                    <Button disabled={!valid || !touched} type="primary" buttonType="submit">Create event</Button>
                    <Button type="danger" to="/">Cancel</Button>
                </HorizontalFlow>
            </form>
        );
    }

    private handleSubmit = (event: CallendarEventCreate) => {
        this.provider.callendarEventState.add(event);
        this.props.history.push("/");
    }
}

export const CallendarEventNewForm = withRouter(CallendarEventNewFormClass);
