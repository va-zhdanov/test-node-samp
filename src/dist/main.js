'use strict';

var sampNodeLib = require('samp-node-lib');

const GRAY = {
  50: "#f2f2f3",
  100: "#e5e6e7",
  200: "#cacdce",
  300: "#b0b3b5",
  400: "#959a9d",
  500: "#7b8184",
  600: "#62676a",
  700: "#4a4d50",
  800: "#313435",
  900: "#181a1b"
};
const BLUE = {
  50: "#e5f4ff",
  100: "#cceaff",
  200: "#99d4ff",
  300: "#66bfff",
  400: "#33aaff",
  500: "#0095ff",
  600: "#0077cc",
  700: "#005999",
  800: "#003b66",
  900: "#001e33"
};
const INDIGO = {
  50: "#e5e8ff",
  100: "#ccd0ff",
  200: "#99a2ff",
  300: "#6673ff",
  400: "#3344ff",
  500: "#0015ff",
  600: "#0011cc",
  700: "#000d99",
  800: "#000866",
  900: "#000433"
};
const VIOLET = {
  50: "#f0e5ff",
  100: "#e1ccff",
  200: "#c399ff",
  300: "#a666ff",
  400: "#8833ff",
  500: "#6a00ff",
  600: "#5500cc",
  700: "#400099",
  800: "#2a0066",
  900: "#150033"
};
const PURPLE = {
  50: "#fde5ff",
  100: "#fbccff",
  200: "#f699ff",
  300: "#f266ff",
  400: "#ee33ff",
  500: "#ea00ff",
  600: "#bb00cc",
  700: "#8c0099",
  800: "#5d0066",
  900: "#2f0033"
};
const PINK = {
  50: "#ffe5f4",
  100: "#ffccea",
  200: "#ff99d5",
  300: "#ff66bf",
  400: "#ff33aa",
  500: "#ff0095",
  600: "#cc0077",
  700: "#990059",
  800: "#66003c",
  900: "#33001e"
};
const RED = {
  50: "#ffe5e8",
  100: "#ffccd0",
  200: "#ff99a1",
  300: "#ff6673",
  400: "#ff3344",
  500: "#ff0015",
  600: "#cc0011",
  700: "#99000d",
  800: "#660008",
  900: "#330004"
};
const ORANGE = {
  50: "#fff0e5",
  100: "#ffe1cc",
  200: "#ffc499",
  300: "#ffa666",
  400: "#ff8833",
  500: "#ff6a00",
  600: "#cc5500",
  700: "#994000",
  800: "#662b00",
  900: "#331500"
};
const YELLOW = {
  50: "#fffde5",
  100: "#fffbcc",
  200: "#fff699",
  300: "#fff266",
  400: "#ffee33",
  500: "#ffea00",
  600: "#ccbb00",
  700: "#998c00",
  800: "#665e00",
  900: "#332f00"
};
const LIME = {
  50: "#f4ffe5",
  100: "#eaffcc",
  200: "#d5ff99",
  300: "#bfff66",
  400: "#aaff33",
  500: "#95ff00",
  600: "#77cc00",
  700: "#599900",
  800: "#3c6600",
  900: "#1e3300"
};
const GREEN = {
  50: "#e8ffe5",
  100: "#d0ffcc",
  200: "#a2ff99",
  300: "#73ff66",
  400: "#44ff33",
  500: "#15ff00",
  600: "#11cc00",
  700: "#0d9900",
  800: "#096600",
  900: "#043300"
};
const TEAL = {
  50: "#e5fff0",
  100: "#ccffe1",
  200: "#99ffc4",
  300: "#66ffa6",
  400: "#33ff88",
  500: "#00ff6a",
  600: "#00cc55",
  700: "#009940",
  800: "#00662b",
  900: "#003315"
};
const CYAN = {
  50: "#e5fffd",
  100: "#ccfffb",
  200: "#99fff7",
  300: "#66fff2",
  400: "#33ffee",
  500: "#00ffea",
  600: "#00ccbb",
  700: "#00998c",
  800: "#00665e",
  900: "#00332f"
};
const COLOR = {
  WHITE: "#FFFFFF",
  GRAY: GRAY[500],
  BLUE: BLUE[500],
  INDIGO: INDIGO[500],
  VIOLET: VIOLET[500],
  PURPLE: PURPLE[500],
  PINK: PINK[500],
  RED: RED[500],
  ORANGE: ORANGE[500],
  YELLOW: YELLOW[500],
  LIME: LIME[500],
  GREEN: GREEN[500],
  TEAL: TEAL[500],
  CYAN: CYAN[500]
};

const TEAM = {
  NO_TEAM: -1,
  POLICE: 0,
  CLUCKERS: 1,
  MAFIA: 2,
  VIP: 3
};
const CLASSES = [
  {
    team: TEAM.POLICE,
    skinId: 298,
    spawnX: 1759.0189,
    spawnY: -1898.126,
    spawnZ: 13.5622,
    zAngle: 266.4503,
    weapOne: -1,
    weapOneAmmo: -1,
    weapTwo: -1,
    weapTwoAmmo: -1,
    weapThree: -1,
    weapThreeAmmo: -1
  },
  {
    team: TEAM.CLUCKERS,
    skinId: 299,
    spawnX: 1759.0189,
    spawnY: -1898.126,
    spawnZ: 13.5622,
    zAngle: 266.4503,
    weapOne: -1,
    weapOneAmmo: -1,
    weapTwo: -1,
    weapTwoAmmo: -1,
    weapThree: -1,
    weapThreeAmmo: -1
  },
  {
    team: TEAM.MAFIA,
    skinId: 300,
    spawnX: 1759.0189,
    spawnY: -1898.126,
    spawnZ: 13.5622,
    zAngle: 266.4503,
    weapOne: -1,
    weapOneAmmo: -1,
    weapTwo: -1,
    weapTwoAmmo: -1,
    weapThree: -1,
    weapThreeAmmo: -1
  },
  {
    team: TEAM.VIP,
    skinId: 301,
    spawnX: 1759.0189,
    spawnY: -1898.126,
    spawnZ: 13.5622,
    zAngle: 266.4503,
    weapOne: -1,
    weapOneAmmo: -1,
    weapTwo: -1,
    weapTwoAmmo: -1,
    weapThree: -1,
    weapThreeAmmo: -1
  }
];

global.teamSel = [];
sampNodeLib.OnPlayerDisconnect(({ playerid: id }, reason) => {
  delete global.teamSel[id];
  console.log(global.teamSel[id]);
});

let TEXTDRAW = {
  HELPER: "",
  POLICE: "",
  CLUCKERS: "",
  MAFIA: "",
  VIP: ""
};
sampNodeLib.OnPlayerConnect(({ playerid: id }) => {
  global.teamSel[id] = {
    team: TEAM.NO_TEAM,
    isTeam: false,
    lastTick: Date.now()
  };
  sampNodeLib.TogglePlayerSpectating(id, 1);
});
sampNodeLib.OnPlayerSpawn(({ playerid: id }) => {
  sampNodeLib.SetPlayerInterior(playerid, 0);
  sampNodeLib.SetPlayerPos(id, 0, 0, 0);
});
sampNodeLib.OnPlayerDeath(({ playerid: id }, killerid, reason) => {
});
const handleClassSelection = (id, classid) => {
  if (global.teamSel[id].team === TEAM.POLICE) {
    sampNodeLib.SetPlayerInterior(id, 11);
    sampNodeLib.SetPlayerPos(id, 508.7362, -87.4335, 998.9609);
    sampNodeLib.SetPlayerFacingAngle(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, 508.7362, -83.4335, 998.9609);
    sampNodeLib.SetPlayerCameraLookAt(id, 508.7362, -87.4335, 998.9609);
  }
  if (global.teamSel[id].team === TEAM.CLUCKERS) {
    sampNodeLib.SetPlayerInterior(id, 3);
    sampNodeLib.SetPlayerPos(id, -2673.8381, 1399.7424, 918.3516);
    sampNodeLib.SetPlayerFacingAngle(id, 181);
    sampNodeLib.SetPlayerCameraPos(id, -2673.2776, 1394.3859, 918.3516);
    sampNodeLib.SetPlayerCameraLookAt(id, -2673.8381, 1399.7424, 918.3516);
  }
  if (global.teamSel[id].team === TEAM.MAFIA) {
    sampNodeLib.SetPlayerInterior(id, 11);
    sampNodeLib.SetPlayerPos(id, 508.7362, -87.4335, 998.9609);
    sampNodeLib.SetPlayerFacingAngle(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, 508.7362, -83.4335, 998.9609);
    sampNodeLib.SetPlayerCameraLookAt(id, 508.7362, -87.4335, 998.9609);
  }
  if (global.teamSel[id].team === TEAM.VIP) {
    sampNodeLib.SetPlayerInterior(id, 3);
    sampNodeLib.SetPlayerPos(id, 349.0453, 193.2271, 1014.1797);
    sampNodeLib.SetPlayerFacingAngle(id, 286.25);
    sampNodeLib.SetPlayerCameraPos(id, 352.9164, 194.5702, 1014.1875);
    sampNodeLib.SetPlayerCameraLookAt(id, 349.0453, 193.2271, 1014.1797);
  }
};
const setTeamNameTextdraw = (name) => {
  sampNodeLib.TextDrawUseBox(name, 0);
  sampNodeLib.TextDrawLetterSize(name, 1.25, 3);
  sampNodeLib.TextDrawFont(name, 0);
  sampNodeLib.TextDrawSetShadow(name, 0);
  sampNodeLib.TextDrawSetOutline(name, 1);
  sampNodeLib.TextDrawColor(name, COLOR.WHITE);
  sampNodeLib.TextDrawBackgroundColor(TEXTDRAW.HELPER, GRAY[900]);
};
const initTeamSelectTextdraws = () => {
  TEXTDRAW.POLICE = sampNodeLib.TextDrawCreate(10, 380, "Police");
  setTeamNameTextdraw(TEXTDRAW.POLICE);
  TEXTDRAW.CLUCKERS = sampNodeLib.TextDrawCreate(10, 380, "Cluckers");
  setTeamNameTextdraw(TEXTDRAW.CLUCKERS);
  TEXTDRAW.MAFIA = sampNodeLib.TextDrawCreate(10, 380, "Mafia");
  setTeamNameTextdraw(TEXTDRAW.MAFIA);
  TEXTDRAW.VIP = sampNodeLib.TextDrawCreate(10, 380, "VIP");
  setTeamNameTextdraw(TEXTDRAW.VIP);
  TEXTDRAW.HELPER = sampNodeLib.TextDrawCreate(
    10,
    415,
    " Press ~b~~k~~GO_LEFT~ ~w~or ~b~~k~~GO_RIGHT~ ~w~to switch cities.~n~ Press ~r~~k~~PED_FIREWEAPON~ ~w~to select."
  );
  sampNodeLib.TextDrawUseBox(TEXTDRAW.HELPER, 1);
  sampNodeLib.TextDrawBoxColor(TEXTDRAW.HELPER, GRAY[500]);
  sampNodeLib.TextDrawLetterSize(TEXTDRAW.HELPER, 0.3, 1);
  sampNodeLib.TextDrawTextSize(TEXTDRAW.HELPER, 400, 40);
  sampNodeLib.TextDrawFont(TEXTDRAW.HELPER, 2);
  sampNodeLib.TextDrawSetShadow(TEXTDRAW.HELPER, 0);
  sampNodeLib.TextDrawSetOutline(TEXTDRAW.HELPER, 1);
  sampNodeLib.TextDrawBackgroundColor(TEXTDRAW.HELPER, GRAY[900]);
  sampNodeLib.TextDrawColor(TEXTDRAW.HELPER, COLOR.WHITE);
};
const setSelectedTeam = (id) => {
  if (global.teamSel[id].team === TEAM.NO_TEAM) {
    global.teamSel[id].team = TEAM.POLICE;
  }
  if (global.teamSel[id].team === TEAM.POLICE) {
    sampNodeLib.SetPlayerInterior(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, 1630.6136, -2286.0298, 110);
    sampNodeLib.SetPlayerCameraLookAt(id, 1887.6034, -1682.1442, 47.6167);
    sampNodeLib.TextDrawShowForPlayer(id, TEXTDRAW.POLICE);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.VIP);
    return;
  }
  if (global.teamSel[id].team === TEAM.CLUCKERS) {
    sampNodeLib.SetPlayerInterior(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
    sampNodeLib.SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);
    sampNodeLib.TextDrawShowForPlayer(id, TEXTDRAW.CLUCKERS);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.VIP);
    return;
  }
  if (global.teamSel[id].team === TEAM.MAFIA) {
    sampNodeLib.SetPlayerInterior(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, 1310.6155, 1675.9182, 110.739);
    sampNodeLib.SetPlayerCameraLookAt(id, 2285.2944, 1919.3756, 68.2275);
    sampNodeLib.TextDrawShowForPlayer(id, TEXTDRAW.MAFIA);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.VIP);
    return;
  }
  if (global.teamSel[id].team === TEAM.VIP) {
    sampNodeLib.SetPlayerInterior(id, 0);
    sampNodeLib.SetPlayerCameraPos(id, -1300.8754, 68.0546, 129.4823);
    sampNodeLib.SetPlayerCameraLookAt(id, -1817.9412, 769.3878, 132.6589);
    sampNodeLib.TextDrawShowForPlayer(id, TEXTDRAW.VIP);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
    return;
  }
};
const nextTeam = (id) => {
  global.teamSel[id].team++;
  if (global.teamSel[id].team > TEAM.VIP) {
    global.teamSel[id].team = TEAM.POLICE;
  }
  sampNodeLib.PlayerPlaySound(id, 1052, 0, 0, 0);
  global.teamSel[id].lastTick = Date.now();
  setSelectedTeam(id);
};
const prevTeam = (id) => {
  global.teamSel[id].team--;
  if (global.teamSel[id].team < TEAM.POLICE) {
    global.teamSel[id].team = TEAM.VIP;
  }
  sampNodeLib.PlayerPlaySound(id, 1053, 0, 0, 0);
  global.teamSel[id].lastTick = Date.now();
  setSelectedTeam(id);
};
const handleTeamSelection = (id) => {
  const keys = sampNodeLib.GetPlayerKeys(id);
  if (global.teamSel[id].team === TEAM.NO_TEAM) {
    nextTeam(id);
  }
  if (Date.now() - global.teamSel[id].lastTick < 500)
    return;
  if (keys[0] === sampNodeLib.KEY.FIRE || keys[0] === sampNodeLib.KEY.SECONDARY_ATTACK) {
    global.teamSel[id].isTeam = true;
    sampNodeLib.TogglePlayerSpectating(id, 0);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.POLICE);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.CLUCKERS);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.MAFIA);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.VIP);
    sampNodeLib.TextDrawHideForPlayer(id, TEXTDRAW.HELPER);
    return;
  }
  if (keys[2] === sampNodeLib.KEY.RIGHT) {
    nextTeam(id);
  }
  if (keys[2] === sampNodeLib.KEY.LEFT) {
    prevTeam(id);
  }
};
sampNodeLib.OnPlayerRequestClass(({ playerid: id }, classid) => {
  if (sampNodeLib.IsPlayerNPC(id))
    return;
  if (global.teamSel[id].isTeam) {
    handleClassSelection(id);
    return;
  }
  if (sampNodeLib.GetPlayerState(id) !== sampNodeLib.PLAYER_STATE.SPECTATING) {
    sampNodeLib.TogglePlayerSpectating(id, 1);
    sampNodeLib.TextDrawShowForPlayer(id, TEXTDRAW.HELPER);
    global.teamSel[id].team = TEAM.NO_TEAM;
  }
});
sampNodeLib.OnPlayerUpdate(({ playerid: id }) => {
  if (!sampNodeLib.IsPlayerConnected(id))
    return;
  if (sampNodeLib.IsPlayerNPC(id))
    return;
  const isSpectating = sampNodeLib.GetPlayerState(id) === sampNodeLib.PLAYER_STATE.SPECTATING;
  if (!global.teamSel[id].isTeam && isSpectating) {
    handleTeamSelection(id);
  }
});
sampNodeLib.OnGameModeInit(() => {
  initTeamSelectTextdraws();
  CLASSES.forEach(
    (item) => sampNodeLib.AddPlayerClassEx(
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

sampNodeLib.OnPlayerConnect(({ playerid: id }) => {
  const username = sampNodeLib.GetPlayerName(id, 20);
  console.log(global.teamSel);
  const joinMessage = `{33ff88}[JOIN] {FFFFFF}${username} (ID: ${id}) has joined the server.`;
  sampNodeLib.SendClientMessageToAll(COLOR.WHITE, joinMessage);
  for (let i = 0; i < 50; i++) {
    sampNodeLib.SendClientMessage(id, COLOR.WHITE, " ");
  }
  sampNodeLib.SendClientMessage(
    id,
    COLOR.WHITE,
    "Welcome to {33ff88}SA:MP node.js {FFFFFF}server."
  );
});
//# sourceMappingURL=main.js.map
