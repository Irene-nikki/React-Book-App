import react from "react";
const Card=({book})=>{
    console.log(book)
    return(
        <>
        {
            book.map((item)=>{
                let thumbnail=item.volumeInfo.imageLinks.smallThumbnail;
                return(
                <>       
                <div className="card">
                  <img src="book3.png" alt="" />
                  <div className="bottom">
                <h3 className="title">React Js</h3>
                <p className="amount">&#x20AC;10</p>

            </div>
        </div>
        </>
                )

            })
        }
       
        </>
    )
}
export default Card;