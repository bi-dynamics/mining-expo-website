import Exhibitors from "./Exhibitors";
import { getExhibitors } from "@/lib/getExhibitors";

export async function ExhibitorsWithSuspense() {
  const exhibitors = await getExhibitors();
  return <Exhibitors exhibitorsList={exhibitors} />;
}
