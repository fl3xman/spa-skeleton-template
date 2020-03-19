import * as React from "react";

import { Link } from "react-router-dom";

import { baseClassModifier } from "../../../foundation/ui";

import { Text } from "../text";

import { ButtonProps } from "./ButtonProps";

import "./styles.scss";

export const Button = ({
    children,
    disabled,
    className,
    to,
    buttonType = "button",
    onClick,
    type = "primary",
}: ButtonProps) => {
    const button = (
        <button
            onClick={disabled ? undefined : onClick}
            type={buttonType}
            disabled={disabled}
            className={baseClassModifier("button", { [type]: type }, className)}
        >
            <Text className="button__text">{children}</Text>
        </button>
    );

    return to ? <Link className="button__link" to={to}>{button}</Link> : button;
};
