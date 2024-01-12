import React from "react";
import "../page-title/PageTitle.css";
import bbLogo from "../../../images/boardbrewLOGO.png";
import vigilanteLogo from "../../../images/vigilanteLOGO.png";
import sewingLogo from "../../../images/sewinglogo.png";
import "./Rewards.css";
import Modal from "./Modal";
import ModalV from "./ModalV";
import ModalS from "./ModalS";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import ConfigIcon from "./Icon";

function Rewards({ isStudent }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalV, setOpenModalV] = useState(false);
  const [openModalS, setOpenModalS] = useState(false);

  if (isStudent) {
    return (
      <section>
        <div class="box">
          <img class="logo" src={bbLogo} alt="Board and Brew Logo" />
          <h1 class="text">Board and Brew</h1>
          <h2 class="text-project">Project: Logo Design</h2>
          <p class="text-reward">Enjoy 15% off your next purchase!</p>
          <button className="redeemButton" onClick={() => setOpenModal(true)}>
            REDEEM{" "}
            <ConfigIcon>
              <AiTwotoneHeart />
            </ConfigIcon>
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>

        <div class="box2">
          <img class="logo" src={vigilanteLogo} alt="Vigilante Logo" />
          <h1 class="text">Vigilante Coffee Co</h1>
          <h2 class="text-project">Project: Social Media Marketing</h2>
          <p class="text-reward">Enjoy one free small coffee!</p>
          <button className="redeemButton" onClick={() => setOpenModalV(true)}>
            REDEEM{" "}
            <ConfigIcon>
              <AiTwotoneHeart />
            </ConfigIcon>
          </button>
          {openModalV && <ModalV closeModal={setOpenModalV} />}
        </div>

        <div class="box3">
          <img class="logo" src={sewingLogo} alt="Sewing Logo" />
          <h1 class="text">Three Little Birds Sewing Co</h1>
          <h2 class="text-project">Project: Website</h2>
          <p class="text-reward">Enjoy 30% off your next sewing class!</p>
          <button className="redeemButton" onClick={() => setOpenModalS(true)}>
            REDEEM{" "}
            <ConfigIcon>
              <AiTwotoneHeart />
            </ConfigIcon>
          </button>
          {openModalS && <ModalS closeModal={setOpenModalS} />}
        </div>
      </section>
    );
  }
}

export default Rewards;
