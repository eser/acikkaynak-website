// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@serverless/cloud";

const handler = async function handler(req: any, res: any) {
  const { items } = await data.get("user:*");
  res.status(200).json({ users: items.map((item) => item.value) });
};

export { handler, handler as default };
