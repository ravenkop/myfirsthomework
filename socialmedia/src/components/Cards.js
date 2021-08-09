import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

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

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="rastafarri"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatogottso"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapquest2003"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsandler"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dababy251489"
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
