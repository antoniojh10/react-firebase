import React, { useState, useEffect } from 'react';

// Modules
import { toast } from 'react-toastify';

// Components
import LinkForm from './LinkForm';
import LinkItem from './LinkItem';

// Firestore
import { db } from '../firebase';

const LinksList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    db.collection('links').onSnapshot((snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        const oneLink = { id: doc.id, ...doc.data() };
        docs.push(oneLink);
      });
      setLinks(docs);
    });
  };

  const addTask = async (linkObject) => {
    await db.collection('links').doc().set(linkObject);
    toast(`Link to ${linkObject.name} added!`, {
      type: 'success',
      hideProgressBar: true,
    });
  };

  const handleDelete = (id) => {
    if (
      window.confirm('Are you sure you want to delete this link?')
    ) {
      db.collection('links').doc(id).delete();

      const docs = links.filter((doc) => doc.id !== id);
      setLinks(docs);
    }
  };

  return (
    <React.Fragment>
      <div className="col-7 col-lg-5">
        <LinkForm on addOrEdit={addTask} />
      </div>
      <div className="col">
        <h1>Links</h1>
        {links.length === 0 ? (
          <p>No hay links</p>
        ) : (
          links.map(({ id, url, name, description }) => (
            <LinkItem
              key={id}
              name={name}
              url={url}
              description={description}
              deleteLink={handleDelete.bind(this, id)}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default LinksList;
