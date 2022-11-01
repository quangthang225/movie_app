// Load the module
import React, {Component} from 'react';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {
  View,
  Button,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';


class VideoPlayerScreen extends Component {
  constructor(props) {
    super(props);
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Video
          source={{
            uri: this.props.route.params.item.source,
          }}
          ref={ref => {
            this.player = ref;
          }}
          fullscreen={true}
          fullscreenOrientation={'landscape'}
          controls={true}
          resizeMode={'stretch'}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onEnd={this.onEnd} // Callback when playback finishes
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayerScreen;
