"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScheduleSession } from "@/lib/getSessions";
import {
  formatEventDate,
  formatEventDayLabel,
  formatEventTime,
  getEventDayKey,
} from "@/lib/eventTime";
import SpeakerAvatar from "./SpeakerAvatar";

interface EventScheduleProps {
  heading: string;
  sessions: ScheduleSession[];
}

function EventSchedule({ heading, sessions }: EventScheduleProps) {
  const sessionsByDay = useMemo(() => {
    const grouped = new Map<string, ScheduleSession[]>();
    for (const session of sessions) {
      const dayKey = getEventDayKey(session.startTime);
      const day = grouped.get(dayKey);
      if (day) {
        day.push(session);
      } else {
        grouped.set(dayKey, [session]);
      }
    }
    return grouped;
  }, [sessions]);

  const days = useMemo(
    () => Array.from(sessionsByDay.keys()).sort(),
    [sessionsByDay]
  );
  const [selectedDay, setSelectedDay] = useState(days[0] ?? "");
  const selectedSessions = sessionsByDay.get(selectedDay) ?? [];

  return (
    <section className="flex items-center justify-center w-full h-fit py-16 bg-slate-100">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-8">
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-poppins font-bold text-black">
            {heading}
          </h2>
        </div>

        {days.length === 0 ? (
          <p>No schedule available yet. Please check back soon.</p>
        ) : (
          <div className="w-full h-full flex flex-col gap-8 bg-white">
            <div className="flex items-center justify-center bg-slate-100 px-8 flex-wrap gap-2">
              {days.map((day) => (
                <Button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={
                    selectedDay === day
                      ? "bg-expoOrange rounded-none py-8 p-12 hover:bg-expoOrange transition-all duration-200"
                      : "bg-expoOrange/70 hover:bg-expoOrange rounded-none py-8 p-12 transition-all duration-200"
                  }
                >
                  {formatEventDayLabel(sessionsByDay.get(day)![0].startTime)}
                </Button>
              ))}
            </div>

            <Accordion
              type="single"
              className="w-full flex flex-col gap-6 px-8 pb-8"
              collapsible
            >
              {selectedSessions.map((session) => (
                <SessionItem key={session.id} session={session} />
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
}

function SessionItem({ session }: { session: ScheduleSession }) {
  const { id, title, description, location, startTime, endTime, track, speakers } =
    session;
  const hasDetails = Boolean(description) || speakers.length > 0;

  return (
    <AccordionItem value={id} className="border-none" disabled={!hasDetails}>
      <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
        <div className="flex gap-2 lg:gap-8 flex-wrap text-left items-center">
          <div className="font-rubik font-light text-sm sm:text-base">
            {formatEventDate(startTime)}
          </div>
          <div className="font-rubik font-light text-sm sm:text-base">
            {formatEventTime(startTime)} – {formatEventTime(endTime)}
          </div>
          <div className="flex flex-col gap-2 text-left">
            <h3 className="font-semibold">{title}</h3>
            <h3 className="font-bold text-expoOrange">{location}</h3>
          </div>
          {track && (
            <span
              className="text-white text-xs font-rubik font-medium rounded-full px-3 py-1"
              style={{ backgroundColor: track.color }}
            >
              {track.name}
            </span>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
        {description && <div>{description}</div>}
        {speakers.length > 0 && (
          <div className="flex gap-4 items-start justify-start flex-col">
            <p className="font-semibold">Speakers:</p>
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="h-fit flex flex-wrap items-center bg-slate-100 rounded-lg p-2 px-4 gap-4"
              >
                <SpeakerAvatar name={speaker.name} photoUrl={speaker.photoUrl} />
                <div className="font-rubik flex flex-col items-start justify-start">
                  <p className="text-black text-base font-normal">
                    {speaker.name}
                  </p>
                  {speaker.title && (
                    <p className="text-black/50 text-sm font-medium">
                      {speaker.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default EventSchedule;
