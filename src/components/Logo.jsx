import spotifywhite from "../assets/images/spotifywhite.svg";
import spotifyblack from "../assets/images/spotifyblack.svg";

export function Logo() {
  return (
    <div>
      <img src={spotifywhite} alt="spotifylogo" />
      <img src={spotifyblack} alt="spotifylog" />
    </div>
  );
}
