import { getEventSpeakers } from "@/lib/getEventSpeakers";
import Speakers from "./Speakers";

export async function SpeakersListWithSuspense() {
  const speakers = await getEventSpeakers();
  return <Speakers speakersList={speakers} />;
}
