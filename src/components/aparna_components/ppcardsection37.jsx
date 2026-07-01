import React from "react";
import PpCard38 from "./ppcard38";

const styles = {
  portfolioList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
};

const PpCardSection37 = () => {
  const projects = [
    {
      title: "Brand Campaign Video",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
      description:
        "Created a 60-second promotional video for a tech startup featuring dynamic transitions and motion graphics.",
      date: "March 2025",
      tags: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    },
    {
      title: "Wedding Highlight Reel",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
      description:
        "Edited a cinematic wedding video with color grading and storytelling.",
      date: "February 2025",
      tags: ["Final Cut Pro", "Color Finale"],
    },
    {
      title: "Product Demo Video",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
      description:
        "Professional product showcase video with motion graphics, screen recordings and promotional storytelling.",
      date: "January 2025",
      tags: ["Premiere Pro", "After Effects"],
    },
    {
      title: "YouTube Channel Intro",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      description:
        "Animated intro with 3D motion design and sound sync.",
      date: "December 2025",
      tags: ["After Effects", "Cinema 4D"],
    },
  ];

  return (
    <div style={styles.portfolioList}>
      {projects.map((project, index) => (
        <PpCard38
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          date={project.date}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

export default PpCardSection37;
