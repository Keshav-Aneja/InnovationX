import ClipBox from "../components/ClipBox";
import Timeline from "../components/Timeline";
const Feb04 = [
  "Reporting & Registration: Feb 04th, 8:00PM - 10:00PM",
  "Opening Ceremony: Feb 04th, 10:00PM - 10:45PM",
  "Tracks & Ideation: Feb 04th, 11:00PM - 01:00AM",
];

const Feb05 = [
  "Review 1: Feb 05th, 01:00AM - 03:00AM",
  "Filler Time: Feb 05th, 03:00AM - 04:00AM",
  "Phase 2 (Implementation Time): Feb 05th, 04:00AM - 07:00AM",
  "Breakfast: Feb 05th, 07:00AM - 08:30AM",
  "Review 2 (No elimination): Feb 05th, 08:30AM - 10:30AM",
  "Speaker Session: Feb 05th, 11:00AM - 12:30PM",
  "Lunch Break: Feb 05th, 12:30PM - 02:00PM",
  "Phase 2 Continued: Feb 05th, 02:00PM - 05:00PM",
  "Review 3 (Elimination Round): Feb 05th, 05:00PM - 07:00PM",
  "Dinner Break: Feb 05th, 07:30PM - 08:30PM",
  "Phase 3: Feb 05th, 09:00PM - 01:00AM",
];

const Feb06 = [
  "Filler Time: Feb 06th, 01:00AM - 02:00AM",
  "Phase 3 Continued: Feb 06th, 02:00AM - 06:30AM",
  "Breakfast: Feb 06th, 06:30AM - 07:30AM",
  "Review 4 (Final Review): Feb 06th, 08:00AM - 10:00AM",
];

const Itenary = () => {
  return (
    <div className="w-full py-12 md:py-20 relative">
      <img
        src="/images/floater3.webp"
        alt=""
        className="w-28 md:w-72 absolute top-4 md:top-[20%] right-2 md:left-4 floater"
      />
      <img
        src="/images/floater1.webp"
        alt=""
        className="w-28 md:w-72 absolute -bottom-12 md:bottom-12 right-4 floater2"
      />
      <div className="--container w-[90%] md:w-[80%] mx-auto flex flex-col text-white gap-4 md:gap-8">
        <ClipBox>
          <h1 className="text-4xl md:text-8xl font-grotesk font-medium">
            ITINERARY
          </h1>
        </ClipBox>
        <div className="font-grotesk text-xs md:text-sm flex flex-col md:flex-row md:justify-between">
          <span className="md:hidden block">
            Here is the detailed Itinerary for the best event that you have ever
            experienced
          </span>
          <span className="hidden md:block">
            Here is the detailed Itinerary for the
            <br />
            best event that you have ever
            <br />
            experienced
          </span>
          <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
            FOR 04<sup>th</sup> Feb
          </div>
        </div>
        <Timeline sampleData={Feb04} />
        <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
          FOR 05<sup>th</sup> Feb
        </div>
        <Timeline sampleData={Feb05} />
        <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
          FOR 06<sup>th</sup> Feb
        </div>
        <Timeline sampleData={Feb06} />
      </div>
    </div>
  );
};

export default Itenary;
