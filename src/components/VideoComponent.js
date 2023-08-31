import React, { useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
// import { Video, ResizeMode } from 'expo-av';
import VideoPlayer from "expo-video-player";
// import * as ScreenOrientation from 'expo-screen-orientation'
import { ResizeMode, Video } from "expo-av";
import { Dimensions } from "react-native";
import { setStatusBarHidden } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
const { height, width } = Dimensions.get("window");
const VideoComponent = ({
  visibility = false,
  url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  setObjectiveStatus,
}) => {
  const video = useRef(null);
  const [status, setStatus] = useState(null);
  const [inFullscreen, setInFullscreen] = useState(false);
  const [videoPosition, setVideoPosition] = useState(0);
  const [vedioHeight, setVedioHeight] = useState(0.3);
  const [vedioWidth, setVedioWidth] = useState(1);

  const playbackCallbackObject = {
    callbackFunction: (status) => {
      if (
        status.positionMillis / 60000 / (status.durationMillis / 60000) >
        0.8
      ) {
        setObjectiveStatus("done");
      } else {
        console.log("NOPE");
      }
      console.log(
        status.positionMillis / 60000,
        "=======<<<<<<",
        status.durationMillis / 60000,
        "PERCNETAGE",
        status.positionMillis / 60000 / (status.durationMillis / 60000)
      );
    },
  };

  return (
    <View
      style={[
        {
          height: "100%",
          width: "100%",
          flex: 1,
        },
      ]}
    >
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          source: {
            uri: url,
          },
          ref: video,
        }}
        playbackCallback={playbackCallbackObject.callbackFunction}
        defaultControlsVisible={true}
        timeVisible={true}
        // animation={{
        //   fadeInDuration: 10,
        // }}
        slider={{
          visible: true,
          onSlidingStart: (x) => {
            console.log("onSlidingStart", x);
          },
          onSlidingComplete: (x) => {
            console.log("onSlidingCompelete", x);
          },
          onValueChange: (x) => {
            console.log("+++>>>", x);
          },
        }}
        style={{
          height: height * vedioHeight,
          width: width * vedioWidth,
          videoBackgroundColor: "black",
          height: inFullscreen ? Dimensions.get("window").width : 260,
          width: inFullscreen ? Dimensions.get("window").height : 360,
        }}
        activityIndicator={false}
        // fullscreen={{
        //   visible: true,
        //   enterFullscreen: () => {
        //     setVedioHeight(0.3);
        //     setVedioWidth(1);
        //     setInFullscreen(true);
        //     console.log("FULL SCREEN");
        //     // toggleFullscreen(); // You might want to call toggleFullscreen here as well
        //   },
        //   exitFullscreen: () => {
        //     console.log("Exit SCREEN");
        //     setVedioHeight(0.3);
        //     setVedioWidth(1);
        //     setInFullscreen(false);
        //     // toggleFullscreen(); // You might want to call toggleFullscreen here as well
        //   },
        //   inFullscreen: inFullscreen,
        // }}

        fullscreen={{
          inFullscreen: inFullscreen,
          enterFullscreen: async () => {
            setStatusBarHidden(true, "fade");
            setInFullscreen(!inFullscreen);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.LANDSCAPE
            );
            video.current.setStatusAsync({
              shouldPlay: true,
            });
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, "fade");
            setInFullscreen(!inFullscreen);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.DEFAULT
            );
          },
        }}
      />
      {/* <TouchableOpacity onPress={handleShowTime}>
        <Text>Show Time</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default VideoComponent;
