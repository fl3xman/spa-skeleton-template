import { ClassName, PartialChildren } from "../../../../foundation/ui";

export interface VerticalFlowStateProps extends ClassName, PartialChildren {
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    verticalAlign?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    spacing?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "space-between";
    fullWidth?: boolean;
}
