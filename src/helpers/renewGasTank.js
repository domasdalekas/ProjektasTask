import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {editGasTank,showAll} from './itemAction'

class RenewGasScreen extends Component {
  componentDidMount() {
    this.props.showAll()
}
constructor(){
    super()
    this.state = {
      gasname: '',
      availability: '',
    };
  }
  makeChange(availability) {
    this.setState({availability})
  }
  textChange(gasname) {
    this.setState({gasname})
  }
 
render() {
    const {gasTanks} =this.props;
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
        Renew
        </Text>
        <ScrollView style={styles.adsContainer}>
        {gasTanks.gasTanks.map((gasTank,index)=>(
                    <View style={styles.ads} key={index}>
                        <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={styles.make}>
                          {gasTank.gasname} {gasTank.availability}      
                        </Text>
                        <TextInput
                         style={styles.input}
                          value={this.availability}
                          placeholder="Availability"
                         onChangeText={(text) => this.makeChange(text)}
                          />
                          <TextInput
                          style={styles.input}
                          value={this.gasname}
                          placeholder="Name"
                          onChangeText={(text) => this.textChange(text)}
                        />
                        </View>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity onPress={()=>this.props.editGasTank(this.state.gasname,this.state.availability,gasTank.id)}
                            style={styles.addButton}
                            >
                            <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>
                             EDIT
                            </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                      
                    </View>
                ))}
           </ScrollView>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    inputContainer: {
      backgroundColor: '#000000',
      borderTopColor: '#000000',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
      width: 200,
    },
    inputWrapper: {
      flex: 2,
    },
    input: {
      height: 80,
      padding: 7,
      backgroundColor: '#110f0f',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      flex: 1,
      marginBottom: 5,
    },
    addButtonText: {
      fontSize: 24,
      lineHeight: 24,
    },
    addButton: {
      width: 200,
      height: 100,
      backgroundColor: '#696969',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  const mapStateToProps= (state) => {
    return {
      gasTanks : state.gasTanks,
    };
  };
  export default connect(mapStateToProps,{showAll,editGasTank})(RenewGasScreen);
