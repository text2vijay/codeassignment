import React from "react";
import useModal from "./useModal";
import DetaisPage from "./DetailsPage";

export default function ListOfDogs({ id, price, dogName, available, username, setDogsInfo, index }) {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <li key={id}>
        <a href={"#" + dogName} onClick={toggle}>
          {dogName}
        </a>
      </li>

      <DetaisPage isShowing={isShowing} hide={toggle} id={id} price={price} dogName={dogName} available={available} username={username} setDogsInfo={setDogsInfo} index={index}></DetaisPage>
    </>
  );
}
