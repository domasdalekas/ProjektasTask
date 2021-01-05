import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Animated,Button} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {showAll,deleteTank} from './itemAction'

class deleteScreen extends Component{
  constructor(){
    super()
    this.animated=new Animated.Value(0);
    this.state = {
      gasname: '',
      availability: '',
    };
  }
  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated,{
      toValue:1,duration:2000,useNativeDriver:true,
    }).start();
  }
  componentDidMount() {
        this.props.showAll()
    }
    render() {
      const opacity=this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[0,1]
      });
      const translateX= this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[-500,1]
      });
      const {gasTanks} = this.props
        const transform = [{translateX}]
        return (
            <View style={styles.container}>
            <Text style={styles.title}>
            Delete
            </Text>
            <Animated.ScrollView style={[styles.adsContainer,{transform,opacity}]}>
                    {gasTanks.gasTanks.map((gasTank,index)=>(
                        <View style={styles.ads} key={index}>
                            <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={styles.make}>
                              {gasTank.gasname} 
                              {gasTank.availability}      
                            </Text>
                            </View>
                            <View style={styles.deleteButton}>
                                <TouchableOpacity onPress={()=>this.props.deleteTank(gasTank.id)}>
                                    <View style={styles.addButtonContainer}>
                                        <Text style={styles.addButton}>
                                        DELETE
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
               </Animated.ScrollView>
               <Button title="Refresh" onPress={()=>this.animate()}
                >
                </Button>
                </View>
            
        )
    }
}
const mapStateToProps= (state) => {
    return {
        gasTanks: state.gasTanks,
    };
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    deleteButton: {
        flex: 1,
        alignItems: 'flex-end',
      },
      addButton: {
        fontSize: 24,
        lineHeight: 24,
        backgroundColor:"#696969",
      },
    adsContainer: {
      borderTopWidth: 3,
      borderTopColor: '#ddd',
      flex: 1,
    },
    addButtonContainer: {
        width: 100,
        height: 50,
        backgroundColor: '#696969',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
    ads: {
      padding: 20,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 5,
    },
    make: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    model: {
      fontSize: 14,
      color: '#999',
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    fadingContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: 'powderblue',
    },
    fadingText: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
    },
  });
 
  export default connect(mapStateToProps,{showAll,deleteTank})(deleteScreen);