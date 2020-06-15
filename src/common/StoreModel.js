// StoreModel is the model that's actually used, and it pulls together all the stores.

import activityModel from "./ActivityModel";
import sessionModel from "./SessionModel";

const storeModel = {
  activityState: activityModel,
  sessionState: sessionModel,
};

export default storeModel;
