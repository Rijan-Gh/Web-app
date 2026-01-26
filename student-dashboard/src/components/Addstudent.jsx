import React, { useState } from 'react';
import './Addstudent.css';

const Addstudent = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    year: '',
    sem: '',
    program: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.roll.trim() || !form.status) {
      alert("Please fill required fields: Name, Roll No, and Status");
      return;
    }
    onSave(form);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="roll">Roll No *</label>
            <label htmlFor="year">Year</label>

            <input
              type="text"
              id="roll"
              name="roll"
              value={form.roll}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
            />

            <label htmlFor="sem">Semester</label>
            <label htmlFor="program">Program</label>

            <input
              type="text"
              id="sem"
              name="sem"
              value={form.sem}
              onChange={handleChange}
            />

            <input
              type="text"
              id="program"
              name="program"
              value={form.program}
              onChange={handleChange}
            />
            
            <label htmlFor="status">Status *</label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstudent;