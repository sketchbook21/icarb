import React from "react";

export const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const checkoutMessage = [
  { message: "Your friends are going to be so jelly", emoji: "😍" },
  {
    message: "Just because there are slices, doesn't mean you have to share",
    emoji: "😂",
  },
  {
    message: "You know what goes great with pizza? More pizza.",
    emoji: "🍕",
  },
];

export const getCheckoutMessage = () => {
  const messageNumber = Math.floor(
    Math.random() * Math.floor(checkoutMessage.length)
  );
  console.log(messageNumber);
  return (
    <>
      {checkoutMessage[messageNumber].message}
      {"  "}
      <span role="img" aria-label="emoji">
        {checkoutMessage[messageNumber].emoji}
      </span>
    </>
  );
};
