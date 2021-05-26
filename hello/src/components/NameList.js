import React from "react";
import Person from "./Person";

function NameList() {
  const names = ['John', 'Thomas' , 'Tim']
  const persons = [
    {
      id: 1,
      name: "John",
      age: 30,
      skill: "Java",
    },
    {
      id: 2,
      name: "Thomas",
      age: 33,
      skill: "Html",
    },
    {
      id: 3,
      name: "Tim",
      age: 40,
      skill: "JavaScript",
    },
  ];
  const nameList = names.map((name,index) => <h2 key={index}>{name}</h2> )
  return <div>{nameList}</div>;
}

export default NameList;
