import { z } from "zod";

const envVariables = z.object({
  SANITY_TOKEN: z.string(),
  SANITY_REVALIDATE_SECRET: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
