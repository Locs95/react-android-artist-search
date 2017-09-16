import React,{ Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { StyleSheet,
	AppRegistry, 
	View, 
	ScrollView,
	Text, 
	Button, 
	TextInput, 
	Image } from 'react-native'
import axios from 'react-native-axios'

export default class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			data: []
		}
		this.searchQuery = this.searchQuery.bind(this);
	}

    searchQuery() {
       if(this.state.query !== ''){
       	 //console.log(this.state.query);

       	// this.state.query = '';

       	 const API_KEY = 'ed8643665c40615a00558d29adc6d001';
    	 const BASE_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=${API_KEY}&format=json`;
         
         

         var query = this.state.query;
    	 var url = `${BASE_URL}&artist=${query}`;

    	 //var response = axios.get(url);
     //  var response = [];
       this.state.data = [];
       fetch(url).then((response) => response.json())
       .then(responseJson => {
           this.setState({
              data: this.state.data.concat(responseJson)
           });
           // console.log(JSON.stringify(responseJson));
       })


       }

    }



    renderList(artistData) {
       


        const name = artistData.artist.name;
        const image = artistData.artist.image.slice('#text')[3];
        const content = artistData.artist.bio.summary;
        console.log(image);

    	return(
    		<View key={Math.random()} style={{alignItems: 'center'}}>
    		   <Text>{name}</Text>
    		   <Image style={{width: 380, height: 380}} source={{uri: image['#text']}} />
    		   <Text style={{margin: 20}}>{ content }</Text>
    	    </View>
    	)


    }



	render() {
		return(
		
	
		    <View style={styles.screen}>
		      
		    
		      <Text style={styles.caption}>{this.state.query}</Text>
				<TextInput
				  style={{ height: 40, width: '100%'}}
				  onChangeText={(query) => this.setState({query})}
				  value={this.state.query}
				/>
				<Button
				   onPress={this.searchQuery}
				   color="green"
				   title="search artist"
				 />
                 
                  <ScrollView contentContainerStyle={styles.contentContainer}>
				  {
			   	     (this.state.data.length !== null) ? this.state.data.map(this.renderList) : <Text></Text>
			   	  }
			   	   </ScrollView>
			 
			  </View>
           
		
		 

		)
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	caption: {
		fontSize: 20,
		textAlign: 'center'
	},
	contentContainer: {
		
		 paddingVertical: 20,
		 width: 'auto',
		 alignItems: 'center',
		 justifyContent: 'center'
	},
	contentContainerInner: {
		 flex: 1,
		 paddingVertical: 20,
		 width: 'auto',
		 alignItems: 'center',
		 justifyContent: 'center'
	}
})

//AppRegistry.registerComponent('SearchBar', () => SearchBar);
