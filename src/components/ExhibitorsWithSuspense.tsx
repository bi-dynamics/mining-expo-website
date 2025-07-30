import { getCurrentYearExhibitors } from "@/lib/getExhibitors";
import Exhibitors from "./Exhibitors";

export async function ExhibitorsWithSuspense() {
  const exhibitors = await getCurrentYearExhibitors();
  return <Exhibitors exhibitorsList={exhibitors} />;
}
