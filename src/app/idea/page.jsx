
import IdeaClient from "@/component/IdeaClient";
import { showidea } from "@/lib/data";


export default async function IdeaPage() {
  const ideas = await showidea();

  return <IdeaClient initialData={ideas || []} />;
}