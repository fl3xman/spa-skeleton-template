import * as React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import { TextProps } from "./TextProps";
import { Typography } from "./Typography";

import "./styles.scss";

export const Text = ({ className, onClick, children, type = Typography.Body, color, to }: TextProps) => {
    const text = (
        <span
            className={classNames("text", type, className)}
            style={{ color }}
            onClick={onClick}
        >
            {children}
        </span>
    );

    return to ? <Link className="text--link" to={to}>{text}</Link> : text;
};

export { Typography } from "./Typography";
