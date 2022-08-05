import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        Icon?: SvelteComponent | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
    get Icon(): undefined;
}
export {};
