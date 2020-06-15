//ActivityModel includes button clicks, and explict user actions

import { action } from "easy-peasy";

const activityModel = {
  //Variables
  showAboutModal: false,
  // showClearStorageAlert: false,

  //Actions

  updateShowAboutModal: action((state, payload) => {
    state.showAboutModal = payload;
  }),
  // updateShowClearStorageAlert: action((state, payload) => {
  //   state.showClearStorageAlert = payload;
  // }),
};

export default activityModel;
