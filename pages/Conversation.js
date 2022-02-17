import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import ChatBubble from "../components/ChatBubble";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";
const conversationData = require("../conversation.json");

const Conversation = () => {
  const [convo, setConvo] = useState([
    conversationData.nodes[conversationData.startNodeId],
  ]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    let convoCopy = convo;
    if (convo[0].childrenIds.length === 1) {
      setConvo([...convoCopy, conversationData.nodes[convo[0].childrenIds[0]]]);
    }
  }, [convo]);

  return (
    <SafeAreaView flex="1">
      <StyledScrollView>
        <ChatWrap>
          {/* <ChatBubble type="received" text="Hello! Welcome to Lark!" />
          <ChatBubble type="received" text="Do you want to lose weight?" />
          <ChatBubble type="sent" text="Yes" /> */}
          {convo.map((msg, idx) => (
            <ChatBubble type="received" text={msg.text} key={idx} />
          ))}
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
