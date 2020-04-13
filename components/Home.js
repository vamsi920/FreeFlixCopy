import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import {width, height} from 'react-native-dimension';
import Icon from "react-native-vector-icons/Feather";
import { Button , Checkbox} from 'react-native-paper';

import Slider from 'react-native-slider';
import Modal from "react-native-modalbox";
export class Home extends Component {
  constructor() {
		super();
		this.state = {
			isOpen: false,
			isDisabled: false,
			swipeToClose: true,
			sliderValue: 0.3,
      opacity:1,
      checked: false,
		};
	}
    static navigationOptions = { header: null };
  render() {
    const Streams = [
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    {
      logo:'../thumb.jpg',
      title:'hiphop radio live'
    },
    ]
    return (
      <View style={styles.container}>
          <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          <Checkbox
        status={this.state.checked ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked: !this.state.checked }); }}
      >
        
      </Checkbox>
      <Text style={{color:'#fff'}}>Checkboxes comes here...</Text>
        </Modal>
      <View style={styles.topBar}>
        <View style={styles.logo}>
        <TouchableOpacity>
        <Image source={require('../logo.png')} style={{width:'80%', height:'100%', marginTop:3}}/>
        </TouchableOpacity>
        </View>
        <View style={styles.drawer}>
        
        </View>
      </View>
      <View style={styles.player}>
      <Image source={require('../ytThumb.png')} style={{width:'100%', height:'100%'}}/>
      </View>
      <View style={styles.streams}>
      <Text style={{color: '#fff' , fontsize:20}}>Live Streams(8)</Text>
      <FlatList
            contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
            data={Streams}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.box1}
                >
                  <Image style={styles.img} source={require('../thumb.jpg')} />
                  <View style={styles.title}>
                    <Text style={styles.boxText} numberOfLines={1}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
      </View>
      <View style={styles.footer}>
      <Button style={{backgroundColor:'#000', width:width(40),borderBottomColor:'#ffbe00', borderWidth:2, height:'100%', justifyContent:'center', alignItems: 'center' }}  mode="contained" onPress={() => this.refs.modal4.open()}>
    Languages
  </Button>
 
  <Button style={{backgroundColor:'#000', width:width(40),borderBottomColor:'#ffbe00', borderWidth:2, height:'100%', justifyContent:'center', alignItems: 'center' }}  mode="contained" onPress={() =>  this.refs.modal4.open()}>
    Category
  </Button>
      </View>
      </View>
    )
  }
}
  const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#4a4a4a',
      alignItems:'center',
      justifyContent:'space-around'
  },
  topBar: {
    width:width(98),
    height: height(7),
    elevation:2,
    flexDirection:'row', 
    justifyContent: 'space-between'
  },
  player: {
    width:width(98), 
    height: height(30),
    backgroundColor:'#000',
    marginTop:10,
    
  },
  streams:{ 
    width:width(98),
    height: height(45),

  },
  footer: {
    width:width(100),
    height:height(13),
    backgroundColor:'#000',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  image:{ 
    width:'100%',
    height:height(10)
  },
  logo:{
    width:width(50),
    justifyContent:'center',
  },
  box1:{ 
    width:width(26),
    height: height(13),
    marginLeft:width(22/4),
    marginTop:height(2),
    marginBottom:height(2)
  },
  img:{
    width:'100%',
    height: '80%',
    borderRadius:5 ,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  boxText:{
    color: '#fff'
  },
  title:{ 
    backgroundColor: '#000'
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300,
    backgroundColor:'#000'
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }
});
export default Home
