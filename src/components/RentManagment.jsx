import React from "react";

export const RentManagment = () => {
  return (
    <form>
      <h3>RENT MANAGMENT</h3>
      <br></br>
      <div className="input-group">
        <div>
          <label htmlFor="studentName">Student Name :</label>
          <input type="text" id="studentName" name="studentName" />
        </div>

        <div>
          <label htmlFor="rentType">Rent Type:</label>
          <select
            id="rentType"
            name="rentType"
            style={{
              width: "100%",
              padding: "5px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select</option>{" "}
            <option value="library">Library</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div>
          <label htmlFor="rentDate">Date :</label>
          <input type="month" id="rentDate" name="rentDate" />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="paymentMode">Payment Mode :</label>
          <select
            id="paymentMode"
            name="paymentMode"
            style={{
              width: "100%",
              padding: "5px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select</option>
            <option value="cash">CASH</option>
            <option value="online">ONLINE</option>
          </select>
        </div>
      </div>

      <div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
