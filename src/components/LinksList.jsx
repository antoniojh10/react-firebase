import React, { useState } from 'react';

// Components
import LinkForm from './LinkForm';
import LinkItem from './LinkItem';

const LinksList = () => {
  const [links, setLinks] = useState([]);

  const addTask = (values) => {
    setLinks([...links, values]);
  };

  return (
    <React.Fragment>
      <div className="col-5">
        <LinkForm on addOrEdit={addTask} />
      </div>
      <div className="col-7">
        <h1>Links</h1>
        {links.length === 0 ? (
          <p>No hay links</p>
        ) : (
          links.map(({ url, name, description }) => (
            <LinkItem
              key={url}
              name={name}
              url={url}
              description={description}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default LinksList;
