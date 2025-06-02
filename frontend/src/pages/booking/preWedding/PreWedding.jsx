import React from "react";
import "./preWedding.css";
import { preWedding } from "../../../../data";
import { Link } from "react-router-dom";

function PreWedding() {
  return (
    <main>
      <section className="firstContent">
        <div className="firstWrapper">
          <div className="centerIT">
            <p className="first">Packages</p>
            <h1>Pre Wedding Photoshoot</h1>
          </div>
        </div>
      </section>

      <section className="secondContent">
        <div className="secondWrapper">
          {preWedding.map((data) => (
            <div key={data.id} className="data">
              <div className="boxCOntent">
                <p className="title">{data.title}</p>
                <h2>{data.price}</h2>
                <p className="information">{data.information}</p>
                <p className="copies">{data.copies}</p>
                <p className="text1">{data.text1}</p>
                <p className="text2">{data.text2}</p>
                <Link to={data.link}>
                  <button className="book">
                    <p>Book Now</p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PreWedding;
