import React from 'react';
import './Student.css'; 

const Student = () => {
    return (
        <form>
            <h3>STUDENT REGISTRATION</h3><br></br>
            <div className="input-group">
                
                <div>
                    <label htmlFor="studentName">Student Name :</label>
                    <input type="text" id="studentName" name="studentName" />
                </div>

                <div>
                    <label htmlFor="fatherName">Father's Name :</label>
                    <input type="text" id="fatherName" name="fatherName" />
                </div>

                <div>
                    <label htmlFor="aadharNumber">Aadhar Number :</label>
                    <input type="number" id="aadharNumber" name="aadharNumber" />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="contactNumber">Contact Number :</label>
                    <input type="number" id="contactNumber" name="contactNumber" />
                </div>

                <div>
                    <label htmlFor="village">Village :</label>
                    <input type="text" id="village" name="village" />
                </div>

                <div>
                    <label htmlFor="JoiningDate">Join Date :</label>
                    <input type="date" id="JoiningDate" name="JoiningDate" />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="allotedRoom">Room Number :</label>
                    <input type="number" id="allotedRoom" name="allotedRoom" />
                </div>

                <div>
                    <label htmlFor="parentContact">Parent Contact Number :</label>
                    <input type="text" id="parentContact" name="parentContact" minlength="10" maxlength="10" pattern="\d{10}"  />
                </div>
            </div>

            <div >
                <button className = "submitButton" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Student;
