import * as moment from "moment";
import * as React from "react";

import classNames from "classnames";

import { VerticalFlow } from "../../base/flow/vertical";
import { Text } from "../../base/text";

import { DateProps } from "./DateProps";

import "./styles.scss";

export class Date extends React.Component<DateProps> {
    public render() {
        return (
            <VerticalFlow spacing="center" className={classNames("date", this.props.className)}>
                <Text className="date__day">{this.date[0]}</Text>
                <Text>{this.date[1]}</Text>
            </VerticalFlow>
        );
    }

    public get date(): [string, string] {
        return [
            moment(this.props.date).format("D"),
            moment(this.props.date).format("MMM").toUpperCase(),
        ];
    }
}
