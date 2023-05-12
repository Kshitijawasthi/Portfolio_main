import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello and welcome to my portfolio! My name is Kshitij Awasthi ❤️ I am
          passionate about creating effective website. I pride myself on being a
          strategic thinker who can identify opportunities and develop
          innovative solutions to complex problems.
        </p>

        <br />

        <p className="text-xl">
          In addition to my professional experience, I hold a Bachelor's degree
          in Information Technology from Veer bahadur Singh Purvanchal
          University Outside of work, I enjoy volunteering in my local community
          and spending time with my family. I believe that my diverse background
          and skillset make me a valuable asset to any software team. I am
          always looking for new challenges and opportunities to grow both
          personally and professionally. Thank you for taking the time to learn
          more about me, and I look forward to connecting with you soon.
        </p>
      </div>
    </div>
  );
};

export default About;
