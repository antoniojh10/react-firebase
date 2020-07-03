import React from 'react';

const LinkItem = ({ id, url, name, description, deleteLink }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        {url}{' '}
        <button type="button" className="close" onClick={deleteLink}>
          <i className="material-icons">close</i>
        </button>
        <button type="button" className="close">
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
