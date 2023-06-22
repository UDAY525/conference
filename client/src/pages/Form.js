import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import "./Form.css";

function Form() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [template, setTemplate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleTemplateNumberChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      title,
      email,
      phone,
      template,
    });
    try {
      const res = await axios.post(`/api/v1/confernce/register`, {
        title,
        email,
        phone,
        template,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="templateNumber">Template Number:</label>
          <input
            type="number"
            id="templateNumber"
            name="templateNumber"
            value={template}
            onChange={handleTemplateNumberChange}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default Form;
