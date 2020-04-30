import React from 'react'
import {useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native'
import { Container, Label, Content, Form, Button, Item,Text, Input,Spinner } from 'native-base';

function HomeScreen(props) { 
    const API_KEY = "33RYAzWUD61b69g7dfi47DZVuwvi6TTTpoGaUAc0";
    const { navigation } = props
    const [asteroidId, setAsteroidId] = useState('');
    const [loading, setLoading] = useState(false)
 

    async function getAsteriodDetails(){
        setLoading(true);
        let response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/'+asteroidId+'?api_key='+API_KEY);
        if (response.ok) {
          let data = await response.json();
          console.log(data)
          navigation.navigate('DetailScreen',{item:data})
        } else {
          alert("Sorry!!! No Asteriod Not Found");
          
        } 
        setLoading(false);
    }

    async function fetchRandomAsteriod(){
        setLoading(true);
        let response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key='+API_KEY);
        if (response.ok) {
          let data = await response.json();
          let randomNumber  = Math.floor(Math.random() * Math.floor(19)); 
          let singleAsteriod = data.near_earth_objects[randomNumber];
           navigation.navigate('DetailScreen',{item:singleAsteriod})
        } else {
          alert("HTTP-Error: " + response.status);
          
        } 
        setLoading(false);
    }

    return (
        <View style={{flex:1}}>
            {!loading ?<Container style={styles.container}>
        <Content>
          <Form>
          <Item style={styles.item} floatingLabel>
          <Label>Enter Asteroid ID</Label>
              <Input 
              placeholder="Enter Asteroid ID" 
              returnKeyType="search"
              value={asteroidId}
              onChangeText={(value)=>{setAsteroidId(value)}} />
            </Item>
          </Form>
            <View style={styles.item}>
            <Button
            disabled ={!asteroidId!=''}
            onPress={() =>getAsteriodDetails()}
             >
            <Text>Submit</Text>
           </Button>
            </View> 

            <View style={styles.item}>
            <Button
            onPress={() =>fetchRandomAsteriod()}
             >
            <Text>Random Asteroid</Text>
          </Button>
            </View>
        </Content>
      </Container>
 :
 <Container>
     <Spinner color="green"/>
 </Container>
 }
        </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent:"center",
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  item:{justifyContent:"center",alignItems:"center",margin:10,padding:5} 
})

export default HomeScreen