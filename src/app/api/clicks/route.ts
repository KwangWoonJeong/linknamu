import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 요청마다 DB에서 최신 값을 읽도록 캐시하지 않습니다.
export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 모든 링크의 클릭 수를 한 번에 돌려줍니다. 예: { "github": 42, "blog": 3 }
export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();

  const counts: Record<string, number> = {};
  for (const id of Array.from(linkIds)) counts[id] = 0;
  for (const doc of docs) counts[doc._id] = doc.count;

  return NextResponse.json(counts);
}

// 링크 하나의 클릭 수를 1 늘립니다. 요청 본문: { "id": "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 등록된 링크만 집계해서, 임의의 값으로 DB에 문서가 쌓이지 않게 합니다.
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ id, count: doc?.count ?? 1 });
}
