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
  const [currentLink, setCurrentLink] = useState('');

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

  const addOrEditLink = async (linkObject) => {
    if (currentLink === '') {
      await db.collection('links').doc().set(linkObject);
      toast(`Link to ${linkObject.name} added!`, {
        type: 'success',
        hideProgressBar: true,
      });
    } else {
      await db
        .collection('links')
        .doc(currentLink)
        .update(linkObject);
      toast(`Link to ${linkObject.name} updated!`, {
        type: 'info',
        hideProgressBar: true,
      });
    }
    setCurrentLink('');
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

  const handleCurrentLink = (id) => {
    setCurrentLink(id);
  };

  return (
    <React.Fragment>
      <div className="col-12 col-lg-5">
        <LinkForm {...{ addOrEditLink, currentLink, links }} />
      </div>
      <div className="col d-flex flex-column">
        <h1 className="text-center">Links</h1>
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
              setCurrentLink={handleCurrentLink.bind(this, id)}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default LinksList;
