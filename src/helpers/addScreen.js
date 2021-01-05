import React, {Component} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addGas} from './itemAction';

class gasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gasname: '',
      availability: 'Available',
    };
  }
handleSubmit = () => {
  this.props.addGas(this.state.gasname, this.state.availability);
};
makeChange(gasname) {
  this.setState({gasname})
}
  render() {
    return (
        <View style={styles.container}>
        <Text style = {styles.title}>Add new fuel station</Text>
        <View style={styles.addButtonContainer}>
        <TextInput
        style={styles.input}
        value={this.state.gasname}
         placeholder="Fuel station name"
        onChangeText={(text)=>this.makeChange(text)}
         />
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>INSERT</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    pcsContainer: {
      borderTopWidth: 3,
      borderTopColor: '#ddd',
      flex: 1,
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    addButton: {
      width: 120,
      height: 60,
      backgroundColor: '#696969',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    input: {
      height: 20,
      padding: 7,
      backgroundColor: '#110f0f',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 5,
    },
  });
  const mapStateToProps = (state) => {
    return {
      gasTanks: state.gasTanks,
    };
  };
  export default connect(mapStateToProps, {addGas})(gasScreen);