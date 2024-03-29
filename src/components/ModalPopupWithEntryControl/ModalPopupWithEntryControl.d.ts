import * as React from "react";
export interface ModalPopupWithEntryControlProps {
    readonly alignRight?: boolean;
    readonly autoClose?: boolean;
    readonly entryControl: React.ReactElement<any> | ((isModalOpen: boolean) => React.ReactElement<any>);
    readonly onChange?: () => void;
    readonly className?: string;
    readonly innerRef?: (element: ModalPopupWithEntryControl) => void;
}
export interface ModalPopupWithEntryControlState {
    readonly isOpen: boolean;
}
export declare class ModalPopupWithEntryControl extends React.Component<ModalPopupWithEntryControlProps, ModalPopupWithEntryControlState> {
    private entryButtonRef;
    private modalPopup;
    private visibilityChanged;
    constructor(props: ModalPopupWithEntryControlProps);
    render(): JSX.Element;
    componentDidUpdate(): void;
    readonly isOpen: boolean;
    show(): void;
    hide(): void;
    private onOpenMenuClick;
    private onEntryButtonBlur;
    private onModalBlur;
    private setEntryControlRef;
    private setModalPopupRef;
    static defaultProps: {
        className: string;
    };
    private getEntryControl;
}
