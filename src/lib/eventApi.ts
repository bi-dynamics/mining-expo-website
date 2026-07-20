const EVENT_API_BASE_URL =
  process.env.EVENT_API_BASE_URL ??
  "https://event.wemotive.in/api/v1/public/events/slug/mining-expo-2026-mpb3pqiq";

/** Asset URLs in responses (exhibitor logos, speaker photos) are pre-signed
 *  and expire after 1 hour, so the cache window must stay well below that. */
const REVALIDATE_SECONDS = 300;

/** Fetches a public event API endpoint server-side with ISR caching.
 *  Returns null on any failure so callers can fall back to empty states. */
export async function fetchEventApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${EVENT_API_BASE_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`Event API ${path} responded with ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.error(`Failed to fetch event API ${path}:`, error);
    return null;
  }
}
