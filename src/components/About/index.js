import React from 'react';
import coverImage from '../../assets/cover/Dominique Akers.JPG';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">A little bit of my story.</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
          Born and raised in Philadelphia, PA; I joined the Army in 2019 and I've been around all sorts of people from all walks of life.
          From a young age I've been interested in pushing myself mentally and physically. The military forfilled some of those needs but I was missing the mental challenge. I found that in coding and I've been motivated to master it ever sense. 
        </p>
      </div>
    </section>
  );
}

export default About;
