import * as React from "react";

import { baseClassModifier } from "../../../../foundation/ui";

import { HorizontalFlowProps } from "./HorizontalFlowProps";

import "./styles.scss";

export const HorizontalFlow = ({ verticalAlign, wrap, spacing, className, children, onClick, id }: HorizontalFlowProps) => {
    const modifiers = {
        [`align-${verticalAlign}`]: verticalAlign,
        [`${wrap}`]: wrap,
        [`justify-${spacing}`]: spacing,
    };
    return (
        <div className={baseClassModifier("horizontal-flow", modifiers, className)} onClick={onClick} id={id}>
            {children}
        </div>
    );
};
