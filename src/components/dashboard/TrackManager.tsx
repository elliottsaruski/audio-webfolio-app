import TrackUpload from "./TrackUpload";

function TrackManager() {
  return (
    <div>
      Track1 <br />
      track2 <br />
      track 3 <br />
      <div></div>
      {/* <button className={sharedstyles.button}>upload audio</button> */}
      <summary>upload</summary>
      <TrackUpload />
    </div>
  );
}

export default TrackManager;
