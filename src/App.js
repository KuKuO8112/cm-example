import List from './Layout/List/List';
import { Title } from './Layout/Title/Title';
import { useState } from 'react';
import cities from "./data/data";
import { InputBar } from './Layout/InputBar/InputBar';
import { Body } from './Body';
import { Select } from './Layout/Select/Select';
import { Footer } from './Layout/footer/Footer';
import { Link } from './Layout/footer/Link';

function App() {
  const [city, setCity] = useState("");
  const [index, setIndex] = useState(22);
  const [town, setTown] = useState("");
  return (
    <Body>
      <Title>農村地方美食小吃特色料理</Title>
      <InputBar>
        <Select onChange={e => {
          setIndex(e.target.value);
          setCity(cities.city[e.target.value]);
          setTown("");
        }}>
          <option value={22} selected>請選擇行政區域...</option>
            {
              cities.city.map((data, index) => {
                return(
                  <option value={index}>{data}</option>
                )
              })
            }
        </Select>
        <Select onChange={e => {setTown(e.target.value)}}>
          <option value="" selected>請選擇鄉鎮區...</option>
          {
            cities.districts[index].map(data => {
              return(
                <option value={data}>{data}</option>
              )
            })
          }
        </Select>
      </InputBar>
      <List city={city} town={town}/>
      <Footer>
        <div>政府資料開放平台</div>
        <div><Link href="https://data.gov.tw/dataset/6037" target="_blank">https://data.gov.tw/dataset/6037</Link></div>
      </Footer>
    </Body>
  );
}

export default App;
