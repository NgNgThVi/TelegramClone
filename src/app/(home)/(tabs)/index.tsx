import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { router } from "expo-router";

const MainTabScreen = () => {

  return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />;
};

export default MainTabScreen;
