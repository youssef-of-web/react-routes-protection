import React from "react";
import { useLoaderData } from "react-router-dom";
import "./style.css";
import Card from "../../components/card/Card";

function Home() {
  return (
    <div className="p-5">
      <Card title="Home Page (public)" />
    </div>
  );
}

export default Home;
