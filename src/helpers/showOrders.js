import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {showAllOrders} from '../helpers/itemAction';
import {FinishOrder} from '../helpers/itemAction'
import {deleteOrder} from '../helpers/itemAction'

class showOrdersScreen extends Component {
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
handleSubmit = (id,gsn,lit,prc,gt,prog) => {
  this.props.FinishOrder(gsn,lit,prc,gt,"Finished");
  this.props.deleteOrder(id)
  console.log(gsn,lit,prc,gt,prog)
};
componentDidMount() {
  this.props.showAllOrders();
}
  render() {
    const {Orders} = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>Orders</Text>
        <ScrollView>
          {Orders.Orders.map((Order, index) => (
            <View style={styles.pcs} key={index}>
              <TouchableOpacity>
              <Text>id:{Order.id}</Text> 
               <Text>litre:{Order.litre} gasname: {Order.gasname} price: {Order.price} </Text>
               <Text>gastype: {Order.gastype} </Text>
               <Text>progress: {Order.progress}</Text>
               <TouchableOpacity style={styles.addButton} onPress={()=>this.handleSubmit(Order.id,Order.gasname,Order.litre,Order.price,Order.gastype,Order.progress)}>
               <Text>Patvirtinti užsakymą</Text>
              </TouchableOpacity>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
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
    addButton: {
      width: 120,
      height: 60,
      backgroundColor: '#3a3535',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
  });

  const mapStateToProps = (state) => {
    return {
      Orders: state.Orders,
    };
  };
  export default connect(mapStateToProps, {showAllOrders,FinishOrder,deleteOrder})(showOrdersScreen);