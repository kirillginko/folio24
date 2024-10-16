import React from "react";
import GridLayout from "./GridLayout";
import GridItem from "./GridItem";

const GridMain = () => {
  const gridItems = [
    { title: "ARE YOU OKOK?", types: ["W", "EC", "D", "DV"] },
    { title: "BALMING TIGER", types: ["W", "D", "DV"] },
    { title: "OKOK SERVICES", types: ["W", "PF", "D", "DV"] },
    { title: "ALEX HEEYEON KIL", types: ["W", "D", "DV"] },
    { title: "ORGD 2022 - HELLO I'M DESIGNER X", types: ["EX", "IN"] },
    { title: "REMEMEMBER TO FORGET", types: ["W", "EX", "D", "DV"] },
    { title: "UNI_VERSE", types: ["W", "PF", "D", "DV"] },
    { title: "COLLECTING FRAGMENTS", types: ["W", "IN", "EX", "D", "DV"] },
    { title: "MONO X7", types: ["W", "EC", "D", "DV"] },
    { title: "JIWOO MOON", types: ["W", "PF", "D", "DV"] },
    { title: "SNAKEPOOL / LEE KANGHYUK", types: ["W", "PF", "D", "DV"] },
    { title: "STATE OF MOTION 2021", types: ["W", "DV"] },
    { title: "GYRE - KOREAN PAVILION", types: ["W", "D", "DV"] },
    // Add more items as needed
  ];

  return (
    <GridLayout>
      {gridItems.map((item, index) => (
        <GridItem key={index} title={item.title} types={item.types} />
      ))}
    </GridLayout>
  );
};

export default GridMain;
