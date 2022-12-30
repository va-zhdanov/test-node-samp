import {
   GetPlayerName,
   OnPlayerConnect,
   SendClientMessage,
   SendClientMessageToAll,
} from "samp-node-lib";
import { COLOR } from "./vars";

// import globals
import "./vars/globals";

// import parts
import "./parts";

OnPlayerConnect(({ playerid: id }) => {
   const username = GetPlayerName(id, 20);

   console.log(global.teamSel);

   // send join message
   const joinMessage = `{33ff88}[JOIN] {FFFFFF}${username} (ID: ${id}) has joined the server.`;
   SendClientMessageToAll(COLOR.WHITE, joinMessage);

   // clear chat
   for (let i = 0; i < 50; i++) {
      SendClientMessage(id, COLOR.WHITE, " ");
   }

   // welcome message
   SendClientMessage(
      id,
      COLOR.WHITE,
      "Welcome to {33ff88}SA:MP node.js {FFFFFF}server."
   );
});
