import { SvelteComponentTyped } from "svelte";
import type { Styles } from '../../../types';
declare const __propDef: {
    props: {
        cs?: Styles | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FlexProps = typeof __propDef.props;
export declare type FlexEvents = typeof __propDef.events;
export declare type FlexSlots = typeof __propDef.slots;
export default class Flex extends SvelteComponentTyped<FlexProps, FlexEvents, FlexSlots> {
}
export {};
