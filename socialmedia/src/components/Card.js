import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

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
    handleSubmit
  } = props;

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
      <div className="addComment">
        <label>Say something...</label>
        <input className="comments" type="text" value={inputValue} onChange={handleChange}></input>
        <button className="postText" onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
}

export default Card;
