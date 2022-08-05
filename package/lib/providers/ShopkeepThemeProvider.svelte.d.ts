import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        theme?: any;
        font?: string | undefined;
        mode: 'dark' | 'light';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ShopkeepThemeProviderProps = typeof __propDef.props;
export declare type ShopkeepThemeProviderEvents = typeof __propDef.events;
export declare type ShopkeepThemeProviderSlots = typeof __propDef.slots;
export default class ShopkeepThemeProvider extends SvelteComponentTyped<ShopkeepThemeProviderProps, ShopkeepThemeProviderEvents, ShopkeepThemeProviderSlots> {
}
export {};
