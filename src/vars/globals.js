// These are the server globals
import { OnPlayerDisconnect } from "samp-node-lib";

// Make sure to clear them all OnPlayerDisconnect
global.teamSel = [];

OnPlayerDisconnect(({ playerid: id }, reason) => {
   delete global.teamSel[id];
   console.log(global.teamSel[id]);
});
