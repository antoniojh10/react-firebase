import React from 'react';

const LinkItem = ({
  url,
  name,
  description,
  deleteLink,
  setCurrentLink,
}) => {
  return (
    <div className="card mb-3 link-item">
      <div className="card-header">
        {url}{' '}
        <button type="button" className="close" onClick={deleteLink}>
          <i className="material-icons">close</i>
        </button>
        <button
          type="button"
          className="close"
          onClick={setCurrentLink}
        >
          <i className="material-icons">create</i>
        </button>
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default LinkItem;
