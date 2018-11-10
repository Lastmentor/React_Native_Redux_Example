import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class CounterApp extends React.Component {  
  render() {
    return (
      <View style={styles.container}>        
          <View style={{flexDirection:'row', width:200, justifyContent:'space-around', alignItems:'center'}}>            
            <Icon name="plus-circle" color="green" size={45} onPress={() => this.props.increaseCounter()}/>           
            <Text style={{fontSize:25,color:'white'}}>{this.props.counter}</Text>
            <Icon name="minus-circle" color="red" size={45} onPress={() => this.props.decreaseCounter()}/>           
          </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
