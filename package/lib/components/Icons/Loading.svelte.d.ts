import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
        ariaHidden?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LoadingProps = typeof __propDef.props;
export declare type LoadingEvents = typeof __propDef.events;
export declare type LoadingSlots = typeof __propDef.slots;
export default class Loading extends SvelteComponentTyped<LoadingProps, LoadingEvents, LoadingSlots> {
}
export {};
