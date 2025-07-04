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
        <h1>Socials</h1>
        <p>Links to my social media...</p>
      </section>

      <section id="blog">
        <h1>Blog</h1>
        <p>Get in touch!</p>
      </section>
    </div>
  );
}

export default App;