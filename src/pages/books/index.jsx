import React from "react";
import Card from "../../components/card/Card";
import { Hoc } from "../../HOC/hoc";

function Books() {
  return (
    <div className="p-5">
      <Card title="Books Page (private)" />
      <Card title="Only User connected can access to this page" />
    </div>
  );
}

export default Hoc(Books, ["user", "admin"]);
