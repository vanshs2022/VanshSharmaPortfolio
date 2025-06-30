import React from "react";

const Description = ({ index }) => {
  const content = [
    {
      Title: "Steganography Tool",
      Description:
        "Built using Python and Flask for backend logic and routing.",
    },
    {
      Title: "Data Structures",
      Description:
        "Solved DSA problems using Java in competitive programming and academic courses.",
    },
    {
      Title: "CI4 Admin Interface",
      Description:
        "Used HTML in CI4-based pages during internship and also during starting of development.",
    },
    {
      Title: "CI4 Admin Interface",
      Description:
        "Used JavaScript for client-side interactivity in CI4-based admin interface and also during starting of development.",
    },
    {
      Title: "Travel Website",
      Description:
        "Built booking site using React, also used in internship frontend.",
    },
    {
      Title: "Visa Application UI",
      Description:
        "Styled frontend using Tailwind CSS for responsive and clean layout.",
    },
    {
      Title: "Version Control",
      Description:
        "Used Git extensively in all projects for version control and collaboration.",
    },
    {
      Title: "Unicolab Backend",
      Description:
        "Node.js handled APIs for student collaboration project 'Unicolab'.",
    },
    {
      Title: "CI4 Backend",
      Description:
        "Integrated CodeIgniter 4 for structured and efficient PHP backend development.",
    },
    {
      Title: "Unicolab Database",
      Description:
        "MongoDB used for storing user profiles and messages in Unicolab.",
    },
    {
      Title: "Visa App Database",
      Description:
        "MySQL was used to manage data in visa application platform.",
    },
    {
      Title: "Unicolab Server",
      Description:
        "Express.js powered API routing and middleware in Unicolab backend.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center mr-16 ">
      <p className="font-bold text-white text-4xl mb-4">
        {content[index].Title}
      </p>
      <p className="font-normal text-white text-m">
        {content[index].Description}
      </p>
    </div>
  );
};

export default Description;
