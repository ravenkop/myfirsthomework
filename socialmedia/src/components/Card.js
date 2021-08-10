import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import {useState} from 'react';

function Card(props) {

  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
    inputValue,
    handleChange,
    // handleSubmit,
    addComment
  } = props;

  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(comment == "") {
      return;
    }
    props.addComment(comment);
    setComment("");

  }


  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <form className="addComment" onSubmit={e => handleSubmit(e)}>
        <label>Say something...</label>
        <input className="comments" type="text" value={comment} onChange={e => setComment(e.target.value)}></input>
        <button className="postText">Post</button>
      </form>
    </div>
  );
}

export default Card;
{/* <form className="addComment">
<label>Say something...</label>
<input className="comments" type="text" value={inputValue} onChange={handleChange}></input>
<button className="postText" onClick={RANDO} id="HELP">Post</button>
</form> */}