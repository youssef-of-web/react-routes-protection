import React from "react";
import Card from "../../components/card/Card";
import { Hoc } from "../../HOC/hoc";

function Admin() {
  return (
    <div className="flex flex-col gap-5">
      <Card title="Admin Page (Private)" />
      <Card title="Only User connected can access to this page and with the role admin" />
    </div>
  );
}

export default Hoc(Admin, ["admin"]);
