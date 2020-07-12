import React from "react";

const TouristInfoCards = () => {
  let TouristInfo = [
    {
      link: "https://peoplemakeglasgow.com",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      summary: "Hello there"
    },
    {
      link: "https://visitmanchester.com",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      summary: "Hello there"
    },
    {
      link: "https://visitlondon.com",
      image:
        "https://images.unsplash.com/photo-1522961881734-7df1e2635d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      summary: "Hello there"
    }
  ];

  return (
    <div>
      {TouristInfo.map((hotel, index) => {
        return (
          <div key={index} className="card">
            <img alt="" src={hotel.image} className="card-img-top" />
            <div className="card-body">
              <p>{hotel.summary}</p>
              <a href={hotel.link} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;