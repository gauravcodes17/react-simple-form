import React from "react";

const UserRecords = ({ records }) => {
  return (
    <>
      <div className="table-data">
        <h1>- Users Data -</h1>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => {
              const { username, email, phone, age, country } = record;

              return (
                <>
                  <tr key={i}>
                    <td
                      data-label="S.No"
                      style={{
                        color: "red",
                        fontWeight: "600",
                        fontSize: "19px",
                      }}
                    >
                      {i + 1}
                    </td>
                    <td data-label="Name">{username}</td>
                    <td data-label="Email">{email}</td>
                    <td data-label="Phone">{phone}</td>
                    <td data-label="Age">{age}</td>
                    <td data-label="Country">{country}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserRecords;
