import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';

function  getUsers() {
	console.log('yo')
	var allDataJson
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
    		let data = response
		console.log(data);
	/*console.log(data, 'data succesfully saved')
		let goodData = JSON.parse(data)
		console.log(goodData , 'parsesd')*/
			
			})
}

/*let allDataJson = getUsers()
console.log('all data is :', allDataJson)
let allDataJs = Json.parse(allDataJson)*/
var names = 'my name is joshua'
var nameAlert = Alert.alert (names)

export default class App extends React.Component {
	render() {
    		return (
			<ScrollView>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1, flexDirection: 'column'}}>
	 	     			<View style={styles.container}>
	    		    				<Text>email here</Text>
						</View>
						<View style={styles.container}>
	        					<Text>Id:</Text>
						</View>
					</View>
				<View style={styles.container}>
					<Button
	  					onPress={Alert.alert (names)}
	  					title="???"
	  					color="#841584"
	  					accessibilityLabel="I wonder who it is ?"
					/>
				</View>
				</View>
			</ScrollView>
   	 	);
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
