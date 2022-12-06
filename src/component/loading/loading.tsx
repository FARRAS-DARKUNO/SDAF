import Lottie from 'lottie-react-native';
import { View } from 'react-native';

const Loading = () => {
  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie source={require('../../assets/loading1.json')} autoPlay loop />
    </View>
  );
}

export default Loading