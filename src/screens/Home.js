import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
 } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView } 
    from 'react-native-gesture-handler' 
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';

const DATA = [
    {
        id:1,
        title:"KASUS TERPAPAR",
        number:"1 432 223"
    },
    {
        id:2,
        title:"TOTAL KEMATIAN",
        number:"14 554"
    },
    {
        id:1,
        title:"TOTAL SEMBUH",
        number:"832 881"
    },
]

export default class Home extends Component {

    renderCard(item){
      return(  
       <View key={item.id} style={styles.cardContainer}>
           <View style={styles.card}>
               <View>
                   <Text style={styles.title}>{item.title}</Text>
                   <Icon
                       name="ios-remove"
                       size={40}
                       color="red"
                       style={{marginTop:25}}
                   />
                   <Text style={styles.number}>{item.number}</Text>
               </View>
               <View style={{marginLeft:150}}>
                   <Icon name="md-options" size={24} color="#FFF"/>
                   <Text style={styles.textCovid}>COVID-19</Text>
               </View>
           </View>
       </View>
       );
   }

    renderNoMoreCards(){
        <View title="Semua Selesai">
            <Text style={styles.noCard}>TIDAK ADA DATA LAGI</Text>
            <Button backgroundColor="#03A9F4" title="Muat lagi"/>
        </View>
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require('../images/unnamed.jpg')}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width:'50%'}}>
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                            />
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                                style={styles.minusIcon}
                            />
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../images/1.jpeg')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>CORONA  INFO</Text>

                    <View style={styles.colContainer}>
                        <Text style={styles.textGlobal}>GLOBAL</Text>
                        <Text style={styles.textIndonesia}>INDONESIA</Text>
                        <View style={styles.reloadContainer}>
                            <Icon
                                name="md-refresh"
                                size={24}
                                color="red"
                            />
                        </View>
                    </View>
                </ImageBackground>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
                <ScrollView
                    style={{marginTop:170}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <Cards
                        onPress={() => this.props.navigation.navigate('Detail')}
                        icon="md-pulse"
                        title="TOTAL KASUS"
                        bg="red"
                        numbber="113 045"
                    />
                    <Cards
                        icon="ios-git-network"
                        title="TOTAL SEMBUH"
                        bg="#FFF"
                        numbber="53 045"
                    />
                    <Cards
                        icon="ios-heart-dislike"
                        title="TOTAL MENINGGAL"
                        bg="#FFF"
                        numbber="23 045"
                    />

                </ScrollView>
                <View style={{marginBottom:34}}>
                    <Buttons
                        name="DONATUR"
                        number="1 444"
                    />
                    <Buttons
                        name="NON-DONATUR"
                        number="4 249"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c2732"
    },
    cardContainer:{
        height:150,
        width:320,
        alignSelf:"center",
        backgroundColor:"#6A706E",
        borderRadius:30
    },
    card:{
        height:150,
        width:260,
        paddingTop:20,
        paddingHorizontal:30,
        backgroundColor:"#2b3240",
        borderRadius:30,
        flexDirection:"row"
    },
    title:{
        color:"#6A706E",
        width:100,
        fontSize:12,
        fontWeight:"bold"
    },
    number:{
        color:"#FFF",
        width:100,
        fontSize:22,
        fontWeight:"bold",
        marginTop:-10
    },
    textCovid:{
        transform:[{rotate: "-90deg"}],
        color: "#3a4b4f",
        fontSize:14,
        width:90,
        marginLeft:-35,
        fontWeight:"bold"
    },
    noCard:{
        marginBottom:10,
        color:'#FFF',
        alignSelf:"center"
    },
    map:{
        height:200,
        paddingTop:25,
        paddingHorizontal:20,
        marginBottom:15
    },
    col:{
        flexDirection: 'row'
    },
    minusIcon:{
        marginTop:-20,
        marginLeft:5
    },
    avatarContainer:{
        width:"50%",
        alignItems:"flex-end"
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20
    },
    textDash:{
        color:"#FFF",
        fontSize:20,
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    },
    colContainer:{
        flexDirection:'row',
        paddingHorizontal:30,
        marginTop:40,
        alignItems:'center',
    },
    textGlobal:{
        fontWeight:'bold',
        fontSize:16,
        color:'red'
    },
    textIndonesia:{
        fontWeight:'bold',
        fontSize:16,
        paddingHorizontal:30,
        color:"#6A706E"
    },
    reloadContainer:{
        backgroundColor:"#FFF",
        elevation:2,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:50
    }
})