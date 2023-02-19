/// <reference types="svelte" />
/// <reference types="vite/client" />

declare type Config = import('./lib/environment/').Config;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv extends Config {}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
