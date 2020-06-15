import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
// import { Link } from 'react-router-dom' //maybe add this if I need routing
// import styled from "styled-components/macro";
import logo from "../../images/main-logo.png";
import FetchUniter from "../organisms/FetchUniter";
import { Header, AboutBtn } from "../molecules/style";
import AboutModal from "../organisms/Modals/AboutModal";
// import { useStoreState, useStoreActions } from "easy-peasy";

const MainPage = () => {
  // Redux/ easypeasy state
  const showAboutModal = useStoreState(
    (state) => state.activityState.showAboutModal
  );

  //easy-peasy action
  const updateShowAboutModal = useStoreActions(
    (actions) => actions.activityState.updateShowAboutModal
  );

  const refreshPage = () => {
    window.location.reload(false);
  };

  const openAboutModal = () => {
    updateShowAboutModal(true);
  };
  const closeAboutModal = () => {
    updateShowAboutModal(false);
  };

  return (
    <div>
      <Header>
        <img
          onClick={refreshPage}
          style={{ cursor: "pointer" }}
          src={logo}
          alt="Logo"
        />
        <AboutBtn onClick={openAboutModal}>About</AboutBtn>
      </Header>
      {showAboutModal ? <AboutModal closeModal={closeAboutModal} /> : null}
      {/* {showAssignmentInfoModal ? (
        <AssignmentInfoModal closeModal={closeAssignmentInfoModal} />
      ) : null} */}

      <FetchUniter />
    </div>
  );
};

export default MainPage;
