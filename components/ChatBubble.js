import React from "react";
import styled from "styled-components/native";
import ReceivedIcon from "../assets/circled-l.png";

const ChatBubble = ({ type, text }) => {
  return (
    <Wrapper type={type}>
      {type === "received" && <Icon source={ReceivedIcon} />}
      <ChatBubbleContainer type={type}>
        <StyledText type={type}>{text}</StyledText>
      </ChatBubbleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-self: ${({ type }) => (type === "sent" ? "flex-end" : "flex-start")};
  flex-direction: row;
`;

const Icon = styled.Image`
  height: 30px;
  width: 30px;
  align-self: flex-end;
  margin-bottom: 2px;
`;

const ChatBubbleContainer = styled.View`
  padding: 15px;
  max-width: 70%;
  margin: 4px;

  background-color: ${({ type }) => (type === "sent" ? "#41d100" : "#f9f9f9")};
  border-top-left-radius: ${({ type }) =>
    type === "received" ? "25px" : "0px"};
  border-top-right-radius: ${({ type }) => (type === "sent" ? "25px" : "0px")};
  border-bottom-right-radius: ${({ type }) =>
    type === "received" ? "25px" : "0px"};
  border-bottom-left-radius: ${({ type }) =>
    type === "sent" ? "25px" : "0px"};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const StyledText = styled.Text`
  color: ${({ type }) => (type === "sent" ? "#f9f9f9" : "black")};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
`;

export default ChatBubble;
