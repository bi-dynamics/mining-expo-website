import { getEventExhibitors } from "@/lib/getEventExhibitors";
import Exhibitors from "./Exhibitors";

export async function ExhibitorsWithSuspense() {
  const exhibitors = await getEventExhibitors();
  return <Exhibitors exhibitorsList={exhibitors} />;
}
