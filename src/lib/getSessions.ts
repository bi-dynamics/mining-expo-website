const SESSIONS_API_URL =
  process.env.SESSIONS_API_URL ??
  "https://event.wemotive.in/api/v1/public/events/slug/mining-expo-2026-mpb3pqiq/sessions";

/** Sessions in this track belong to the main event (expo) schedule; every
 *  other track belongs to the conference programme. */
const EXPO_TRACK_NAME = "2026 Expo Programme";

/** Speaker photo URLs are pre-signed and expire after 1 hour, so the cache
 *  window must stay well below that. */
const REVALIDATE_SECONDS = 300;

export interface ScheduleSpeaker {
  id: string;
  name: string;
  title: string | null;
  photoUrl: string | null;
}

export interface SessionTrack {
  id: string;
  name: string;
  color: string;
}

export interface ScheduleSession {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  sessionType: string;
  startTime: Date;
  endTime: Date;
  track: SessionTrack | null;
  speakers: ScheduleSpeaker[];
}

interface ApiSpeaker {
  id: string;
  userId: string | null;
  firstName: string | null;
  lastName: string | null;
  title: string | null;
  photoUrl: string | null;
}

interface ApiSession {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  sessionType: string;
  /** Epoch milliseconds encoded as a string, e.g. "1785816000000". */
  startTime: string;
  endTime: string;
  track: SessionTrack | null;
  speakers: ApiSpeaker[];
}

interface SessionsApiResponse {
  success: boolean;
  data: { sessions: ApiSession[] };
}

function toSession(raw: ApiSession): ScheduleSession {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    location: raw.location,
    sessionType: raw.sessionType,
    startTime: new Date(Number(raw.startTime)),
    endTime: new Date(Number(raw.endTime)),
    track: raw.track,
    speakers: raw.speakers.map((speaker) => ({
      id: speaker.id,
      name: [speaker.firstName, speaker.lastName].filter(Boolean).join(" "),
      title: speaker.title,
      photoUrl: speaker.photoUrl,
    })),
  };
}

async function getSessions(): Promise<ScheduleSession[]> {
  try {
    const res = await fetch(SESSIONS_API_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`Sessions API responded with ${res.status}`);
      return [];
    }
    const body: SessionsApiResponse = await res.json();
    return (body.data?.sessions ?? [])
      .map(toSession)
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  } catch (error) {
    console.error("Failed to fetch sessions:", error);
    return [];
  }
}

/** Sessions for the main event programme page. */
export async function getExpoSessions(): Promise<ScheduleSession[]> {
  const sessions = await getSessions();
  return sessions.filter((session) => session.track?.name === EXPO_TRACK_NAME);
}

/** Sessions for the conference programme page. Untracked sessions are
 *  excluded — they belong to neither schedule. */
export async function getConferenceSessions(): Promise<ScheduleSession[]> {
  const sessions = await getSessions();
  return sessions.filter(
    (session) => session.track !== null && session.track.name !== EXPO_TRACK_NAME
  );
}
