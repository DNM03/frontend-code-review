"use server";

import { db } from "@/lib/db";

export async function deleteAccount(formData: FormData) {
  const accountId = String(formData.get("accountId"));

  await db.account.delete({
    where: { id: accountId },
  });
}
