import { fetchEventApi } from "./eventApi";

export interface Exhibitor {
  id: string;
  name: string;
  description: string | null;
  logoUrl: string | null;
}

interface ApiExhibitor {
  id: string;
  exhibitorId: string;
  companyName: string;
  description: string | null;
  logoUrl: string | null;
  website: string | null;
  boothNumber: string | null;
  category: string | null;
}

export async function getEventExhibitors(): Promise<Exhibitor[]> {
  const body = await fetchEventApi<{ data: ApiExhibitor[] }>("/exhibitors");
  return (body?.data ?? [])
    .map((raw) => ({
      id: raw.id,
      name: raw.companyName,
      description: raw.description,
      logoUrl: raw.logoUrl,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
