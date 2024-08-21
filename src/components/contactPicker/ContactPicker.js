import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <div>
      <select 
      name={name}
      value= {value}
      onChange={onChange} 
      />
      <option value=""> No Contact Selected </option> default
      {contacts.map((contact,index) => (
        <option key={index} value={contact.name}>
        {contact.name}
        </option>
    ))}
  </div>
  );
};