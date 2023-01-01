// TEAM SELECTION PART
// Player must select team before selecting respective team's class / skin

import {
   AddPlayerClassEx,
   ForceClassSelection,
   GetPlayerKeys,
   GetPlayerState,
   IsPlayerConnected,
   IsPlayerNPC,
   KEY,
   OnGameModeInit,
   OnPlayerCommandText,
   OnPlayerConnect,
   OnPlayerDeath,
   OnPlayerRequestClass,
   OnPlayerSpawn,
   OnPlayerUpdate,
   PlayerPlaySound,
   PLAYER_STATE,
   SetPlayerCameraLookAt,
   SetPlayerCameraPos,
   SetPlayerFacingAngle,
   SetPlayerInterior,
   SetPlayerPos,
   SetPlayerSkin,
   TextDrawBackgroundColor,
   TextDrawBoxColor,
   TextDrawColor,
   TextDrawCreate,
   TextDrawFont,
   TextDrawHideForPlayer,
   TextDrawLetterSize,
   TextDrawSetOutline,
   TextDrawSetShadow,
   TextDrawShowForPlayer,
   TextDrawTextSize,
   TextDrawUseBox,
   TogglePlayerSpectating,
} from "samp-node-lib";
import { CLASSES, TEAM, COLOR, GRAY } from "../../vars";

let TEXTDRAW = {
   HELPER: "",
   POLICE: "",
   CLUCKERS: "",
   MAFIA: "",
   VIP: "",
};

OnPlayerConnect(({ playerid: id }) => {
   // team selection initial variables for player
   global.teamSel[id] = {
      team: TEAM.NO_TEAM,
      isTeam: false,
      lastTick: Date.now(),
   };

   TogglePlayerSpectating(id, 1);
});

OnPlayerSpawn(({ playerid: id }) => {
   SetPlayerInterior(id, 0);

   SetPlayerPos(id, 0, 0, 0);
   return 1;
});

OnPlayerDeath(({ playerid: id }, killerid, reason) => {
   // on death
   return;
});

// Class selection
const handleClassSelection = (id, classid) => {
   if (global.teamSel[id].team === TEAM.POLICE) {
      SetPlayerInterior(id, 11);
      SetPlayerPos(id, 508.7362, -87.4335, 998.9609);
      SetPlayerFacingAngle(id, 0.0);
      SetPlayerCameraPos(id, 508.7362, -83.4335, 998.9609);
      SetPlayerCameraLookAt(id, 508.7362, -87.4335, 998.9609);

      if (classid === 0) {
         SetPlayerSkin(id, 302);
      }

      if (classid === 1) {
         SetPlayerSkin(id, 309);
      }

      if (classid === 2) {
         SetPlayerSkin(id, 285);
      }
   }

   if (global.teamSel[id].team === TEAM.CLUCKERS) {
      SetPlayerInterior(id, 3);
      SetPlayerPos(id, -2673.8381, 1399.7424, 918.3516);
      SetPlayerFacingAngle(id, 181.0);
      SetPlayerCameraPos(id, -2673.2776, 1394.3859, 918.3516);
      SetPlayerCameraLookAt(id, -2673.8381, 1399.7424, 918.3516);

      if (classid === 0) {
         SetPlayerSkin(id, 167);
      }

      if (classid === 1) {
         SetPlayerSkin(id, 209);
      }

      if (classid === 2) {
         SetPlayerSkin(id, 155);
      }
   }

   if (global.teamSel[id].team === TEAM.MAFIA) {
      SetPlayerInterior(id, 11);
      SetPlayerPos(id, 508.7362, -87.4335, 998.9609);
      SetPlayerFacingAngle(id, 0.0);
      SetPlayerCameraPos(id, 508.7362, -83.4335, 998.9609);
      SetPlayerCameraLookAt(id, 508.7362, -87.4335, 998.9609);

      if (classid === 0) {
         SetPlayerSkin(id, 127);
      }

      if (classid === 1) {
         SetPlayerSkin(id, 112);
      }

      if (classid === 2) {
         SetPlayerSkin(id, 113);
      }
   }

   if (global.teamSel[id].team === TEAM.VIP) {
      SetPlayerInterior(id, 3);
      SetPlayerPos(id, 349.0453, 193.2271, 1014.1797);
      SetPlayerFacingAngle(id, 286.25);
      SetPlayerCameraPos(id, 352.9164, 194.5702, 1014.1875);
      SetPlayerCameraLookAt(id, 349.0453, 193.2271, 1014.1797);

      if (classid === 0) {
         SetPlayerSkin(id, 137);
      }

      if (classid === 1) {
         SetPlayerSkin(id, 144);
      }

      if (classid === 2) {
         SetPlayerSkin(id, 212);
      }
   }

   return 1;
};

// Textdraws
const setTeamNameTextdraw = (name) => {
   TextDrawUseBox(name, 0);
   TextDrawLetterSize(name, 1.25, 3.0);
   TextDrawFont(name, 0);
   TextDrawSetShadow(name, 0);
   TextDrawSetOutline(name, 1);
   TextDrawColor(name, COLOR.WHITE);
   TextDrawBackgroundColor(TEXTDRAW.HELPER, GRAY[900]);
};

const initTeamSelectTextdraws = () => {
   TEXTDRAW.POLICE = TextDrawCreate(10.0, 380.0, "Police");
   setTeamNameTextdraw(TEXTDRAW.POLICE);

   TEXTDRAW.CLUCKERS = TextDrawCreate(10.0, 380.0, "Cluckers");
   setTeamNameTextdraw(TEXTDRAW.CLUCKERS);

   TEXTDRAW.MAFIA = TextDrawCreate(10.0, 380.0, "Mafia");
   setTeamNameTextdraw(TEXTDRAW.MAFIA);

   TEXTDRAW.VIP = TextDrawCreate(10.0, 380.0, "VIP");
   setTeamNameTextdraw(TEXTDRAW.VIP);

   TEXTDRAW.HELPER = TextDrawCreate(
      10.0,
      415.0,
      " Press ~b~~k~~GO_LEFT~ ~w~or ~b~~k~~GO_RIGHT~ ~w~to switch cities.~n~ Press ~r~~k~~PED_FIREWEAPON~ ~w~to select."
   );
   TextDrawUseBox(TEXTDRAW.HELPER, 1);
   TextDrawBoxColor(TEXTDRAW.HELPER, GRAY[500]);
   TextDrawLetterSize(TEXTDRAW.HELPER, 0.3, 1.0);
   TextDrawTextSize(TEXTDRAW.HELPER, 400.0, 40.0);
   TextDrawFont(TEXTDRAW.HELPER, 2);
   TextDrawSetShadow(TEXTDRAW.HELPER, 0);
   TextDrawSetOutline(TEXTDRAW.HELPER, 1);
   TextDrawBackgroundColor(TEXTDRAW.HELPER, GRAY[900]);
   TextDrawColor(TEXTDRAW.HELPER, COLOR.WHITE);
};

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

      TextDrawShowForPlayer(id, TEXTDRAW.POLICE);
      TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
      TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
      TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
      TextDrawHideForPlayer(id, TEXTDRAW.VIP);
      return;
   }

   // if TEAM.CLUCKERS
   if (global.teamSel[id].team === TEAM.CLUCKERS) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
      SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);

      TextDrawShowForPlayer(id, TEXTDRAW.CLUCKERS);
      TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
      TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
      TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
      TextDrawHideForPlayer(id, TEXTDRAW.VIP);
      return;
   }

   // if TEAM.MAFIA
   if (global.teamSel[id].team === TEAM.MAFIA) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, 1310.6155, 1675.9182, 110.739);
      SetPlayerCameraLookAt(id, 2285.2944, 1919.3756, 68.2275);

      TextDrawShowForPlayer(id, TEXTDRAW.MAFIA);
      TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
      TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
      TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
      TextDrawHideForPlayer(id, TEXTDRAW.VIP);
      return;
   }

   // if TEAM.VIP
   if (global.teamSel[id].team === TEAM.VIP) {
      SetPlayerInterior(id, 0);
      SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
      SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);

      TextDrawShowForPlayer(id, TEXTDRAW.VIP);
      TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
      TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
      TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
      TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
      return;
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

      TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
      TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
      TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
      TextDrawHideForPlayer(id, TEXTDRAW.VIP);
      TextDrawHideForPlayer(id, TEXTDRAW.HELPER);
      return;
   }

   if (keys[2] === KEY.RIGHT) {
      nextTeam(id);
   }

   if (keys[2] === KEY.LEFT) {
      prevTeam(id);
   }
};

OnPlayerRequestClass(({ playerid: id }, classid) => {
   if (IsPlayerNPC(id)) return 1;

   // if player has already selected the team
   // present him with class selection for that team
   if (global.teamSel[id].isTeam) {
      // class selection
      handleClassSelection(id, classid);
      return 1;
   } else {
      if (GetPlayerState(id) !== PLAYER_STATE.SPECTATING) {
         TogglePlayerSpectating(id, 1);
         TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
         global.teamSel[id].team = TEAM.NO_TEAM;
      }
   }

   return 0;
});

OnGameModeInit(() => {
   // initialize textdraws
   initTeamSelectTextdraws();

   // add 4 dummy classes
   CLASSES.forEach((item) =>
      AddPlayerClassEx(
         item.team,
         item.skinId,
         item.spawnX,
         item.spawnY,
         item.spawnZ,
         item.zAngle,
         item.weapOne,
         item.weapOneAmmo,
         item.weapTwo,
         item.weapTwoAmmo,
         item.weapThree,
         item.weapThreeAmmo
      )
   );
});

OnPlayerUpdate(({ playerid: id }) => {
   if (!IsPlayerConnected(id)) return 0;

   if (IsPlayerNPC(id)) return 1;

   // changing teams by inputs
   const isSpectating = GetPlayerState(id) === PLAYER_STATE.SPECTATING;
   if (!global.teamSel[id].isTeam && isSpectating) {
      handleTeamSelection(id);
      return 1;
   }
});

OnPlayerCommandText(({ playerid: id }, cmdtext) => {
   // changes skin of the team
   if (cmdtext === "/cs" || cmdtext === "/changeskin") {
      ForceClassSelection(id);
      TogglePlayerSpectating(id, 1);
      TogglePlayerSpectating(id, 0);

      return 1;
   }

   // changes team
   if (cmdtext === "/ct" || cmdtext === "/changeteam") {
      global.teamSel[id].team = TEAM.NO_TEAM;
      global.teamSel[id].isTeam = false;

      ForceClassSelection(id);
      TogglePlayerSpectating(id, 1);
      TogglePlayerSpectating(id, 0);

      return 1;
   }
});
