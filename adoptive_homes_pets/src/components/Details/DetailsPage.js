import "./modal.css";
import { useState } from "react";
import Header from "../common/Header";
const DetailsPage = ({ id, price, dogName, available, isShowing, hide, username, setDogsInfo, index }) => {
  const showHideClassName = isShowing ? "modal display-block" : "modal display-none";

  const [showEditClassName, setshowEditClassName] = useState("display-none");

  const [addDogName, setdogName] = useState(dogName);
  const [addAvailable, setavailable] = useState(available);
  const [addPrice, setprice] = useState(price);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <>
          <Header username={username}></Header>
          <div>
            <h3>{dogName} Dog Details page</h3>
            <b>Dog Name: </b>
            <span>{dogName}</span>
            <br />
            <b>Dogs available count: </b>
            <span>{available}</span>
            <br />
            <b>price: </b>
            <span>{price}</span>
            <br />
            <br />
            <div className={showEditClassName}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDogsInfo((doginfo) => {
                    console.log("in submit dog info=>>", doginfo);

                    let newArr = [...doginfo];
                    let obj = {
                      id: id,
                      dogName: addDogName,
                      price: addPrice,
                      available: addAvailable,
                    };

                    newArr[index] = obj;

                    console.log("in submit dog info=>>", newArr);
                    return newArr;
                  });

                  setshowEditClassName("display-none");
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
                <button type="submit" aria-label="submit">
                  submit
                </button>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <button type="button" className="modal-edit-button" aria-label="EDIT" onClick={(e) => setshowEditClassName("display-block")}>
            EDIT
          </button>
          <button
            type="button"
            className="modal-close-button"
            aria-label="Close"
            onClick={(e) => {
              setshowEditClassName("display-none");
              hide();
            }}
          >
            CLOSE
          </button>
        </>
      </section>
    </div>
  );
};

export default DetailsPage;
