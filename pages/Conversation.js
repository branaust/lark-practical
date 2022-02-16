import React from "react";
import styled from "styled-components/native";
import ChatBubble from "../components/ChatBubble";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";

const Conversation = () => {
  return (
    <SafeAreaView flex="1">
      <StyledScrollView>
        <ChatWrap>
          <ChatBubble type="received" text="Hello! Welcome to Lark!" />
          <ChatBubble type="received" text="Do you want to lose weight?" />
          <ChatBubble type="sent" text="Yes" />
        </ChatWrap>
      </StyledScrollView>
      <ButtonWrap>
        <Button text="Yes" />
        <Button text="No" />
      </ButtonWrap>
    </SafeAreaView>
  );
};

const StyledScrollView = styled.ScrollView``;

const ChatWrap = styled.View``;

const ButtonWrap = styled.View`
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: row;
`;

export default Conversation;
