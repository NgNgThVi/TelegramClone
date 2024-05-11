import React, { useEffect } from "react";
import { Slot, Stack} from "expo-router";
import { Chat, OverlayProvider } from 'stream-chat-expo';
import { StreamChat } from "stream-chat";



const client = StreamChat.getInstance("t94f95byweya");

const HomeLayout = () => {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "jlahey",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("jlahey")
      );
    };
    connect();
  });

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
      </Chat>
    </OverlayProvider>
    // <Slot/>
  );
};

export default HomeLayout;
