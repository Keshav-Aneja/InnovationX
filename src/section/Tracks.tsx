import ClipBox from "../components/ClipBox";
import TrackCard from "../components/TrackCard";
const trackData = [
  {
    img: "o.png",
    title: "Open Innovation",
    description:
      "Ignite your creativity to develop transformative solutions in any domain—AI, cybersecurity, fintech, healthcare, and beyond. Tackle global challenges, pioneer bold ideas, and push the boundaries of what's possible. Whether solving critical issues or envisioning the extraordinary, innovate fearlessly and leave a lasting impact.",
  },
  {
    img: "a.webp",
    title: "AI for Intelligent Tutoring",
    description:
      "Transform education by creating innovative tutoring systems that personalize learning, adapt to diverse needs, and deliver impactful feedback. Design interactive tools that spark curiosity, boost engagement, and empower learners worldwide. Build solutions that make education accessible, inclusive, and effective, ensuring every student has the opportunity to thrive.",
  },
  {
    img: "z.png",
    title: "AI-Driven Cybercrime Prediction and Policing",
    description:
      "Create groundbreaking solutions to predict, track, and prevent cyber threats. Design tools for real-time detection, pattern analysis, and proactive threat prevention. Empower smarter investigations and bolster digital defenses to outpace cybercriminals. Build a secure digital future where technology protects and justice prevails.",
  },
  {
    img: "c.webp",
    title: "AI for Digital Financial Security",
    description:
      "Create innovative solutions to combat fraud, assess risks, and prevent identity theft. Safeguard online transactions, protect against data breaches, and ensure seamless financial operations. Empower the digital economy with smarter tools and real-time insights, building a future where trust and security drive progress.",
  },
  {
    img: "d.webp",
    title: "Cyberbullying and Harassment Detection",
    description:
      "Create innovative solutions to combat harmful online behavior and foster positive engagement. Develop tools for detecting and preventing cyberbullying, flagging harmful content, and enabling automated reporting. Empower inclusive, respectful digital spaces where technology protects, supports, and uplifts every user.",
  },
  {
    img: "y.png",
    title: "AI for Learning Platforms",
    description:
      "Reimagine education by creating innovative platforms, tools, and experiences that empower learners and educators worldwide. Address skill gaps, enhance engagement, and optimize retention using technology and innovative approaches. Build scalable, inclusive, and impactful solutions to transform how knowledge is shared, accessed, and retained for generations to come.",
  },
  {
    img: "f.webp",
    title: "AI-Powered Identity Theft Protection",
    description:
      "Develop cutting-edge solutions to prevent, detect, and combat identity theft using advanced technologies. Create tools for real-time monitoring, fraud detection, and secure identity verification. Empower individuals and organizations with smarter, proactive defenses to safeguard personal data and build a future of trust and digital security.",
  },
  {
    img: "p.png",
    title: "AI-Based Cyber Literacy",
    description:
      "Design innovative tools to empower users with the skills to navigate the digital world safely. Build interactive platforms, gamified learning experiences, or adaptive training programs to boost cybersecurity awareness. Create accessible, engaging solutions that bridge knowledge gaps and foster a confident, cyber-smart society. Secure the future through education.",
  },
  {
    img: "q.png",
    title: "AI for Securing IoT Devices",
    description:
      "Develop innovative solutions to protect IoT ecosystems from vulnerabilities and unauthorized access. Design tools for real-time threat detection, automated defenses, and robust security across smart homes, industries, and cities. Safeguard our interconnected world and build a future where IoT devices are resilient, reliable, and secure.",
  },
];

const Tracks = () => {
  return (
    <div className="py-12 w-full">
      <div className="--container w-[90%] md:w-[80%] mx-auto flex flex-col text-white gap-4 md:gap-8">
        <ClipBox>
          <h1 className="text-4xl md:text-8xl font-grotesk font-medium ">
            TRACKS
          </h1>
        </ClipBox>
        <div className="font-grotesk text-xs md:text-sm flex flex-col md:flex-row md:justify-between">
          <span className="block md:hidden">
            Here is the clues to guarantee success in this quest
          </span>
          <span className="hidden md:block">
            Here is the clues to guarantee
            <br />
            success in this quest
          </span>
          <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
            FOR EXECUTION
          </div>
        </div>
      </div>
      <div className="--tracks-card w-[90%] md:w-[80%] mx-auto py-12 flex justify-center md:justify-start gap-[3.33%] flex-wrap">
        {trackData.map((track, i) => (
          <TrackCard
            title={track.title}
            img={track.img}
            description={track.description}
            key={i}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
