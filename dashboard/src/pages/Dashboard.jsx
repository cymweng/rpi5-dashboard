import Clock from "../components/Clock";
import Weather from "../components/Weather";
import AlbumArt from "../components/AlbumArt";
import MusicPlayer from "../components/MusicPlayer";
import StatusBar from "../components/StatusBar";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="topBar">
        <Clock />
        <Weather />
      </div>

      <div className="musicSection">
        <AlbumArt />
        <MusicPlayer />
      </div>

      <StatusBar />

    </div>
  );
}