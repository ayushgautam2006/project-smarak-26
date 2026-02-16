import Slider from "@/components/slider";
import { EventsHero, EventsGrid, Event } from "@/components/events";

const events: Event[] = [
    {
        id: 1,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 2,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 3,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 4,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 5,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 6,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
];

const workshops: Event[] = [
    {
        id: 1,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 2,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 3,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 4,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 5,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 6,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[url('/images/bg.png')]  bg-center overflow-hidden">
            <EventsHero />
            <EventsGrid title="Flagship Events" events={events} />
            <Slider />
            <div className="mt-20"></div>
            <EventsGrid title="Workshop & Seminar" events={workshops} />
            <Slider />
        </div>
    );
}
