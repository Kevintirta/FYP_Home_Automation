import React from "react";

import { connect } from 'react-redux'
import {setNumber} from '../redux/actions/sampleAction'
import { StyleSheet, Text, View, Button } from "react-native";

const UsageGraphScreen = ({onClick, number}) => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Usage Graph Screen</Text>
      <Button title="testing" onPress={()=>onClick( number+1)}></Button>
      <Text>{number}</Text>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  number: state.sample.count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (count) => dispatch(setNumber(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsageGraphScreen)
