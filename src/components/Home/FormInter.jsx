import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Webcam from "react-webcam";
import "../pdf.css";


let commarray = Array(10).fill(undefined)
let furnitureArray = Array(6).fill(undefined)


const FormInter = (props) => {
  const videoConstraints = {
    width: 2000,
    height: 2000,

    facingMode: { exact: "environment" },
    screenshotQuality: 1,
    screenshotFormat: "image/jpeg",
    mirrored: true,
  };
  let {
    setFourniture,
    setClientName,
    setFinalclientName,
    setMainDOeuvre,
    setDate,
    setDeplacement,
    setNumInter,
    setComment,
    setResponsable,
    submitForm,
    setImage,
    setPostEmergency,
    image,
    setCommentHeight,
    setFournitureHeight,
  } = props;

  const capture = React.useCallback(() => {
    setCommentHeight(document.getElementById("comContainer").offsetHeight);
    setFournitureHeight(document.getElementById("furnitureontainer").offsetHeight);
    const imageSrc = webcamRef.current.getScreenshot({
      screenshotQuality: 1,
      screenshotFormat: "image/jpeg",
    });
    setImage(imageSrc);
  });
  // !je suis laaaaaaaaaaaaaaaaaa
  let updteComm = (e)=>{
    commarray[e.target.dataset.row] = e.target.value
    setComment(commarray.join("\n"))
  }
  let updateFuniture = (e)=>{
    furnitureArray[e.target.dataset.row] = e.target.value
    setFourniture(furnitureArray.join("\n"))
  }
  const webcamRef = React.useRef(null);

  return (
    <div className="row justify-content-center">
      <div className="" id="mainPdfBody">
        <div className="container">
          <div className="row align-items-center justify-content-between ">
            <div className="col-2">
              <img
                alt="logo"
                style={{ width: "20mm" }}
                src={`${process.env.PUBLIC_URL}/rdsLogo.jpg`}
              />
            </div>
            <div className="col-8 text-center">Rapide Dépannage Service</div>
            <div className="col-2"></div>
          </div>
          <div className="row align-items-center justify-content-between ">
            <div className="col-3"></div>
            <div className="col-6 h5 text-center">RAPPORT D'INTERVENTION</div>
            <div className="col-3 row justify-content-end">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={setPostEmergency}
                />
                <label className="form-check-label ps-3 text">URGENCE</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            <div className="col-6">
              <div className="form-floating  mb-3">
                <input
                  list="clientsListe"
                  className="form-control "
                  type="text"
                  onChange={(e) => setClientName(e.target.value)}
                />
                <datalist id="clientsListe">
                  <option value="PHINELEC">PHINELEC</option>
                  <option value="EMALEC">EMALEC</option>
                  <option value="EGEO MAINTENANCE">EGEO MAINTENANCE</option>
                  <option value="MAINTENET">MAINTENET</option>
                  <option value="ABN STANDING">ABN STANDING</option>
                  <option value="ARTISANS DES RESEAUX">
                    ARTISANS DES RESEAUX
                  </option>
                  <option value="MASTORE">MASTORE</option>
                  <option value="MINI MOOV">MINI MOOV</option>
                  <option value="PATRIARCA">PATRIARCA</option>
                  <option value="SCI DREYFUSS">SCI DREYFUSS</option>
                </datalist>
                <label>Nom du client</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control "
                  defaultValue={`${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDay()}`}
                />
                <label>Date</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => setNumInter(e.target.value)}
                  className="form-control mb-1"
                />
                <label>Reference</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => setFinalclientName(e.target.value)}
                  className="form-control "
                />
                <label>Client final</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  onChange={(e) => setDeplacement(e.target.value)}
                  className="form-control mb-1"
                />
                <label>Deplacement</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  onChange={(e) => setMainDOeuvre(e.target.value)}
                  className="form-control mb-1"
                />
                <label>Main d'oeuvre (h)</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            {/* <textarea
                  rows="10"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  className="form-control h-100"
                  placeholder="Leave a comment here"
                  id="commTextAres"
                /> */}
            <div className="col-12" id="comContainer">
              <label>commentaires</label>
              <input
                className="form-control"
                onChange={updteComm}
                data-row={0}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={1}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={2}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={3}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={4}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={5}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={6}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={7}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={8}
                type="text"
                name=""
                id=""
              />
              <input
                className="form-control"
                onChange={updteComm}
                data-row={9}
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="row justify-content-between mb-1" id="furnitureontainer">
            <div className="col-12">
            <label>fournitures</label>

              <input
                className="form-control"
                onChange={updateFuniture}
                data-row={0}
                type="text"
                name=""
                id=""
              />
               <input
                className="form-control"
                onChange={updateFuniture}
                data-row={1}
                type="text"
                name=""
                id=""
              />
               <input
                className="form-control"
                onChange={updateFuniture}
                data-row={2}
                type="text"
                name=""
                id=""
              />
               <input
                className="form-control"
                onChange={updateFuniture}
                data-row={3}
                type="text"
                name=""
                id=""
              />
               <input
                className="form-control"
                onChange={updateFuniture}
                data-row={4}
                type="text"
                name=""
                id=""
              />
               <input
                className="form-control"
                onChange={updateFuniture}
                data-row={5}
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="row justify-content-between mb-1">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => setResponsable(e.target.value)}
                  className="form-control mb-1"
                />
                <label>Signataire</label>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-end mt-4 ">
              <div className="col-4 ">
                <div className="webcam-container d-flex flex-column align-items-center">
                  <div className="webcam-img">
                    {image === "" ? (
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={"100%"}
                        videoConstraints={videoConstraints}
                        forceScreenshotSourceSize
                      />
                    ) : (
                      <img
                        style={{ width: "100%" }}
                        alt="tampon de l'entreprise"
                        src={image}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around mt-2">
            <button
              className="btn btn-success col-5"
              type="submit"
              onClick={(e) => submitForm(e)}
            >
              Submit
            </button>
            {image !== "" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                }}
                className="btn btn-primary col-5"
              >
                Retake Image
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();

                  capture();
                }}
                className="btn btn-primary col-5"
              >
                Capture
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormInter;
