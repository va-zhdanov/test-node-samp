import { OnPlayerConnect } from "samp-node-lib";

const TEAM = {
  NO_TEAM: -1,
  POLICE: 0,
  CLUCKERS: 1,
  MAFIA: 2,
  VIP: 3,
};

// TEAM SELECTION
OnPlayerConnect(({ playerid: id }) => {
  // team selection initial variables
  global.teamSel[id].team = TEAM.NO_TEAM;
  global.teamSel[id].isTeam = false;
  // global.teamSel[id].lastTick = Date.now();

  console.log(Date.now());
  console.log(global.teamSel);
});
