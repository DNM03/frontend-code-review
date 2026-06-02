"use server";

import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";

export async function createPost(formData: FormData) {
  await db.post.create({
    data: { title: String(formData.get("title")) },
  });

  revalidateTag("posts");
}
