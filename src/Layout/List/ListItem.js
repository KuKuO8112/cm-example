import React from "react";
import { ItemCity } from "./Item/ListCity";
import { ListLi } from "./Item/ListLi";
import { useState } from "react";
import { ListName } from "./Item/Slip/ListName";
import { ListTown } from "./Item/Slip/ListTown";
import { ListFood } from "./Item/Slip/ListFood";
import { Bar } from "./Item/Slip/Bar";
import { Slip } from "./Item/Slip";

export default function ListItem({ Pic, City,Town, Name, Food }) {
  const [click, setClick] = useState(false);
  return(
    <ListLi Pic={Pic} Cli={click} onClick={() => setClick(!click)}>
      <ItemCity>{City}</ItemCity>
      <Slip Cli={click}>
        <ListTown>{Town}</ListTown>
        <ListName>{Name}</ListName>
        <ListFood><Bar></Bar>{Food}</ListFood>
      </Slip>
    </ListLi>
  )
}