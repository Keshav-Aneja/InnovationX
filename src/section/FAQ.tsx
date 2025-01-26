import PrimaryButton from "../components/PrimaryButton";
import FAQItem from "../components/FAQItem";
const faqData = [
  {
    question: "How many participants per team?",
    answer: "No. of team members can vary from 2 to 6.",
  },
  {
    question: "How many reviews?",
    answer: "A total of 4 Reviews will be conducted.",
  },
  {
    question: "Who Can Participate?",
    answer:
      "Whether you are a developer, designer, or ideator, InnovationX 2.0 is open to innovators of all skill levels. Bring your passion for AI and sustainability, and let's collaborate to create impactful solutions.",
  },
  {
    question: "What's the venue for the hackathon?",
    answer: "Saorjni Naidu Gallery, SJT",
  },
  {
    question: "Will participants be allowed to leave the venue during night?",
    answer: "Participants have to stay in the event hall during the night.",
  },
];
const FAQ = () => {
  return (
    <div className="w-full">
      <div className="container w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div className="w-full md:w-[50%] text-white font-grotesk flex flex-col gap-4">
          <h1 className="text-xl md:text-4xl">
            These are some questions that are often asked.
          </h1>
          <span className="text-sm">
            Do you have another question that is not listed here? Or do you want
            to ask us about anything?
          </span>
          <PrimaryButton
            label="OUR WEBSITE"
            link="https://www.mozillavit.in/"
          />
        </div>
        <div className="w-full md:w-[50%]">
          {faqData.map((faq, i) => (
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              index={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
