import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {showAllFinishedOrders} from '../helpers/itemAction';

class showFinishedOrdersScreen extends Component {

constructor(){
  super()
  this.state = {
    id: '',
    gasname: '',
    litre:'',
    price:'',    
    gastype : '',
    progress : '',
  };
}
componentDidMount() {
  this.props.showAllFinishedOrders();
 
}
  render() {
   
    const {FinishedOrders} = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>Finished Orders</Text>
        <ScrollView>
          {FinishedOrders.FinishedOrders.map((Order, index) => (
            <View style={styles.pcs} key={index}>
              <TouchableOpacity>
               <Text>Number:{index} </Text>
               <Text>id:{Order.id}</Text> 
               <Text>litre:{Order.litre} gasname: {Order.gasname} price: {Order.price} </Text>
               <Text>gastype: {Order.gastype} </Text>
               <Text>progress: {Order.progress}</Text>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
          <TouchableOpacity onPress={()=> window.location.reload()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
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
    pcs: {
      padding: 20,
      backgroundColor: '#696969',
      borderColor: '#090909',
      borderWidth: 5,
      borderRadius: 10,
      marginBottom: 5,
    },
  });

  const mapStateToProps = (state) => {
    return {
      FinishedOrders: state.FinishedOrders,
    };
  };
  export default connect(mapStateToProps, {showAllFinishedOrders})(showFinishedOrdersScreen);