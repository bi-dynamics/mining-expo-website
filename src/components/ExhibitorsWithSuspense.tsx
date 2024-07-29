import Exhibitors from "./Exhibitors";
import { getExhibitors2024 } from "@/lib/getExhibitors2024";

export async function ExhibitorsWithSuspense() {
  const exhibitors = await getExhibitors2024();
  return <Exhibitors exhibitorsList={exhibitors} />;
}
