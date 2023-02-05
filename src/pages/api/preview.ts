import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, {
    Location: req.query.slug ? `/blog/${req.query.slug}` : "/",
  });
  res.end();
}
