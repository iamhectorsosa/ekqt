import type { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "next-sanity/webhook";
export { config } from "next-sanity/webhook";

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (isValidSignature === false) {
      const message = "Invalid signature";
      console.log(message);
      return res.status(401).send(message);
    }

    await res.revalidate(`/blog`);
    await res.revalidate(`/blog/${body.slug}`);
    const updatedRoute = `Updated route: ${body.slug}`;
    console.log(updatedRoute);
    return res.status(200).send(updatedRoute);
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      return res.status(500).send(err.message);
    }
    return res.status(500).send(JSON.stringify(err));
  }
}
