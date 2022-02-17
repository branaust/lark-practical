import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import ChatBubble from "../components/ChatBubble";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";
import conversationData from "../conversation.json";
import { DotIndicator } from "react-native-indicators";

const Conversation = () => {
  const [convo, setConvo] = useState([
    conversationData.nodes[conversationData.startNodeId],
  ]);
  const [loading, setLoading] = useState(false);
  const [buttons, setButtons] = useState();

  handleBtnPress = (btn) => {
    let convoCopy = convo;
    setConvo([...convoCopy, btn]);
    setButtons();
  };

  useEffect(() => {
    let convoCopy = convo;
    if (convo[convo.length - 1]?.childrenIds.length === 1) {
      setLoading(true);
      setTimeout(() => {
        setConvo([
          ...convoCopy,
          conversationData.nodes[convo[convo.length - 1].childrenIds[0]],
        ]);
        setLoading(false);
      }, 1500);
    } else if (convo[convo.length - 1]?.childrenIds.length === 2) {
      const buttonNodeIds = conversationData.nodes[convo.length].childrenIds;
      const buttonNodes = [
        conversationData.nodes[buttonNodeIds[0]],
        conversationData.nodes[buttonNodeIds[1]],
      ];

      setButtons(buttonNodes);
    }
  }, [convo]);

  return (
    <SafeAreaView flex="1">
      <StyledScrollView>
        <ChatWrap>
          {convo.map((msg, idx) => (
            <ChatBubble
              type={msg.text ? "received" : "sent"}
              text={msg.text || msg.input.text}
              key={idx}
            />
          ))}
          {loading && (
            <LoadingWrap>
              <DotIndicator color="#f9f9f9" />
            </LoadingWrap>
          )}
        </ChatWrap>
      </StyledScrollView>

      {buttons && (
        <ButtonWrap>
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              text={btn.input.text}
              handlePress={() => handleBtnPress(btn)}
            />
          ))}
        </ButtonWrap>
      )}
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

const LoadingWrap = styled.View`
  align-items: flex-start;
  margin-top: 20px;
`;

export default Conversation;
