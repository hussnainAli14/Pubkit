import  React,{useRef, useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';
import Video from 'react-native-video';


const VideoPlayer = () => {
    // const video = useRef(null);
    // const [status, setStatus] = useState({});
  return (

    // Within your render function, assuming you have a file called
    // "background.mp4" in your project. You can include multiple videos
    // on a single screen if you like.
    
    <Video source={require('../../assets/images/video.mp4')}   // Can be a URL or a local file.
          //  ref={(ref) => {
          //    this.player = ref
          //  }}                                      // Store reference
          //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //  onError={this.videoError}               // Callback when video cannot be loaded
           style={styles.backgroundVideo} />
    
    // Later on in your styles..
  
  )
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default VideoPlayer