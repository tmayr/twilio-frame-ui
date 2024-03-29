import * as React from "react";
export interface DataTableProps<T, C> {
    items: Array<T>;
    itemKey: (item: T) => any;
    placeholder?: React.ReactNode;
    columnDataCreationContext: C;
    selectedItemKey?: any;
    onRowClick?: (item: T) => void;
    hasHoverStyle?: boolean;
}
interface DataTableState<T> {
    sortingFn?: (a: T, b: T) => number;
    sortingAsc: boolean;
    sortingKey?: React.Key;
}
export declare class DataTable<T, C> extends React.Component<DataTableProps<T, C>, DataTableState<T>> {
    state: DataTableState<T>;
    static defaultProps: Partial<DataTableProps<any, any>>;
    private sortingIconProps;
    render(): {};
    private setSortingFn;
    private static isValidColumnItem;
    private validateChildren;
}
export {};
