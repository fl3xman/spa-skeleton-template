import * as React from "react";

import { baseClassModifier } from "../../../../foundation/ui";

import { VerticalFlowStateProps } from "./VerticalFlowStateProps";

import "./styles.scss";

export const VerticalFlow = ({ id, verticalAlign, spacing, fullWidth, className, children, onClick }: VerticalFlowStateProps) => {
    const modifiers = {
        [`align-${spacing}`]: spacing,
        [`justify-${verticalAlign}`]: verticalAlign,
        [`full-width`]: fullWidth,
    };
    return (
        <div id={id} className={baseClassModifier("vertical-flow", modifiers, className)} onClick={onClick}>
            {children}
        </div>
    );
};
