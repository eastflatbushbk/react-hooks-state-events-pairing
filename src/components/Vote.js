import React, {useState} from "react"

function Vote ({upvotes , downvotes}){

  const [upvote , setUpvote ] = useState(upvotes)
  const [downvote , setDownvote] = useState(downvotes)

  function handleUpvote (){
    setUpvote(upvote +1)
  }

  function handleDownvote (){
    setDownvote(downvote +1)
  }


  return(
    <div>
        <button onClick={handleUpvote}>{upvote}👍</button>
        <button onClick={handleDownvote}>{downvote}👎</button>
    </div>
  )
}

export default Vote