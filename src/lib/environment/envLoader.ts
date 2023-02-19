import { EnvNames, type Config } from './envSchema';

const config: Config = {
	nodeEnv: import.meta.env[`VITE_${EnvNames.NODE_ENV}`],
	secret: import.meta.env[`VITE_${EnvNames.SECRET}`],
	superSecret: import.meta.env[`VITE_${EnvNames.SUPER_SECRET}`],
};

export default config;
