import React from "react";
import images from "../../../../assets/img";
import Header from "../../../components/Header";
import Lecture from "../../../components/Lecture";

export default function Arm() {
  let lectures = [
    {
      time: "1:45",
    },
    {
      time: "2:45",
    },
    {
      time: "3:45",
    },
    {
      time: "4:45",
    },
    {
      time: "5:45",
    },
    {
      time: "6:45",
    },
    {
      time: "7:45",
    },
    {
      time: "8:45",
    },
    {
      time: "9:45",
    },
    {
      time: "10:45",
    },
    {
      time: "11:45",
    },
    {
      time: "12:45",
    },
    {
      time: "13:45",
    },
    {
      time: "14:45",
    },
    {
      time: "15:45",
    },
    {
      time: "16:45",
    },
    {
      time: "17:45",
    },
    {
      time: "18:45",
    },
    {
      time: "19:45",
    },
    {
      time: "20:45",
    },
  ];
  return (
    <>
      <Header title={"ARM & CHEST WORKOUT"} backgroundImage={images.arm}>
        {lectures.map((lectures, index) => (
          <Lecture key={index} level={index+1} time={lectures.time} />
        ))}
      </Header>
    </>
  );
}
