import { getSpeakers } from "@/lib/getSpeakers";
import Speakers from "./Speakers";

export async function SpeakersListWithSuspense() {
  const speakers = await getSpeakers();
  return <Speakers speakersList={speakers} />;
}
