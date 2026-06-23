export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "Sep 14–16, 2026",
    time: "09:00 AM – 06:00 PM",
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event2.png",
    slug: "nextjs-conf-2026",
    location: "Online & San Francisco, CA",
    date: "Oct 7, 2026",
    time: "10:00 AM – 04:00 PM PDT",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event3.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "Nov 2–4, 2026",
    time: "09:30 AM – 05:30 PM",
  },
  {
    title: "HackMIT — Global Edition",
    image: "/images/event4.png",
    slug: "hackmit-global-2026",
    location: "Cambridge, MA, USA",
    date: "Dec 3–5, 2026",
    time: "04:00 PM – 08:00 PM",
  },
  {
    title: "AWS re:Invent (Dev Track)",
    image: "/images/event5.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, NV, USA",
    date: "Nov 28 – Dec 2, 2026",
    time: "08:30 AM – 06:00 PM",
  },
  {
    title: "Local Dev Meetup — City Hack",
    image: "/images/event6.png",
    slug: "city-hack-2026",
    location: "Austin, TX, USA",
    date: "Aug 21, 2026",
    time: "06:00 PM – 09:00 PM",
  },
  {
    title: "Featured: DevEvent Launch Night",
    image: "/images/event-full.png",
    slug: "devevent-launch-2026",
    location: "Remote",
    date: "Jul 10, 2026",
    time: "07:00 PM – 09:00 PM UTC",
  },
];

export default events;
