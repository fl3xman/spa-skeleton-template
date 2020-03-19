import * as React from "react";

import { HorizontalFlow } from "../../base/flow/horizontal";
import { Text, Typography } from "../../base/text";

import { HeaderProps } from "./HeaderProps";

import "./styles.scss";

export class Header extends React.Component<HeaderProps> {
    public render() {
        return (
            <HorizontalFlow spacing="space-between" verticalAlign="center" className="header">
                <HorizontalFlow spacing="flex-start">
                    {!!this.props.leftAccessory ? this.props.leftAccessory : null}
                    {!!this.props.title ? <Text type={Typography.Heading1}>{this.props.title}</Text> : null}
                </HorizontalFlow>
                {!!this.props.rightAccessory ? this.props.rightAccessory : null}
            </HorizontalFlow>
        );
    }
}
