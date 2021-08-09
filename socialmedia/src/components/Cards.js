import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import { useState } from "react";

function Cards() {
  const commentsOne = [
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
  ];

  const commentsTwo = [
    {
      user: "dora",
      text: "You have such creative posts!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "Nanee",
      text: "Very cool! ",
      id: 5,
    },
  ];
  const [comment, setComment] = useState([
    {
      user: "another person",
      time: "recently",
      id: 6
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newCommentsList = [
    {
      user: "current user",
      text: {inputValue},
      id: 7
    }]
    console.log(newCommentsList);
    setComment([newCommentsList]);
  }
  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="rastafarri"
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
        handleSubmit={handleSubmit}
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
        handleSubmit={handleSubmit}
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="doraexplorer93"
        likedByNumber={90}
        hours={4}
      />
      <Card
        accountName="dababy251489"
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
