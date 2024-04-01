import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import React from "react";
import { LuLibrary } from "react-icons/lu";
import { ReactComponent as CreatePlaylist } from "../../assets/icons/createplaylist.svg";
import { ReactComponent as LikedSongs } from "../../assets/icons/likedsongs.svg";
import { ReactComponent as Episodes } from "../../assets/icons/episodes.svg";

export const mainMenus = [
  { name: "Home", icon: <TiHome /> },
  { name: "Search", icon: <FaSearch /> },
  { name: "Library", icon: <LuLibrary /> },
  { name: "Create Playlist", icon: <CreatePlaylist /> },
  { name: "Liked Songs", icon: <LikedSongs /> },
  { name: "Your Episodes", icon: <Episodes /> },
];
export const topRecommended = [
  "Jazz",
  "Hangover Cure",
  "Your Top songs 2022",
  "Indie",
  "Rock",
  "RADAR",
];
