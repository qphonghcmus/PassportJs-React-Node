import React from "react";
import { data } from "../../data";
import IconButton from "./IconButton";

export default function ButtonList() {
  return data.map((app) => {
    return <IconButton app={app} key={app.name} />;
  });
}
