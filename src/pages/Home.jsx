import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";

export default function Home() {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p className="page-title">Simple OAuth with Node.js</p>
      <p style={{ fontSize: 20 }}>
        Passport.js contains support for over
        <span style={{ color: "val(--primary-red" }}>500+</span>
        Get Started today with just a username and password for apps like
        Facebook, Google.
      </p>
      <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28 }}>Popular Strategies</p>
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </div>
  );
}
