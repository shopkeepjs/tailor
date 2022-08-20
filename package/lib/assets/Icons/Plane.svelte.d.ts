import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ariaHidden?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlaneProps = typeof __propDef.props;
export declare type PlaneEvents = typeof __propDef.events;
export declare type PlaneSlots = typeof __propDef.slots;
export default class Plane extends SvelteComponentTyped<PlaneProps, PlaneEvents, PlaneSlots> {
}
export {};
