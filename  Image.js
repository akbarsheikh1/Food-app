import React, {Component} from 'react';
import { View,StyleSheet, Image} from 'react-native';


class  ImagesExample extends Component {
  render() {
    return (
        <View style={styles.view}> 
    <Image  
    source={require('./assets/briyani.jpeg')}
   ></Image> 
  
   </View>
    )
  }
}
export default ImagesExample;

const styles = StyleSheet.create ({
    view:{
        
        position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        left: 2     
    },
   
})
