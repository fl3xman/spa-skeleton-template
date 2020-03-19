import * as moment from "moment";
import * as React from "react";
import * as uuid from "uuid";

import { observable } from "mobx";
import { observer } from "mobx-react";
import { SingleDatePicker } from "react-dates";

import "react-dates/initialize";

import { DatePattern } from "../../../foundation/date/DatePattern";

import { VerticalFlow } from "../../base/flow/vertical";
import { InputLabel } from "../../base/input-label";
import { InputInlineError } from "../input-inline-error";

import { DatePickerProps } from "./DatePickerProps";

import "react-dates/lib/css/_datepicker.css";
import "../../../../assets/styles/react-dates-overrides.scss";

@observer
export class DatePicker extends React.Component<DatePickerProps> {

    @observable
    private focused: boolean = false;

    @observable
    private touched: boolean = false;

    @observable
    private closed: boolean = true;

    private get mobile() {
        return window.matchMedia("(max-width: 480px)").matches;
    }

    public render() {
        return (
            <VerticalFlow>
                <InputLabel className="ml-8 mt-4" label={this.props.label} required={this.props.required} />
                <SingleDatePicker
                    date={this.props.value || null}
                    onDateChange={this.handleChange}
                    focused={this.focused}
                    placeholder={this.props.placeholder}
                    small={true}
                    onFocusChange={this.handleFocusChange}
                    id={uuid.v4()}
                    onClose={this.handleClose}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel={true}
                    withFullScreenPortal={this.mobile}
                    withPortal={this.mobile}
                    displayFormat={DatePattern.Short}
                />
                {(!!this.props.error && this.touched) && <InputInlineError className="ml-8" error={this.props.error} />}
            </VerticalFlow>
        );
    }

    private handleClose = () => this.closed = true;

    private handleFocusChange = () => {
        this.focused = !this.focused;
        if (!this.focused && this.closed) {
            this.props.onBlur();
            this.touched = true;
        }
    }

    private handleChange = (date: moment.Moment | null) => {
        this.props.onChange(date);
    }
}
