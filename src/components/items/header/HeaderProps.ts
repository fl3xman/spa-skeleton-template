import { ReactNode } from "react";

export interface HeaderProps {
    rightAccessory?: ReactNode;
    leftAccessory?: ReactNode;
    title?: string;
}
