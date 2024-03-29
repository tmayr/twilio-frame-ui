/// <reference types="react" />
/// <reference types="create-emotion" />
export interface BarFragmentProps {
    percentageValue: number;
    color: string;
    "aria-label": string;
    title: string;
}
export declare const Bar: import("create-emotion-styled").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
export declare const BarFragment: import("create-emotion-styled").StyledOtherComponent<BarFragmentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
