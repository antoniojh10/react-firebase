import React from 'react';

const LinkItem = ({ url, name, description }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">{url}</div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default LinkItem;
