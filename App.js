import { FontAwesome6, Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.innerbox}>
      <View style={styles.header}>
        <Image source={require('./dp.jpg')} style={styles.profilePicture}/>
        <View><Text style={styles.profileName}>Refiloe Rampai</Text>
        <Text style={styles.activeStatus}>1hr ago</Text></View>
        <Image style={styles.threeDots}/>
      </View>
      <Text>Posted by <Text>Refiloe Rampai</Text>. 
      This got to be my dream car</Text>
      <View style={styles.innerOfInnerBox}>
        <Image source={require('./dreamcar.jpg')} style={styles.biggerPicture}/>
      </View>
      <Text style={styles.forLikes}>8.8K likes</Text>
      <View style={styles.footer}>
      <SimpleLineIcons name="like" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.forfooter}>Like</Text>
        <FontAwesome6 name="comment-alt" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.forfooter}>Comment</Text>
        <Fontisto name="share-a" size={24} color="black" style={marginRight=0 }/>
        <Text style={styles.forfooter}>Share</Text>
      </View>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },

  header:{
    width:'100%',
    height:'3.2em',
    borderWidth:'.01em',
    display:'flex',
    flexDirection:'row',
    justifyContent:'no-space',
    borderRadius:'.5em',
    borderColor:'grey',
    padding:'.1em',
  },

  innerbox:{
    marginTop: '3%',
    height:'70vh',
    width:'24%',
    backgroundColor:'white',
    borderRadius:5,
    padding:'.3em',
  },
  activeStatus:{
    color:'grey',
    fontSize:'.7em',
    marginLeft:'1em',
  },
  profileName:{
    fontWeight:'bold',
    textTransform:'capitalise',
    fontSize:'.8em',
    marginLeft:'1em',
  },
  innerOfInnerBox:{
    backgroundColor:'blue',
    width:'100',
    height: '55%',
    objectFit:'fill',
    borderRadius:'.2em',
  },

  footer:{
    marginTop:'.5em',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    borderTopWidth:'.02em',
    borderTopColor:'grey',

  },
  forfooter:{
    margin:0,
    padding:0,
  },
  forLikes:{
    margin:'.5em',
  },
  profilePicture:{
    borderWidth:'.03em',
    borderRadius:'100%',
    backgroundColor:'black',
    height:50,
    width:50,
    margin:0,
  },
  biggerPicture:{
    width:'100%',
    height:'100%',
  }
});