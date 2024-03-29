export interface Version {
    major: number;
    minor: number;
    build: number;
}
interface AnyObject {
    [key: string]: any;
}
interface HaveSameValuesMethodOptions {
    equalUndefinedToEmptyArray?: boolean;
}
export declare class Utils {
    static stableSort<T>(array: Array<T>, compare: (a: T, b: T) => number): Array<T>;
    /**
     * Deep merge two objects into a new object.
     */
    static merge<A extends Record<string, any>, B extends Record<string, any>>(obj1: Partial<A & B>, obj2: B, override?: boolean): A & B;
    /**
     * Deep merge second object into the first one.
     *
     * @param obj1 first object to merge into
     * @param obj2 second object
     * @param override whether values in the first object will be overridden
     */
    static mergeInto<A extends Record<string, any>, B extends Record<string, any>>(obj1: Partial<A & B>, obj2: B, override?: boolean): A & B;
    static mergeArrayItems<T>(array: Array<T>): Array<T>;
    /**
     * Update static overrideProps for all components that have original defaultProps
     *
     * Use with components decorated with withDefaultPropsUpdate.
     *
     * @param allComponents
     * @param defaultPropsByComponent
     */
    static updateDefaultProps<T>(allComponents: T, defaultPropsByComponent: {
        [P in keyof T]?: any;
    }): void;
    static getNameForMember(friendlyNameOverrides: boolean, customName: string, friendlyName: string, identity: string): string;
    static formatString(theString: string, ...params: Array<string>): string;
    static parseVersion(version: string): Version;
    static isGreaterThanTargetVersion(version: Version, targetVersion: Version): boolean;
    static simpleUrlRegexp: RegExp;
    static urlRegexp: RegExp;
    static copyMap<K, V>(sourceMap: Map<K, V>): Map<K, V>;
    static isSameDate(date1: Date, date2: Date): boolean;
    static isToday(date: Date): boolean;
    static isYesterday(date: Date): boolean;
    static formatSeparatorDate(date: Date): string;
    static parseText(rawBody: string): any[];
    private static formatTimeDurationInFull;
    private static formatTimeDurationInCompact;
    /**
     * Format time duration as below
     * 0sec - 59min - MM:SS
     * 1h - 23h59min - HHh MMmin
     * from 1d - DDd HHh
     */
    private static formatTimeDurationInShort;
    static formatTimeDuration(time: number, format?: "full" | "compact" | "short"): string;
    static areEqual(obj1: any, obj2: any): boolean;
    /**
     * Similiar to `areEqual`, this methods deeply compares values.
     * Also, if two values are array, it compares them ignoring the sort order.
     *
     * @static
     * @param {{}} obj1
     * @param {{}} obj2
     * @param {{}} options
     * @returns boolean
     */
    static haveSameValues(obj1: AnyObject, obj2: AnyObject, options?: HaveSameValuesMethodOptions): boolean;
}
export {};
