export declare type StateMachineCb<T> = (newState: T, oldState: T) => any;
export declare class StateMachine<T extends string> {
    private _name;
    private _handlers;
    private _state;
    constructor(name: string);
    readonly state: T;
    onChange(cb: StateMachineCb<T>): () => void;
    onEnter(state: T, cb: StateMachineCb<T>): () => void;
    onLeave(state: T, cb: StateMachineCb<T>): () => void;
    transitionTo(newState: T): void;
}
