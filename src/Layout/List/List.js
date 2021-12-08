import React, { useEffect } from "react";
import { useState } from "react";
import { Loading } from "../Loading/Loading";
import ListItem from "./ListItem";
import { ListUl } from "./ListUl";

export default function List({ city, town}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch("https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx")
  .then(res => res.json())
  .then(
    data => {
      setData(data);
      setIsLoading(false);
    }
  )
  return(
    <ListUl>
      {
        isLoading ? <Loading>資料載入中...<br/>Loading...</Loading> : data.filter(e => {
          return town === "" ? e : e.Town === town ;
        }).filter(e => {
          return city === "" ? e : e.City === city ;
        }).map(e => {
          let Food = e.FoodFeature;
          return(
            <ListItem Pic={e.PicURL} City={e.City} Name={e.Name} Town={e.Town} Food={Food} />
          )
        })
      }
    </ListUl>
  )
}