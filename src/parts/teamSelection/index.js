// TEAM SELECTION PART
// Player must select team before selecting respective team's class / skin

import {
   GetPlayerKeys,
   GetPlayerState,
   IsPlayerConnected,
   IsPlayerNPC,
   KEY,
   OnPlayerConnect,
   OnPlayerDeath,
   OnPlayerRequestClass,
   OnPlayerSpawn,
   OnPlayerUpdate,
   PlayerPlaySound,
   PLAYER_STATE,
   SetPlayerCameraLookAt,
   SetPlayerCameraPos,
   SetPlayerInterior,
   TogglePlayerSpectating,
} from "samp-node-lib";

const TEAM = {
   NO_TEAM: -1,
   POLICE: 0,
   CLUCKERS: 1,
   MAFIA: 2,
   VIP: 3,
};

OnPlayerConnect(({ playerid: id }) => {
   // team selection initial variables for player
   global.teamSel[id] = {
      team: TEAM.NO_TEAM,
      isTeam: false,
      lastTick: Date.now(),
   };
});

OnPlayerSpawn(({ playerid: id }) => {
   // on spawn
});

OnPlayerDeath(({ playerid: id }, killerid, reason) => {
   // on death
});

// Class selection

const setSelectedTeam = (id) => {
   // If no TEAM, assign 1st TEAM to player
   if (global.teamSel[id].team === TEAM.NO_TEAM) {
      global.teamSel[id].team = TEAM.POLICE;
   }

   // if TEAM.POLICE
   if (global.teamSel[id].team === TEAM.POLICE) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, 1630.6136, -2286.0298, 110.0);
      SetPlayerCameraLookAt(id, 1887.6034, -1682.1442, 47.6167);

      // deal with textdraws
   }

   // if TEAM.CLUCKERS
   if (global.teamSel[id].team === TEAM.CLUCKERS) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
      SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);

      // deal with textdraws
   }

   // if TEAM.MAFIA
   if (global.teamSel[id].team === TEAM.MAFIA) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, 1310.6155, 1675.9182, 110.739);
      SetPlayerCameraLookAt(id, 2285.2944, 1919.3756, 68.2275);

      // deal with textdraws
   }

   // if TEAM.VIP
   if (global.teamSel[id].team === TEAM.VIP) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
      SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);

      // deal with textdraws
   }
};

const nextTeam = (id) => {
   global.teamSel[id].team++;

   if (global.teamSel[id].team > TEAM.VIP) {
      global.teamSel[id].team = TEAM.POLICE;
   }

   PlayerPlaySound(id, 1052, 0.0, 0.0, 0.0);
   global.teamSel[id].lastTick = Date.now();
   setSelectedTeam(id);
};

const prevTeam = (id) => {
   global.teamSel[id].team--;

   if (global.teamSel[id].team < TEAM.POLICE) {
      global.teamSel[id].team = TEAM.VIP;
   }

   PlayerPlaySound(id, 1053, 0.0, 0.0, 0.0);
   global.teamSel[id].lastTick = Date.now();
   setSelectedTeam(id);
};

const handleTeamSelection = (id) => {
   // Keys map @returns [ Keys, up / down, left / right ]
   const keys = GetPlayerKeys(id);

   if (global.teamSel[id].team === TEAM.NO_TEAM) {
      nextTeam(id);
   }

   // Only allow new team selection every 500 ms
   if (Date.now() - global.teamSel[id].lastTick < 500) return;

   if (keys[0] === KEY.FIRE || keys[0] === KEY.SECONDARY_ATTACK) {
      global.teamSel[id].isTeam = true;
      TogglePlayerSpectating(id, 0);
      return; //
   }

   if (keys[2] === KEY.RIGHT) {
      nextTeam(id);
   }

   if (keys[2] === KEY.LEFT) {
      prevTeam(id);
   }
};

OnPlayerRequestClass(({ playerid: id }, classid) => {
   if (IsPlayerNPC(id)) return;

   // if player has already selected the team
   // present him with class selection for that team
   //  if (global.teamSel[id].isTeam) {
   //     // class selection
   //     return;
   //  }

   if (GetPlayerState(id) !== PLAYER_STATE.SPECTATING) {
      TogglePlayerSpectating(id, 1);
      //textdraw
      global.teamSel[id].team = TEAM.NO_TEAM;
   }
});

OnPlayerUpdate(({ playerid: id }) => {
   //  if (!IsPlayerConnected(id)) return false;

   //  if (IsPlayerNPC(id)) return;

   // changing teams by inputs
   if (
      !global.teamSel[id].isTeam &&
      GetPlayerState(id) === PLAYER_STATE.SPECTATING
   ) {
      handleTeamSelection(id);
   }
});
