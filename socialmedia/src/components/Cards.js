import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import { useState } from "react";

function Cards() {
  const [commentsOne, setCommentsOne] = useState([
    {
      user: "raggedymuffin",
      text: "Never seen something so cool!!",
      id: 1,
    },
    {
      user: "therealadamsandler",
      text: "Like X 2000000!",
      id: 2,
    },
    {
      user: "mapquest",
      text: "Woot, woot!!!",
      id: 3,
    },
  ]);


  const [commentsTwo, setCommentsTwo] = useState([
    {
      user: "dora",
      text: "You have such creative posts!",
      id: 4,
    },
  ]);

  const [commentsThree, setCommentsThree] = useState([
    {
      user: "Nanee",
      text: "Very cool! ",
      id: 5,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function addNewComment(content, commentList) {


    if(commentList == 1) {

      const newComment = {user: "boba.gal", text: content, id: (commentsOne.length + 1)};

      setCommentsOne([...commentsOne, newComment]);
  }
    if(commentList == 2) {

      const newComment = {user: "boba.gal", text: content, id: (commentsTwo.length + 1)};

      setCommentsTwo([...commentsTwo, newComment]);
  }
    if(commentList == 3) {

      const newComment = {user: "boba.gal", text: content, id: (commentsThree.length + 1)};

      setCommentsThree([...commentsThree, newComment]);
  }

}

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="rastafarri"
        inputValue={inputValue}
        handleChange={handleChange}
        addComment={content => addNewComment(content, 1)}
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatogottso"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapquest2003"
        inputValue={inputValue}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsandler"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dababy251489"
        inputValue={inputValue}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="doraexplorer93"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;
