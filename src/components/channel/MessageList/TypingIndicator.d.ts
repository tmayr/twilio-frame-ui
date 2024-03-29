import { MemberState } from "../../../state/ChannelState";
import { MemberDisplayOptions } from "../MessagingCanvas/MessagingCanvas";
import * as React from "react";
export interface TypingIndicatorProps {
    typers: Array<MemberState>;
    memberDisplayOptions: MemberDisplayOptions;
}
export declare const TypingIndicator: React.SFC<TypingIndicatorProps>;
