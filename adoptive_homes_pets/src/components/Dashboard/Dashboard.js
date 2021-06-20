import React, { useState } from "react";
import ListOfDogs from "../Details/ListOfDogs";

export default function Dashboard({ dogsInfo, username, setDogsInfo }) {
  const [addDogName, setdogName] = useState("");
  const [addAvailable, setavailable] = useState("");
  const [addPrice, setprice] = useState("");
  return (
    <>
      <div>
        <p>Please click on the blow link for more information about dog.</p>
        <ul>
          {dogsInfo.map((dog, index) => (
            <ListOfDogs key={dog.id} id={dog.id} price={dog.price} dogName={dog.dogName} available={dog.available} username={username} setDogsInfo={setDogsInfo} index={index} />
          ))}
        </ul>
      </div>

      <div>
        <br />
        <br />
        <h2>ADD NEW DOG BREED</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDogsInfo((doginfo) => {
              console.log(doginfo.length);
              let obj = {
                id: doginfo.length + 1,
                dogName: addDogName,
                price: addPrice,
                available: addAvailable,
              };
              return [...doginfo, obj];
            });

            setdogName("");
            setavailable("");
            setprice("");
          }}
        >
          <label>
            Dog Name:
            <input
              value={addDogName}
              onChange={(e) => {
                e.preventDefault();
                setdogName(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Dogs Available Count:
            <input
              value={addAvailable}
              onChange={(e) => {
                e.preventDefault();
                setavailable(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Dog Price:
            <input
              value={addPrice}
              onChange={(e) => {
                e.preventDefault();
                setprice(e.target.value);
              }}
            />
          </label>
          <br />
          <button type="submit" aria-label="ADD">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
