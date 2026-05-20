
import IdeaClient from "@/component/IdeaClient";
import { showidea } from "@/lib/data";

export const metadata = {
  title: "All Idea | Next Idea",
  description: "Share your idea present your telent",
};
export default async function IdeaPage() {
  const ideas = await showidea();

  return <IdeaClient initialData={ideas || []} />;
}