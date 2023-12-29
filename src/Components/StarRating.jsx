import React from 'react'

const StarRating = ({rating,handleRating}) => {
    const stars=(rating)=>{
        var tab=[];
        for(let i=1;i<=5;i++){
            if(i<=rating){
                tab.push(<span style={{color:'gold', cursor:"pointer",fontSize:'30px'}} onClick={()=>handleRating(i)}>★ </span>)
            }
            else{
                tab.push(<span style={{ cursor:"pointer",fontSize:'30px'}} onClick={()=>handleRating(i)}>★ </span>)
            }
        }
        return tab

    }
  return (
    <div>
        {stars(rating)}
    </div>
  )
}
StarRating.defaultProps={
    handleRating:()=>{}
}

export default StarRating