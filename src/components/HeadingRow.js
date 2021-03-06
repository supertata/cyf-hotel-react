import React from "react";

const HeadingRow = ({ sortBookings }) => {
  const columns = {
    id: "ID",
    title: "Title",
    firstName: "First name",
    surname: "Surname",
    email: "Email",
    roomId: "Room ID",
    checkInDate: "Check in date",
    checkOutDate: "Check out date",
    numOfNights: "# of nights"
  };

  return (
    <tr>
      {Object.entries(columns).map(([key, value]) => (
        <th scope="col" key={key} title={key} onClick={sortBookings}>
          {value}
        </th>
      ))}
    </tr>
  );
};

export default HeadingRow;
