import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, Text, View, Image,Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {fiboCal} from './fiboListSlice';

const UserList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const screenState = useSelector((state: RootState) => state.fiboList);
  const handleOnEndReached = (type) => () => {
    dispatch(fiboCal({data:screenState.fibo,type:type}));
  };
  return (
    <>
      <View style={styles.box}>
        <Text style={styles.header}> Fibonacci </Text>
        <Text style={styles.text}> {screenState.fiboValue} </Text>
        <View style={styles.boxBtn}>
             <View style={styles.item}>
              <View style={styles.btn1}>
                <Button title="+" color="#fff" onPress={handleOnEndReached('plus')}/>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.btn2}>
                <Button title="-" color="#fff" onPress={handleOnEndReached('minus')}/>
              </View>
            </View>
        </View>
        </View>
    </>
  );
};
const styles = StyleSheet.create({
  
  header : {
    fontSize : 20,
    marginBottom : 15
  },
  boxBtn : {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  btn1 :{
    backgroundColor : '#2196f3'
  },
  btn2 :{
    backgroundColor : '#cccccc'
  },
  text : {
    fontWeight : '900',
    fontSize : 30,
  },
  box : {
    backgroundColor: 'powderblue',
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,
     bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  item : {

    width : '50%',
    flexDirection : 'column',
    paddingHorizontal : 10
  }
 
});
export default UserList;