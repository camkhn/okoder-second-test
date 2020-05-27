import React from 'react'
import { StyleSheet, View, Text,Button ,TouchableOpacity} from 'react-native' 

function DetailScreen(props) {
  const { navigation } = props 
  const { bmiValue,bmiText } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={{flex:8,padding:10,}}>
        <View style={{flex:2,justifyContent:"center",alignItems:"flex-start"}}>
          <Text style={styles.headingText}>Your Result</Text>
        </View>
        <View style={styles.resultContainer}>
            <View style={{flex:2, justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.headingText}>{bmiText}</Text>
            <Text style={styles.headingValueText}>{bmiValue}</Text>
            </View>
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
              <Text style={styles.mutedText}>Normal BMI Range: </Text>
              <Text style={styles.normalText}>18.5 - 25 kg/m2</Text> 
            </View>
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}> 
             <Text style={styles.mutedText}>You Have Normal Body Weight. Good Job! </Text>
  
            </View>
            <View style={{flex:1, justifyContent:'center',alignItems:"center"}}>
                 <TouchableOpacity style={{height:50,width:200, backgroundColor:"#666",justifyContent:'center',alignItems:"center"}}>
                      <Text style={styles.normalText}>Save Result</Text>
                 </TouchableOpacity>
            </View>
        </View>
  
    </View>

 
      <TouchableOpacity  style={styles.goBackButton} onPress={() => navigation.goBack()}>
            <View style={styles.goBackButton}>
               <Text style={styles.goBackButtonText}>Re-Calculate Your BMI</Text>
          
        </View>
        </TouchableOpacity> 

</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    color:'#ffffff',
    backgroundColor: '#1D1442',
    justifyContent:"center",
  },
  mutedText:{
    fontSize:20,
    fontWeight:'800', 
    color:'whitesmoke', 
    textAlign:'center',
    width:250
  },
  normalText:{
    fontSize:20,
    fontWeight:'800', 
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  },
  headingText:{
    fontSize:35,
    fontWeight:'800',
    marginTop:15,
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  },
  headingValueText:{

    fontSize:100,
    fontWeight:'800',
    marginTop:15,
    color:'#ffffff',
    justifyContent:"center",
    fontFamily:'Kailasa-Bold'
  },
  resultContainer:{
    paddingTop:10,
    flex:7, 
     borderRadius: 8,
     backgroundColor: "#5B5475",
     justifyContent:'center',
     alignItems:'center'
  },
  goBackButton:
  {
   flex:1, 
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: "#D92323", 
 },
 goBackButtonText:{
    fontSize:25,
    fontWeight:'200',
    color:'#ffffff',
    fontFamily:'Avenir'
 } 
})

export default DetailScreen