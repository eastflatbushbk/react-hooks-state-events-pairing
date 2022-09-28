function Comments ({comments}) {
    const listOfComments = comments.map((item) =>{
        return <div key={item.id}>
                <h2>{item.user}</h2>
                <p>{item.comment}</p> 
               </div>
     })

    return (
        <div>
        <h1>{listOfComments.length} {listOfComments<= 1 ? 'Comment' : 'Comments'}</h1>
         {listOfComments}
      </div>
    )
}

export default Comments