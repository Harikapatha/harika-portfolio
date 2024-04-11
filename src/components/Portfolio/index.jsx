import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'JSQuiz',
      description: 'JS',
      link: "https://harikapatha.github.io/javascript-quiz",
      repo: "https://github.com/Harikapatha/javascript-quiz"
    },
    {
      name: 'seasonsAdventureGame',
      description: 'HTML/CSS/JS',
      link: "https://lucyjihyeon.github.io/seasons-adventure-game/index.html",
      repo: "https://github.com/lucyJihyeon/seasons-adventure-game"
    },
    {
      name: 'beatByBeat',
      description: 'MVC',
      link: "https://beatbybeatv2-d6c2b024a00e.herokuapp.com",
      repo: "https://github.com/charleswt/beat-by-beat"
    },
    {
      name: 'weatherDashboard',
      description: 'HTML/CSS/JS',
      link: "https://harikapatha.github.io/weather-dashboard",
      repo: "https://github.com/Harikapatha/weather-dashboard"
    },
    {
      name: 'noteTaker',
      description: 'HTML/CSS/JS',
      link: "https://note-taker-1fi9.onrender.com ",
      repo: " https://github.com/Harikapatha/Note-Taker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
