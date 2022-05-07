import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Imagecards from './components/Image-cards';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Photos of finshed projects',
    },
    { name: 'in-progress', description: 'Portraits of people in my life' },
    { name: 'resume', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <Imagecards>
              
            </Imagecards>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Footer>
      </main>
    </div>
  );
}

export default App;
