import * as React from "react";

import { ClassName, PartialChildren } from "../../../foundation/ui";

import { Typography } from "./Typography";

export interface TextProps extends PartialChildren, ClassName {
    type?: Typography;
    color?: string;
    to?: string;
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
