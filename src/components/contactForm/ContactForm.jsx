import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
  <form onSubmit= {handleSubmit}>
    <div>
      <label htmlFor="name"> Name: </label> 
      <input 
      id="name"
      type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />
    </div>

    <div>
      <label htmlFor="phone"> Phone: </label> 
      <input 
      id="phone"
      type="tel"
      value={phone}
      onChange= {(e) => setPhone(e.target.value)}
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      required
      /> 
    </div>

    <div>
      <label htmlFor="email"> Email: </label> 
      <input 
      id="email"
      type="email"
      value={email}
      onChange= {(e) => setEmail(e.target.value)}
      required
      />
    </div> 

      <button type="submit"> Submit: </button>    
    </form>
  );
};

