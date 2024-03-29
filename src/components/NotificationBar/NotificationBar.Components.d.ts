/// <reference types="react" />
/// <reference types="create-emotion" />
import { NotificationType, Notification } from "../../NotificationManager";
export declare const NotificationBarContainer: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export interface NotificationOptions {
    customIcon?: string;
    backgroundColor?: string;
    type: NotificationType;
}
export declare const NotificationContainer: import("create-emotion-styled/types/react").StyledOtherComponent<NotificationOptions, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const BottomBorder: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const MessageContainer: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const ActionsContainer: import("create-emotion-styled/types/react").StyledOtherComponent<Pick<Notification, "closeButton">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const ActionItemContainer: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
