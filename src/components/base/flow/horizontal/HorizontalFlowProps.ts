import * as React from "react";

import { ClassName, PartialChildren } from "../../../../foundation/ui";

export interface HorizontalFlowProps extends ClassName, PartialChildren {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    fullWidth?: boolean;
    spacing?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
    verticalAlign?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    id?: string;
}
