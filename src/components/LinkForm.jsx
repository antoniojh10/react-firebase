import React, { useState } from 'react';

const LinkForm = ({ addOrEdit }) => {
  const initialState = {
    url: '',
    name: '',
    description: '',
  };

  const [values, setValues] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    addOrEdit(values);
  };

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3 className="card-header">Add Your Link</h3>
      <div className="card-body">
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">insert_link</i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="https://someurl.com"
            name="url"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Website Name"
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Write a description"
            name="description"
            rows="10"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button className="btn btn-block btn-primary">Save</button>
      </div>
    </form>
  );
};

export default LinkForm;
