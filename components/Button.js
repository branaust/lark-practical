import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const Button = ({ text }) => {
  return (
    <TouchableOpacity>
      <ChatBubbleContainer>
        <StyledText>{text}</StyledText>
      </ChatBubbleContainer>
    </TouchableOpacity>
  );
};


const ChatBubbleContainer = styled.View`
  padding: 15px;
  margin: 4px;
  background-color:#41d100;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const StyledText = styled.Text`
  color: #f9f9f9
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
`;

export default Button;
