import ContentBox from "../components/ContentBox";

const About = () => {
  return (
    <div className="w-full py-20">
      <div className="--container w-[90%] md:w-[80%] bg-gradient-to-b from-[rgba(0,0,0,0.2)]  to-[rgba(255,255,255,0.23)] mx-auto flex flex-col md:flex-row md:justify-between md:items-center  gap-8 py-4 md:py-8 px-2 md:px-20 rounded-[20px] ">
        {/* <div className="hidden md:flex w-[40%]  flex-col gap-4">
          <img
            src="/images/about.png"
            alt=""
            className="w-full rounded-[50px]"
          />
          <div className="--pop-up flex flex-col gap-2">
            <div className="info px-2 w-[70%] py-2 bg-white rounded-lg rounded-br-none text-[0.5rem] self-end">
              Brace yourself for an unforgettable 36-hour hackathon experience.
              No boundaries, just innovation. Join now and ignite your
              creativity!
            </div>
            <div className="px-4 py-2 bg-white rounded-lg w-fit flex items-center justify-center font-medium text-[0.6rem] self-end">
              InnovationX
            </div>
          </div>
        </div> */}
        <ContentBox
          heading="About InnovationX 2.0"
          description={
            "Join InnovationX 2.0, a thrilling 36-hour hackathon hosted by Mozilla Firefox Club VIT in collaboration with the Advertising and Marketing Club. Taking place from 4th February at 8:00 PM to 6th February at 8:00 AM, this event blends creativity and technology to tackle real-world challenges. Participants, from seasoned developers to beginners, will undergo four expert reviews and get the chance to pitch ideas, innovate, and collaborate in a vibrant community. Be part of Yantra: Innovation Week and make a difference!"
          }
        />
      </div>
    </div>
  );
};

export default About;
