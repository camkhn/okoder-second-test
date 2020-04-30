import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body,Left,Right } from "native-base";

function DetailScreen(props) {
  const { route } = props
  const asteriod = route.params.item

  return (
    <View style={styles.container}>
            <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Left style={{flex:2}}><Text>Name:</Text></Left>
              <Body style={{flex:4}}><Text>{asteriod.name}</Text></Body>
              
            </CardItem> 
            <CardItem header bordered>
              <Left style={{flex:2}}><Text>JPL URl:</Text></Left>
              <Body style={{flex:4}}><Text>{asteriod.nasa_jpl_url}</Text></Body>
             </CardItem>
             
            <CardItem header bordered>
              <Left style={{flex:4}}><Text>Is Potentially Hazardous:</Text></Left>
              <Body style={{flex:2}}><Text>{asteriod.is_potentially_hazardous_asteroid? 'TRUE':' FALSE'}</Text></Body>
             </CardItem>
          </Card>
        </Content>
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    padding:10
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default DetailScreen