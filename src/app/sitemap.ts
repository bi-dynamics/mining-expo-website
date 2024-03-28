import { MetadataRoute } from "next";
import { getSpeakers } from "@/lib/getSpeakers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const speakers = await getSpeakers();
  const speakerEntries: MetadataRoute.Sitemap = speakers.map(({ id }) => ({
    url: `https://miningexponamibia.com/conference-programme/speakers-list/${id}`,
    changeFrequency: "yearly",
  }));
  return [
    {
      url: "https://miningexponamibia.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://miningexponamibia.com/main-event-programme",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://miningexponamibia.com/main-event-programme/registration-info",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://miningexponamibia.com/main-event-programme/floor-plans",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://miningexponamibia.com/main-event-programme/exhibitors",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },

    {
      url: "https://miningexponamibia.com/conference-programme",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://miningexponamibia.com/conference-programme/speakers-list",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://miningexponamibia.com/suppliers-platform",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://miningexponamibia.com/suppliers-platform/b2b",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://miningexponamibia.com/past-presentations",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://miningexponamibia.com/past-presentations/2023-presentations",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://miningexponamibia.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...speakerEntries,
  ];
}
