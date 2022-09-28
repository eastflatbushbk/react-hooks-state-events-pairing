import React , {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments"
import Vote from "./Vote.js";


function App() {
  console.log("Here's your data:", video);
  const [hiden , setHiden] = useState(true)

  function handleComments(){
    setHiden(!hiden)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <h2>{video.views} Views | uploaded {video.createdAt}</h2>
      <Vote upvotes={video.upvotes} downvotes={video.downvotes}/>
      <h4>
        <button onClick={handleComments}>{hiden ? "Show comments" : "Hide Comments"}</button>
      </h4>
      <hr/>
      {/* <Comments comments={video.comments}/> */}
      {hiden ? null : <Comments comments={video.comments}/>  }
    </div>
  );
}

export default App;
