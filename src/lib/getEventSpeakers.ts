import { fetchEventApi } from "./eventApi";

export interface Speaker {
  id: string;
  name: string;
  title: string | null;
  company: string | null;
  bio: string | null;
  photoUrl: string | null;
  email: string | null;
  website: string | null;
  socialLinks: Record<string, string>;
}

interface ApiSpeaker {
  id: string;
  firstName: string | null;
  lastName: string | null;
  title: string | null;
  company: string | null;
  bio: string | null;
  photoUrl: string | null;
  email: string | null;
  website: string | null;
  socialLinks: Record<string, string> | null;
}

/** The event platform vendor's test accounts (e.g. "Sail Speaker") must not
 *  appear on the site. */
const VENDOR_TEST_EMAIL_DOMAIN = "@wemotiveforge.com";

export async function getEventSpeakers(): Promise<Speaker[]> {
  const body = await fetchEventApi<{ data: ApiSpeaker[] }>("/speakers");
  return (body?.data ?? [])
    .filter((raw) => !raw.email?.endsWith(VENDOR_TEST_EMAIL_DOMAIN))
    .map((raw) => ({
      id: raw.id,
      name: [raw.firstName, raw.lastName].filter(Boolean).join(" "),
      title: raw.title,
      company: raw.company,
      bio: raw.bio,
      photoUrl: raw.photoUrl,
      email: raw.email,
      website: raw.website,
      socialLinks: raw.socialLinks ?? {},
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getEventSpeaker(id: string): Promise<Speaker | null> {
  const speakers = await getEventSpeakers();
  return speakers.find((speaker) => speaker.id === id) ?? null;
}
