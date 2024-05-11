import React from "react";
import Persons from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Persons key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
