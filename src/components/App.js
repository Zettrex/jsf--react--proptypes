import React from 'react';
import Heading from "./Heading";
import Image from "./Image";
import Repeater from "./Repeater";
import ShowHide from "./ShowHide";

// import component

export default function App() {
  return (
    <div className="App">
        <Heading heading="Noroff Task"/>
        <Image source="https://img-9gag-fun.9cache.com/photo/a85O6W3_460swp.webp" alternativeText="rick and morty meme"/>
        <Repeater count={5}>
            <p>We like memes</p>
        </Repeater>
        <ShowHide show={true}>
            <Image source="https://img-9gag-fun.9cache.com/photo/ae5wQMW_460swp.webp" alternativeText="useless"/>
        </ShowHide>
    </div>
  );
}
