
import React from "react";
import './Addstudent.css';
const Addstudent = () => {
    return (
      <>
        <div className="Add-section">
            <h2>Add New Student</h2>

            <div className="input-section">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="roll">Roll No</label>
                <label htmlFor="year">Year</label>
                
                <input type="text" id="roll" />
                <input type="text" id="year" />
                
                <label htmlFor="semester">Semester</label>
                <label htmlFor="program">Program</label>
                
                <input type="text" id="semester" />
                <input type="text" id="program" />
                
                <label htmlFor="status">Status</label>
                <select id="status">
                    <option value="" disabled selected>Select an option</option>
                    <option>Pass</option>
                    <option>Fail</option>
                </select>
    
            </div>
            
            <div className="btn">
                <button type="button" class="reset-btn">Cancel</button>
                <button type="button" class="add-btn">Add Student</button>
            </div>

        </div>
      </>
    );
  };
  
  export default Addstudent;
  