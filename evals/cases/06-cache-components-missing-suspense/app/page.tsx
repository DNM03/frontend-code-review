import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return <main data-theme={theme}>Dashboard</main>;
}
