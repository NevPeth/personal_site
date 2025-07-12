import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  const projects = [
    {
      title: 'Wordle Solver',
      description: 'A simple wordle solver that can do the wordle without you having to input any of the words, just calibrate it for the page size and it does the rest!',
      image: `${process.env.PUBLIC_URL}/img/wordle-logo.png`,
      link: "https://github.com/NevPeth/wordle-solver",
      languages: ['Python']
    },
    {
      title: 'Minecraft Mod',
      description: 'A simple minecraft mod that brings back old wool colors to modern minecraft',
      image: `${process.env.PUBLIC_URL}/img/minecraft-mod-icon.png`,
      link: "https://github.com/NevPeth/indev-wool-1.21.1",
      languages: ['Java']
    }
  ];

  return (
    <div className="App-container">
      <section id="about-me" className="about-me">
          <img
            src={process.env.PUBLIC_URL + "/img/iLikeApplejuice.png"}
            alt="Profile Pic"
            className="profile-pic"
          />
          <div className="about-me-text">
            Hello! My name is Neville and I am a current Computer Science major at the University of Massachusetts Amherst!
            When I'm not coding or solving logic problems I like to play Dungeons & Dragons, Minecraft, and party games with my friends!
            My other hobbies include making balloon animals, crocheting and diamond painting!
        </div>
      </section>

      <section id="projects">
        <div className="projects-header">Projects</div>
        <br/>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      <section id="socials">
        <div class="socials">

          <a href="https://github.com/NevPeth"
          target="_blank" 
          rel="noopener noreferrer">
          <img
              src={process.env.PUBLIC_URL + "/img/github-icon.png"}
              alt="Github Icon"
              className="social-icon"
            /></a>


          <a href="https://www.linkedin.com/in/neville-pethani-1962a3283/"
          target="_blank" 
          rel="noopener noreferrer">
          <img
              src={process.env.PUBLIC_URL + "/img/linkedin-icon.png"}
              alt="Linkedin Icon"
              className="social-icon"
            /></a>

          <a href="https://www.instagram.com/nevillethedev/"
          target="_blank" 
          rel="noopener noreferrer">
          <img
              src={process.env.PUBLIC_URL + "/img/instagram-icon.png"}
              alt="Instagram Icon"
              className="social-icon"
            /></a>
          </div>
      </section>
    </div>
  );
}

export default App;