import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
  <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="title"> Appointment Title:</label>
    <input 
    id="title"
    type="text"
    onChange= {(e) => setTitle(e.target.value)}
    />

    <label htmlFor="date"> Appointment Date:</label>
    <input 
    id="date"
    value={date}
    type="date"
    onChange= {(e) => setDate(e.target.value)}
    min={getTodayString()}
    required
    />

    <label htmlFor="time"> Appointment Time:</label>
    <input 
    id="time"
    type="time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
    required
    />
  </div>
  <div>
  <label htmlFor="contact"> Contact: </label>
    <ContactPicker contacts={contacts} />
  </div>
    <button type="submit"> Add Appointment </button>
    </form>
  );
};
