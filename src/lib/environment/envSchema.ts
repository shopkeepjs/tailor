import { z } from 'zod';
import type { CamelCaseKeys } from '@shopkeepjs/fletcher';

export enum EnvNames {
	NODE_ENV = 'NODE_ENV',
	SUPER_SECRET = 'SUPER_SECRET',
	SECRET = 'SECRET',
}

function getErrorMessage(environmentVariableName: EnvNames) {
	return { message: `Missing ${environmentVariableName} environment variable.` };
}

function getInvalidEnumError(environmentVariableName: EnvNames) {
	return { message: `Invalid enum for ${environmentVariableName} environment variable.` };
}

export const ConfigSchema = z
	.object<Record<EnvNames, z.ZodTypeAny>>({
		NODE_ENV: z
			.enum(['development', 'production', 'local'], { errorMap: () => getInvalidEnumError(EnvNames.NODE_ENV) })
			.default('local'),
		SECRET: z.string({ errorMap: () => getErrorMessage(EnvNames.SECRET) }).min(1),
		SUPER_SECRET: z
			.string({
				errorMap: () => getErrorMessage(EnvNames.SUPER_SECRET),
			})
			.min(1),
	})
	.transform<CamelCaseKeys<Record<EnvNames, string>>>((story) => ({
		nodeEnv: story.NODE_ENV,
		secret: story.SECRET,
		superSecret: story.SUPER_SECRET,
	}));

export type Config = z.infer<typeof ConfigSchema>;
