import Person from './Person';
import {foodData} from './Helpers/data'
import ShowData from './ShowData';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(foodData)
const fdata = data.hits.map((item)=> {
    const {label,image} = item.recipe
    console.log(label, image);
    
  });

  return (
    <>
      {/* <Person
        name="Canan Bayram"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="5555 555555"
      />
      <Person
        name="Can Bayram"
        img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
        tel="5555 554444"
      />
      <Person
        name="Ahmet Fevzi"
        img="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
        tel="5555222222"
      /> */}
      {/* {data.hits.map().map((item) => {
        const {label, image} = item
        return <ShowData label={label} image={image} />
      })} */}
      <h1>he</h1>
    </>
  );
}

export default App;