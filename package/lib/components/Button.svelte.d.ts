import { SvelteComponentTyped } from "svelte";
import type { Sizes, Styles, ColorStrings } from '../../types';
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        label: string;
        size?: Sizes | undefined;
        variant?: "primary" | "secondary" | undefined;
        color?: ColorStrings | "prime" | "complementary" | undefined;
        mode?: "dark" | "light" | undefined;
        onClick: () => unknown;
        iconBefore?: typeof SvelteComponent | undefined;
        iconAfter?: typeof SvelteComponent | undefined;
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        cs?: Styles | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
/**
 * Here's some documentation for this component.
 *  It will show up on hover.
 *
 *  - You can use markdown here.
 *  - You can also use code blocks here.
 *  - Usage:
 *
 * ```tsx
 * <main name="Arethra">
 * 	```
 */
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
