import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
// import StarRating from "../StarRating";
const AddNewMovie = ({handleAdd}) => {
    const [name , setName] = useState("")
    const [date, setDate] = useState("")
    const [rating, setRating] = useState("1")
    const [image, setImage] = useState("")

  let  handelRating=(x)=>setRating(x)

    let handelSubmit=(e)=>{
        e.preventDefault()
        let NewOne={
            id:Math.random(),
            name,image,date,rating
        }
        handleAdd(NewOne);
        setRating("1");
        setName("");
        setDate("");
        setImage("");
        closeModal()
    }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn">Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handelSubmit}>
          <label>Movie Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} />
          <label>Movie Poster</label>
          <input type="url"  value={image} onChange={e=>setImage(e.target.value)}/>
          <StarRating rating={rating} handleRating={handelRating}/>
          <label>Movie Date</label>
          <input type="date" value={date}onChange={e=>setDate(e.target.value)} />
          <div><button className="btn" type="submit">Save</button>
          <button className="btn" onClick={()=>closeModal()}>Cancel</button></div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewMovie;