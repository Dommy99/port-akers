import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Third-Party APIs: Work Day Scheduler',
      category: 'portfolio',
      description:
        'The website uses local storage and time to help users keep track of events on a average workday.'
    },
    {
      name: 'Server-Side APIs: Weather Dashboard',
      category: 'portfolio',
      description:
        "This app was a requirment during the bootcamp it shows my understanding of local storage, DOM manipulation, and API usage. It's also a cool funtional weather application"
    },
    {
      name: 'G.O.A.T. Scale',
      category: 'portfolio',
      description:
        'This was a group project to make a fantasy football game called G.O.A.T Scale. A place where you can still keep the football season alive!! Test your knowledge on fantasy football!!!'
    },
    {
      name: 'Node.js: Professional README Generator',
      category: 'portfolio',
      description:
        'This application will generate a README.md after the user imputs their data into command-line using Node.js.'
    },
    {
      name: 'Object-Oriented Programming: Team Profile Generator',
      category: 'portfolio',
      description:
        'This application will generate cards containing information about employees after the user imputs their data into command-line using Node.js. The html is generated using regex and data input from inquirer.'
    },
    {
      name: 'Express.js: Note Taker',
      category: 'portfolio',
      description:
        'The Note Taker Pro application uses a database to manage and store notes.'
    },
    {
      name: 'SQL: Employee Tracker',
      category: 'portfolio',
      description:
        'With API routes, GET, POST, PUT, Delete, and a database this application can use the Command-line to look up and add data for employees and the departments they work in.'
    },
    {
      name: 'Object-Relational Mapping (ORM): E-commerce Back End',
      category: 'portfolio',
      description:
        'Using GET, POST, PUT, Delete, and a database this app can use a database to manipulate and display data.'
    },
    {
      name: 'Water Color 💧',
      category: 'portfolio',
      description:
        "Water Color is a platform that allows users to publish their creativity through our 'Graffiti Board' and be able to interact with other users postson a slick UI."
    },
    {
      name: 'Cat green eyes',
      category: 'In-progress',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green parrot',
      category: 'In-progress',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Yellow macaw',
      category: 'In-progress',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pug smile',
      category: 'In-progress',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pancakes',
      category: 'resume',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burrito',
      category: 'resume',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Scallop pasta',
      category: 'resume',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burger',
      category: 'resume',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Fruit bowl',
      category: 'resume',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
