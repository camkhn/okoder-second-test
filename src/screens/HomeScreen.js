import React from 'react'
import {useState, useEffect} from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

function HomeScreen(props) {  
    const { navigation } = props 
    const [gender, setGender] = useState('Male');
    const [height, setHeight] = useState(183);
    const [weight, setWeight] = useState(74);
    const [age, setAge] = useState(19);
 
    function calculateBMI(){
        let heightInMt = height/100;
        let bmi = weight/(heightInMt*heightInMt);

      navigation.navigate('DetailScreen',{bmiValue:bmi.toFixed(1),bmiText:'Normal'})
    }
    return (
      <View style={styles.container}>

         <View style={{flex:8,padding:10,}}>
          <View style={{flex:2,flexDirection:'row'}}> 
          <TouchableOpacity style={[styles.subContainer, gender=='Male' && styles.selectedGender]} onPress={() =>setGender('Male')}>
            
             <View style={{justifyContent:'center',  alignItems:'center'}}>
             <Icon name="male" size={70} color="#ffffff" />
            <Text style={styles.subHeading}>MALE</Text>
          

            </View>   
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.subContainer, gender=='Female' && styles.selectedGender]} onPress={() =>setGender('Female')}>
            <View style={{justifyContent:'center',  alignItems:'center'}}>
                  <Icon name="female" size={70} color="#ffffff" />
                 <Text style={styles.subHeading}>FEMALE</Text> 
            </View>
          </TouchableOpacity> 
        
          </View>
          <View style={{flex:2,flexDirection:'row'}}>
          <View style={styles.subContainer}>
                <Text style={styles.subHeading}>HEIGHT</Text>
                <Text style={styles.numberText}>{height} cm</Text>
                <Slider
    style={{width: 200, height: 40}}
    minimumValue={20}
    maximumValue={250}
    step={1}
    value={150}
    onValueChange={value => setHeight(value)}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  />
           </View> 

          </View>
          <View style={{flex:2,flexDirection:'row'}}>

           <View style={styles.subContainer}>
              <View style={{flex:1}}>
                  <Text style={styles.subHeading}>WEIGHT</Text>
                 <Text style={styles.numberText}>{weight} kg</Text>
             </View>

                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.counterButton} onPress={() => setWeight(weight-1)}>
                     <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.counterButton} onPress={() => setWeight(weight+1)}>
                    <Text style={styles.counterButtonText}>+</Text>
               </TouchableOpacity> 
                </View>
              
           </View>
           <View style={styles.subContainer}>
              <View style={{flex:1}}>
                  <Text style={styles.subHeading}>AGE</Text>
                 <Text style={styles.numberText}>{age}</Text>
             </View>

                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.counterButton} onPress={() => setAge(age-1)}>
                     <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.counterButton} onPress={() => setAge(age+1)}>
                    <Text style={styles.counterButtonText}>+</Text>
               </TouchableOpacity> 
                </View>
              
           </View>

          </View>
        </View> 
       
     
       <TouchableOpacity  style={styles.calculateButton} onPress={() => calculateBMI()}>
            <View style={styles.calculateButton}>
               <Text style={styles.calculateButtonText}>Calculate Your BMI</Text>
          
        </View>
        </TouchableOpacity> 

      </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1442',
    justifyContent:"center",
  },
  subContainer: {
   flex:1,
   margin: 5,
    borderRadius: 8,
    backgroundColor: "#5B5475",
    justifyContent:'center',
    alignItems:'center'

  },
  selectedGender: {  
     backgroundColor: "#666", 
 
   },
  subHeading:{
    fontSize:20,
     fontWeight:'400',
     color:'#ffffff',
     fontFamily:'Kailasa-Bold',
     marginTop:20
  },
  calculateButton:
   {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#D92323", 
  },
  calculateButtonText:{
     fontSize:25,
     fontWeight:'200',
     color:'#ffffff',
     fontFamily:'Kailasa-Bold'
  },
  numberText:{
    fontSize:35,
    fontWeight:'800',
    marginTop:15,
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  },
  counterButton:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#666", 
    height:70,
    width:70,
    borderRadius:35,
    margin:10
  },
  counterButtonText:{
    fontSize:35,
    fontWeight:'800', 
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  }
  
})

export default HomeScreen