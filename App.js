import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero:0,
      botao:'Vai',
      ultimo:null
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao:'Vai'})
    }else{
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1})
      },100);
      this.setState({botao:'Parar'})
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        ultimo:this.state.numero.toFixed(1),
        numero:0,
        botao:'Vai'
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.cronometro}
          source={require('./src/assets/img/timerIcon.png')}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>
              {this.state.botao}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>Ultimo Tempo: {this.state.ultimo} </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00aeef'
  },
  timer:{
    marginTop:-115,
    color:'white',
    fontSize:65,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection:'row',
    marginTop:70,
    height:40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff",
    height: 40,
    margin:17,
    borderRadius:9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:"#00aeef"
  },
  areaUltima:{
    marginTop:40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  }
});