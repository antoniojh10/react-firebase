import React, { useState, useEffect } from 'react';

// Firestore
import { db } from '../firebase';

const LinkForm = ({ addOrEditLink, currentLink }) => {
  const initialState = {
    url: '',
    name: '',
    description: '',
  };

  const [values, setValues] = useState({ ...initialState });

  useEffect(() => {
    console.log(values);
    if (currentLink === '') {
      setValues({ ...initialState });
    } else {
      getLinkById(currentLink);
    }
  }, [currentLink]);

  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setValues({ ...doc.data() });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addOrEditLink(values);
    setValues({ ...initialState });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validationSubmit = () => {
    if (values.url !== '' && values.name !== '') {
      if (validateURL(values.url)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const validateURL = (str) => {
    return /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim.test(
      str,
    );
  };

  return (
    <form className="card mb-5" onSubmit={handleSubmit}>
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
            value={values.url}
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
            value={values.name}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Write a description"
            name="description"
            rows="3"
            onChange={handleInputChange}
            value={values.description}
          ></textarea>
        </div>
        {validationSubmit() ? (
          <button className="btn btn-block btn-primary">
            {values.id === '' ? 'Save' : 'Update'}
          </button>
        ) : (
          <button className="btn btn-block btn-primary" disabled>
            {values.id === '' ? 'Save' : 'Update'}
          </button>
        )}
      </div>
    </form>
  );
};

export default LinkForm;
