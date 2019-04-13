import React from 'react';
import { Button, View,Image,ScrollView,TouchableOpacity,StyleSheet, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
  };
  render() {
    return (
     <ScrollView style={{marginTop:20,backgroundColor:'F5FCFF'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image  style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/briyani.jpeg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Lucknow Briyani</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test')}  style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/hyd.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Hyderbad Briyani</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('test1')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/mur.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Murdabad Briyani</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test2')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/gal.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Galouti Kebab</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test3')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/gul.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Gulab Jamun</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test4')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/kem.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Keema Samosa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test5')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/aloo.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Aloo Samosa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test6')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/kal.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Kalmi Kebab</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test7')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/eggs.jpg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Egg in a Blanket</Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test8')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/ger.jpeg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>German Stollen Bread </Text>
      </TouchableOpacity>    
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test9')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/mos.jpeg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Mocha Cashew Butter </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test10')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/pan.jpeg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Achari Paneer Tikka </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test11')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
      <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={require('./assets/mal.jpeg')}/>
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Murg Bemisal  </Text>
      </TouchableOpacity>         
              </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lucknow Briyani',
  };
  render() {
    return (
      <ScrollView >
        
        <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 15  }} 
    source={require('./assets/briyani.jpeg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}>Lucknow Briyani</Text> 
    <Text style={{
      paddingLeft:10,
      marginTop:10,
      fontSize: 20,
    fontWeight: 'bold',
    }}>Ingredients of Lucknowi Mutton Biryani(4 Serving)</Text>
    <Text style={{padding:10,fontSize:10}}>-1 inches cinnamon stick              -10 clove</Text>
    <Text style={{padding:10,fontSize:10}}>-2 teaspoon cumin seeds             -1 teaspoon fennel seeds</Text>
    <Text style={{padding:10,fontSize:10}}>-2 teaspoon coriander seeds        -1 teaspoon black pepper</Text>
    <Text style={{padding:10,fontSize:10}}>-2 star anise                                 -1/2 teaspoon mace powder</Text>
    <Text style={{padding:10,fontSize:10}}>-3 green cardamom                      -2 black cardamom</Text>
    <Text style={{padding:10,fontSize:10}}>-1/2 kilograms mutton                  -3 teaspoon ghee</Text>
    <Text style={{padding:10,fontSize:10}}>-2 teaspoon sal                           -4 tablespoon refined oil</Text>
    <Text style={{padding:10,fontSize:10}}>-1/2 cup milk                                -1 pinch saffron</Text>
    <Text style={{padding:10,fontSize:10}}>-2 cup basmati rice                      -1 large onion</Text>
    <Text style={{
      marginTop:10,
      paddingLeft:10,
      fontSize:20,
      fontWeight:'bold',
    }}>For Marination</Text>
    <Text style={{padding:10,fontSize:10}}>-1 teaspoon ginger paste                  -1 teaspoon garlic paste</Text>
    <Text style={{padding:10,fontSize:10}}>-1 teaspoon turmeric </Text>
    <Text style={{padding:10,fontSize:10}}>-1 teaspoon red chilli powder</Text>
    <Text style={{padding:10,fontSize:10}}>-2 teaspoon crushed to paste cashews </Text>
    <Text style={{padding:10,fontSize:10}}>-1 pinch garam masala powder</Text>
    <Text style={{padding:10,fontSize:10}}>-4 teaspoon yoghurt (curd)</Text>
    <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to make Lucknowi Mutton Biryani</Text>
    <Text style={{marginTop:15,paddingLeft:10,fontSize:20}}>Step1</Text>
    <Text style={{padding:10,fontSize:12}}>To make the garam masala, dry roast all the whole spices. Once they are roasted, transfer them to a masala grinder and grind them finely. Simultaneously, wash the basmati rice and drain excess water. Boil the rice in double the amount of water and remove from fire and drain till it is half done.</Text>
    <Text style={{marginTop:7,paddingLeft:10,fontSize:20}}>Step2</Text>
    <Text style={{padding:10,fontSize:12}}>For mutton marination, to half kg mutton, add ginger-garlic paste, turmeric and chilli powder. Then add cashew nut paste, garam masala, curd and whisk it. Cover it with a lid and put it in the refrigerator for an hour. This process is important to allow the flavour of spices to infuse in the mutton.</Text>
    <Text style={{marginTop:7,fontSize:20,paddingLeft:10}}>Step3</Text>
    <Text style={{padding:10,fontSize:12}}>Thinly slice the onion and deep fry it in some oil and keep aside. Now, let the meat come to room temperature. Season the meat with salt. Add ghee and oil in the handi. Once it is sufficiently hot, transfer the marinated meat from the bowl to the handi.</Text>
    <Text style={{marginTop:7,paddingLeft:10,fontSize:20,}}>Step4</Text>
    <Text style={{padding:10,fontSize:12}}>Stir and cook the meat for a few minutes on high flame, till it is roasted. Cover with the lid and simmer it for another half an hour. Meanwhile, add saffron to the milk and mix well so that the saffron releases its colour and aroma in the milk. Now layer the mutton with cooked rice and add the saffron-milk mixture.</Text>
    <Text style={{marginTop:7,fontSize:20,paddingLeft:10}}>Step5</Text>
    <Text style={{padding:10,fontSize:12}}>Add a little salt, garam masala, fried onions and the remaining ghee over it. Add mace powder and mix well. Cover the handi with the lid and weight it down with something heavy. Keep the flame low. Cook for about half an hour. Serve it hot with raita or salad of your choice. You can also serve it with shorba.</Text>
      </ScrollView>
    );
  }
}


class Test extends React.Component {
  static navigationOptions = {
    title: 'Hyderabad Briyani',
  };
  render() {
    return (
      <ScrollView>
        <Image
         style={{position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        paddingLeft:10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
        }}
        source={require('./assets/hyd.jpg')}
         />
         <Text style={{
         fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft:80
         }}>Hyderabad Briyani</Text>
         <Text style={{marginTop:10,
         paddingLeft:10,
         fontSize:20,
         fontWeight: 'bold'
         }}>Ingredients of Hyderabad Biryani</Text>
         <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>-11/2 kg chicken cut into large pieces</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 tbsp ginger garlic paste</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 tbsp red chilli powder</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tsp turmeric powder </Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-salt as per taste</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 bunch coriander leaves</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 bunch mint leaves</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-8 green chillies</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tsp caraway seeds shahi zeera</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-4 cloves loung</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 cinnamon sticks dalchini</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-4 cardamoms elaichi</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>- 4 black pepper corns kali mirch</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 cups fried golden brown onions</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 cups yogurt</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tbsp oil</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tbsp lemon juice</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-tsp garam masala powder</Text>
         <Text style={{paddingLeft:10,fontSize:20,fontWeight:'bold',marginTop:10}}>
         For the Rice:
         </Text>
         <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>*Water for boiling</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*1 kg basmati rice</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*2-3 cloves loung</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*1 cinnamon stick dalchini</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*2-3 cardamoms elaichi</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*1 tsp caraway seeds shahi zeera</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*2 - 3 black pepper corns kali mirch</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*1 tbsp lemon juice</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>*salt - to taste</Text>
         <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>For Dum Seasoning:</Text>
         <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>-2 tbsp oil</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 tbsp coriander leaves</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 tbsp mint leaves</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-2 tbsp fried onions</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tbsp lemon juice</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 cup saffron flavored milk</Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 tbsp ghee  </Text>
         <Text style={{paddingLeft:10,fontSize:10}}>-1 cup water</Text>
         <Text style={{marginTop:10,paddingLeft:10,fontSize:20,fontWeight:'bold'}}>For Garnishing:</Text>
         <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>-Fried onions</Text>
         <Text style={{
           fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'
         }}>How to make Hyderabadi Chicken Biryani </Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:5}}>1.Wash the chicken pieces well with lemon juice and water and strain the chicken completely.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>2.Add ginger garlic paste into it.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>3.Add red chilli powder, turmeric powder, salt and mix well.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>4.In a blender add a bunch of coriander leaves, a bunch of mint leaves, green chillies, add a pinch of salt and make the paste called as green paste or hara masala paste.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>5-Add the green paste to the chicken marinade.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>6.Add whole garam masala that is cardamom, cinnamon, cloves, black pepper corns, caraway seeds.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>7.Mix the whole mixture well.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>8.Crush the onions and add into the marinade.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>9.Add beaten yogurt and mix well.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>10.Add oil over the marinade and mix well.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>11.Add garam masala powder and lemon juice and mix well.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>12.Check the taste of salt and add if required.</Text>
         <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>13.Rest this marinade inside the refrigerator for about 45 minutes to 1 hour.</Text>
          <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Procedure To Cook The Rice:</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Firstly, wash the basmati rice and soak it for about 35 minutes.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Take a cooking pot, add water generously into it.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Into the water, add salt as per taste, cinnamon stick, cloves, shahi zeera, black pepper corns, cardamoms.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Bring the water to a boil.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.When the water starts boiling, add the soaked rice into it.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Cook the rice for about 6 - 7 minutes until it is three fourth done.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.Strain the rice completely and rest the strained rice aside.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}></Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}></Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:20,fontWeight:'bold'}}>Procedure To Give The Dum:</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.In a cooking pot, to the base add oil and spill it all over the base.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>2.Add the chicken marinade into it and spread it evenly.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>3.Add the rice which has been cooked into it.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>4.Spread the rice evenly all over the marinade. </Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>5.Season the rice with coriander leaves, mint leaves, fried onions.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>6.Add lemon juice all over the rice.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>7.Add saffron flavored milk(2 saffron strands added into the 1/4th cup of milk to get orange red color).</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>8.Add ghee into it.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>9.Add little water all over the rice(optional).</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>10.Make a chapathi dough and seal the lid and the cooking pot tightly with the dough.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>11.Switch on the flame, put the cooking pot onto the flame.</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>12.Dum the biryani on sim flame for about 45 minutes.</Text>
          <Text style={{paddingLeft:10,marginTop:2,fontSize:20,fontWeight:'bold'}}>Procedure to take the biryani out:</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Take the biryani out with a spatula from one corner side and when taken out, the spoon has to go deep down and should come out with the rice and chicken.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Serve the lip smacking biryani on a serving plate.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Garnish the hyderabadi chicken dum biryani with fried onions.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Also it can be garnished with coriander and mint leaves.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.And also serve it with lemon slices and raw onion rings</Text>
          </ScrollView>
         
      
     
    );
  }
}

class Test1 extends React.Component {
  static navigationOptions = {
    title: 'Moradabadi  Briyani',
  };
  render() {
    return (
      <ScrollView>
           <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
                 }} 
    source={require('./assets/mur.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}>Moradabadi  Briyani</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients to make Moradabadi Yakhni Chicken Biryani</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>Basmati rice - 500 gram (washed and soaked in Water for 1 hour )</Text>
        <Text style={{paddingLeft:10,fontSize:20,fontWeight:'bold',marginTop:10}}>For the yakhni-</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Chicken- 800 gram</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Salt -2 tbsp</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Water -1 litre</Text>
        <Text style={{paddingLeft:10,fontSize:20,marginTop:10,fontWeight:'bold'}}>For the yakhni potli -</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Onion sliced -1big size</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Ginger crushed -1 inch</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Garlic - 6-7 cloves big size</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Green Chilli - 4-5 no or as per taste</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Cumin seeds - 1 tbsp (table spoon)</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Whole black Pepper 8-10 nos.</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Clove - 4 numbers</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Fennel Seeds (saunf) -1tsp</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Bay Leaf - 2 nos.</Text>
        <Text style={{paddingLeft:10,fontSize:20,fontWeight:'bold',marginTop:10}}>For the yakhni chicken biryani Rice</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>Oil - 5 tablespoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Shahi Jeera Cumins- 1 table spoon  </Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Green Cardamom - 4 numbers</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Bay Leaf - 2</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Onion sliced - 1 big size</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Coriander powder - 1tablespoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Cumin powder - 1teaspoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Garam Masala powder - 1 tablespoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Fennel powder(Saunf powder) - 1/2 teaspoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Tomato chopped - 1 big size</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Ginger garlic paste - 1 tablespoon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Salt - 1 tablespoon or as per taste</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Chilli powder - 1/2 teaspoon or as per taste</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Lemon - 1 number </Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Milk - 2 tablespoon(optional)</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>Kesar or orange colour - 1/4 teaspoon(optional)</Text>
        <Text style={{
           fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'
         }}>How to make Moradabadi Chicken Biryani </Text>
         <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Clean rice with fresh water and soak in clean water for 30 minutes to 1 hour.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Take all the ingredients like cumin, fennel,cinnamon,cardamom,bay leaf, whole pepper, cloves, green chillies, crushed ginger, garlic, sliced onions.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Make a potli from a cotton cloth and add all the ingredients in a potli and tie the knot.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Take 5 litre cooker to this add chicken, 1 litre water , 2 tablespoon salt or as per your taste and add the ready yakhni potli .</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Cover the lid of a pressure cooker and cook on high flame till one whistle comes or more it depends on the quality of the chicken. Chicken should be cooked 3/4 only.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Squeeze out water from the potli and discard this potli.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.Separate the chicken pieces from the water (yakhni or broth)</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>8.Preparing for biryani-we need all these ingredients that is oil, bay leaves, shahi jeera ,2-3 green cardamom, onions sliced, ginger garlic paste, cumin powder coriander powder, garam masala powder, tomato chopped.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>9.Heat the pressure cooker on a medium high flame. Add oil, bay leaf, cumin seeds, green cardamom fry for about 30 seconds, add the sliced onion .</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>10.Fry till onions turns golden brown. Add ginger garlic paste and fry for 30 seconds.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>11.Add in boiled chicken and fry for 2-3minutes.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>12.Add in coriander powder, jeera powder, garam masala powder, fennel powder, chilli powder and chopped tomato, salt to taste (or 1 tbsp) fry till tomato turns soft and chicken and masala incorporates well</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>13.Add in yakhni(broth) water(one litre aprox) add in 1/2 litre more normal water allow it to boil.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>14.Add in 500gm soaked basmati rice and 1 lemon juice.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>15.Cover the lid of pressure cooker and cook on high flame till one whistle comes.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>16.Switch off the flame and wait till all the pressure is gone. Take two table spoon milk and add few strands of saffron or orange color and mix, pour this on biryani rice and cover the lid.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>17.Open the pressure cooker lid and mix with a serving spoon lightly. Let it rest for 20 -30 min.</Text>
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>18.Now your yummy Moradabadi yakhni chicken biryani is ready to be serve hot with cucumber, onion curd raita, or mint and coriander chutney</Text>
         <Text style={{paddingLeft:10,marginTop:10,fontSize:12,fontWeight:'bold'}}>Tips</Text> 
         <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>Rice used in yakhni biryani should be aged more than one year. In a same way you can prepare mutton biryani also.</Text>
      </ScrollView>
    );
  }
}

class Test2 extends React.Component {
  static navigationOptions = {
    title: 'Galouti Kebab',
  };
  render() {
    return (
      <ScrollView>
       
       <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover', 
       }} 
    source={require('./assets/gal.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}>Galouti Kebab</Text> 
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients:</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-1/2 kg minced meat</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Grind together:</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:10}}>-75-100 gm chopped raw papaya</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Salt to taste</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1 Tbsp chopped ginger</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1 Tbsp chopped garlic</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-8 cloves</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Seeds of 2 black cardamoms</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-2 tsp poppy seeds-roasted and dry ground</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-4 peppercorns</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1/2 tsp pieces of cinnamon</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-2 Tbsp dessicated coconut-lightly roasted</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-2 blades of mace</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-5 green cardamoms</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1 tsp chilli powder</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1/4 tsp grated nutmeg</Text>
        <Text style={{paddingLeft:10,fontSize:20,marginTop:10,fontWeight:'bold'}}>For the Kebabs:</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>-1 cup sliced onions-fried brown and crisp in 1/2 cup ghee</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1/4 cup finely chopped coriander leaves</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1 Tbsp finely chopped green chillies</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-3 Tbsp roasted gram flour</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-1 egg</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Ghee to pan fry the kebabs</Text>
        <Text style={{paddingLeft:10,fontSize:10}}>-Lemon juice to sprinkle over the kebabs</Text>
        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Galouti Kebab</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1. Marinate the minced meat in the ground ingredients for 4-5 hours.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>2. Mix together the coriander leaves, green chillies, gram flour and egg.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>3. Add to the meat and work at it for some time, almost kneading it like a dough.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>4. Shape mixture into round patties of desired size, and refrigerate for half an hour or so.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>5. Heat the ghee in a heavy-based frying pan or griddle.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>6. Fry the kebabs, browning first one side and then the other, over medium heat.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>7. Arrange them on a serving dish, sprinkle lemon juice and serve.</Text>

      </ScrollView>
    );
  }
}

class Test3 extends React.Component {
  static navigationOptions = {
    title: 'Gulab Jamun',
  };
  render() {
    return (
      <ScrollView>
       <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
         }} 
    source={require('./assets/gul.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}>Gulab Jamun</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Gulab Jamun</Text> 
        <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>100 Gram Khoya (firmly packed)</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>1 tbsp Refined flour or soojee</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>1/4 tsp Baking soda</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>2 cups Sugar</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>2 cups Water</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>2 tbsp Milk (mixed with a little water)</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>4 Green cardamoms (slightly crushed)</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>Ghee</Text>
        <Text style={{paddingLeft:10,marginTop:2,fontSize:10}}>Cube of bread</Text>
        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Gulab Jamun</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.With the heel of your palm or the base of a flat metal bowl, mash the khoya, so that no grains remain.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>2.Mix in the flour and baking soda and knead into firm dough. You can use a food processor too</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>3.The dough should be firm but pliable and should not feel dry. If it does feel dry, wet your hands and work the dough again.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>4.Shape the dough into marble-sized balls (jamuns) that are smooth and creaseless. The shape can be round or oblong.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>5.Heat ghee in the kadahi till a piece of dough tossed in comes up at once.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>6.Lower heat and fry a cube of bread till light brown (this lowers the temperature of the ghee).</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>7.Lift out bread and add as many jamuns as will fit in, without one touching the other.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>8.Keeping the heat low, fry these till a golden brown all over.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>9.Drain the jamuns out of the ghee, and fry the next lot, increasing the heat for a few seconds and then lowering it again before adding the jamuns.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>10.Keep the gulab jamuns aside till the syrup is ready.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>11.Mix the sugar and water and place over low heat, stirring till the sugar dissolves. Make sure it does not boil.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>12.Increase the heat once the sugar dissolves, and then bring mixture to a boil.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>13.Add the milk and water mixture and continue boiling over high flame, without stirring.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>14.Skim off any scum that collects on the sides of the pan.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>15.Cook till syrup thickens a bit. A finger dipped in slightly cold syrup should form a coating on it for a few seconds.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>16.Take syrup off stove and cool for a minimum of half an hour. Strain through a fine nylon sieve or muslin cloth.</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>17.Add cardamom and bring syrup to a boil again</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>18.Add the fried gulab jamuns to it and put off the heat. Let jamuns soak for at least half an hour before serving.</Text>
      </ScrollView>
    );
  }
}

class Test4 extends React.Component {
  static navigationOptions = {
    title: ' Keema Samosa ',
  };
  render() {
    return (
      <ScrollView>
       <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
        }} 
    source={require('./assets/kem.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}> Keema Samosa </Text>
       
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Keema Samosa With Yogurt Dip</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:5}}>-50 Gram Onion</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-5 Gram Whole garam masalas</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-250 Gram Keema</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-1 Tbsp Hung curd</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-10 Gram Ginger-garlic paste</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-250 Gram Refined flour</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-1 Tbsp Garam masala</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>-4-5 Gram Ginger, chopped</Text>
        <Text style={{paddingLeft:10,fontSize:10,marginTop:3}}>15-20 Gram Dry Fruits</Text>
        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Keema Samosa with Yogurt Dip</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Marinate the keema with ginger-garlic paste, red chilli powder, salt, turmeric, coriander powder, curd. Mix well and keep aside for 20 minutes.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Heat the oil, add the whole garam masala, sliced onions and saute until they turn a golden brown.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Add the marinated keema to the oil and cook well. Add the chopped ginger to the keema. Add the dry fruits.</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>For the samosa:</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Add salt to refined flour along with oil to make a stiff dough.</Text>
        <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>2.Portion into small balls. Roll into pancakes. Add the keema to pancake and shape (crescent shaped).</Text>
        <Text style={{paddingLeft:10,fontSize:12,marginTop:3}}>3.Fry till cooked.</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>For the dip:</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Mix the hung curd, castor sugar, salt, cardamom powder, rose water and mix well.</Text>
        </ScrollView>
    );
   }
  }
  class Test5 extends React.Component {
    static navigationOptions = {
      title: ' Aloo Samosa ',
    };
    render() {
      return (
        <ScrollView>
         <Image style={{   position: 'relative', // because it's parent
          top: 2,
          marginTop: 10,
          borderColor: 'yellow', 
          alignItems: 'center',
          alignContent: 'center',
          alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
           }} 
      source={require('./assets/aloo.jpg')}
     />
     <Text style={{    fontSize: 20,
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'center',
          alignContent: 'center',
          color: '#a9a9a9',
          paddingLeft: 80}}> Aloo Samosa </Text>
          <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Aloo Samosa</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-500 gm potatoes</Text>
          <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>For the dough:</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-500 gm wheat flour</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-50 ml ghee or oil</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gm carrom seeds</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-Salt</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-Water</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-Oil for deep frying the samosas</Text>
          <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>For the tempering:</Text>
          <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-50 ml ghee</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gm cumin seeds</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gm turmeric powder</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-3 gm red chilli powder</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gm green chillies</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gm ginger</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gm garlic</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1 lime</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gm coriander leaves</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-Salt</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-100 gm green peas</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gm chaat masala powder</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gm fennel seeds</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gm garam masala</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-25 gm chopped cashew nuts</Text>
          <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Aloo Samosa</Text>
          <Text style={{paddingLeft:10,fontSize:12,marginTop:5}}>1.Cook the potatoes until soft, peel and mash.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Chop the green chillies, garlic, ginger and the coriander leaves.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Mix all the ingredients for the dough except water and rub thoroughly. Sprinkle water and make a hard dough. Set aside for about 10 minutes.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Divide the dough into round portions as per the size of the samosas required.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Heat the ghee and add cumin, when crackling add garlic and saute.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Add the rest of the ingredients excluding the final four and sauté for 5 minutes. Mix in the rest of the ingredients, including the potatoes and mix well.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.Roll each portion of dough into a thin oval shape cut into 2 semi-circles. Take a semi-circle. Apply water on the straight edge of the semi-circle. Hold the semi-circle in your hand, fold the straight edge, bringing together the watered edges, seal the watered edges into a triangular pocket.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>8.Stuff the potato mixture and then seal the upper edges. Repeat with the rest.</Text>
          <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>9.Deep fry in oil till golden brown and serve with a mint or a tamarind chutney.</Text>
          </ScrollView>
      );
     }
    }

    class Test6 extends React.Component {
      static navigationOptions = {
        title: ' Kalmi Kebab ',
      };
      render() {
        return (
          <ScrollView>
             <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover', }} 
    source={require('./assets/kal.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}> Kalmi Kebab</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Kalmi Kebab</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-500 Gram Chicken thigh leg</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 cup Yogurt</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1 tsp Ginger-garlic paste</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 tbsp Lemon juice</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Turmeric powder</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 tsp Caraway seeds</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-4 tsp Cashew nut powde</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 tsp Green cardamom powder</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Black pepper (crushed)</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 cup Fresh cream</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-Refined oil</Text>
        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,marginTop:10,alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Kalmi Kebab</Text>
        <Text style={{fontSize:12,marginTop:5,paddingLeft:10}}>1.Take yogurt in a bowl. Add ginger garlic paste, lemon juice, turmeric powder with cashew nut powder and mix it well.</Text>
        <Text style={{fontSize:12,marginTop:3,paddingLeft:10}}>2.Add cardamom powder, crushed peppercorns, caraway seeds and cream and mix well with the above paste.</Text>
        <Text style={{fontSize:12,marginTop:3,paddingLeft:10}}>3.Afterwards take chicken coat it well, place in refrigerator to marinate for 24 hours.</Text>
        <Text style={{fontSize:12,marginTop:3,paddingLeft:10}}>4.Heat oil in a pan. Take chicken, place on it and fry till turns golden in colour. Flip and cook other side too for at least 10-12 minutes.</Text>
        <Text style={{fontSize:12,marginTop:3,paddingLeft:10}}>5.Lastly, serve hot with mint chutney, pickled onions and side salad.</Text>

          </ScrollView>
        );
      }
    }

    class Test7 extends React.Component {
      static navigationOptions = {
        title: ' Egg in a Blanket  ',
      };
      render() {
        return (
          <ScrollView>
             <Image style={{   position: 'relative', // because it's parent
        top: 2,
        marginTop: 10,
        borderColor: 'yellow', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
        }} 
    source={require('./assets/eggs.jpg')}
   />
   <Text style={{    fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 80}}>Egg in a Blanket </Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Egg In A Blanket</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Eggs</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Brown bread slices, sliced</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Tbsp Butter</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-To taste Chilli flakes</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-To taste Oregano</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-To taste Salt</Text>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Egg in a Blanket</Text>
        <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Using a heart-shaped cookie cutter, cut out the centre of each of the bread slices.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Heat 1 Tbsp butter in a pan and place one bread slice on it. Keep the flame on low, and let it brown. Then flip it on the other side.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Slowly break an egg into the heart-shaped cavity. Cover the pan with a lid, and let it cook for 3-4 minutes. Check if the egg has cooked as per your liking.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Slide it onto a plate and repeat the process with the other bread slice.</Text>
        <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Season with salt, chilli flakes and oregano. Serve hot.</Text>
</ScrollView>
        );
   }
  }

  class Test8 extends React.Component {
    static navigationOptions = {
      title: ' German Stollen Bread  ',
    };
    render() {
      return (
      <ScrollView>
      <Image style={{   position: 'relative', // because it's parent
      top: 2,
      marginTop: 10,
      borderColor: 'yellow', 
      alignItems: 'center',
      alignContent: 'center',
      alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
       }} 
       source={require('./assets/ger.jpeg')}/>
      <Text style={{    fontSize: 20,
      alignItems: 'center',
      position: 'relative',
      justifyContent: 'center',
      alignContent: 'center',
      color: '#a9a9a9',
      paddingLeft: 80}}>German Stollen Bread</Text>
      <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of German Stollen Bread</Text>
      <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-500 gms flour</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-200 ml lukewarm water</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gms yeast</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-100 gms raisins, cranberries, citrus peel (chopped), nuts</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-30 ml rum</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-50 gms sugar</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 gms salt</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 gms ground cinnamon</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 eggs</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-50 gms butter</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-150 gms marzipan</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-150 gms butter (melted and cooled)</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-powder sugar (for dusting)</Text> 
       <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make German Stollen Bread</Text>
      <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Soak the dry fruits in rum and ground cinnamon for few days preferably 1 month.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.In a bowl beat sugar and butter. Add eggs and beat again.</Text>
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Mix the yeast in lukewarm water and add flour and salt and make a dough.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Mix the rum soaked nuts and dry druits in the dough. Also add the sugar butter mixture.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Keep the dough aside for 15 minutes.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Roll the dough into small portions and fill marzipan and wrap it.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.Keep the rolled bread again at room temperature for 30 minutes</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>8.Bake the bread in OTG at 170 degrees for approx 25 minutes.</Text> 
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>9.Take out the bread. Let it cool.</Text>    
      <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>10.Do brushing with butter and sprinkle powder sugar for dusting.</Text>      
      </ScrollView>
      );
 }
}

class Test9 extends React.Component {
  static navigationOptions = {
    title: ' Mocha Cashew Butter  ',
  };
  render() {
    return (
    <ScrollView>
    <Image style={{   position: 'relative', // because it's parent
    top: 2,
    marginTop: 10,
    borderColor: 'yellow', 
    alignItems: 'center',
    alignContent: 'center',
    alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',
     }} 
     source={require('./assets/mos.jpeg')}/>
    <Text style={{    fontSize: 20,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#a9a9a9',
    paddingLeft: 80}}>Mocha Cashew Butter</Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Mocha Cashew Butter</Text>
    <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>-3 Cups Cashews, salty</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 Cup Butter (softened)</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 Cup Chocolate chips (semi sweet)</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 tsp Instant coffee granules</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 tsp Water</Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Mocha Cashew Butter</Text>
    <Text style={{paddingLeft:10,marginTop:5,fontSize:10}}>1.Place cashews in a food processor.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>2.Cover and process until finely ground.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>3.Add half of the butter; process until smooth.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>4.Transfer to a small bowl.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>5.In a small saucepan, combine the chocolate chips, coffee granules, water along with remaining butter.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>6.Cook and stir over low heat until smooth.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>7.Stir into cashew mixture.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>8.Top with additional cashews if desired.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>9.Store in the refrigerator</Text>
    </ScrollView>
    );
  }
}

class Test10 extends React.Component {
  static navigationOptions = {
    title: ' Achari Paneer Tikka ',
  };
  render() {
    return (
    <ScrollView>
    <Image style={{   position: 'relative', // because it's parent
    top: 2,
    marginTop: 10,
    borderColor: 'yellow', 
    alignItems: 'center',
    alignContent: 'center',
    alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover'  }} 
     source={require('./assets/pan.jpeg')}/>
    <Text style={{    fontSize: 20,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#a9a9a9',
    paddingLeft: 80}}>Achari Paneer Tikka</Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Achari Paneer Tikka</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 tsp Pickle gravy</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-250 gram Paneer (cottage cheese)</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1 tsp Coriander seeds</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Fenugreek seeds (methi dana)</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/2 tsp Onion seeds (Kalonji)</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 cup Hung curd</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1 tsp Ginger-garlic paste</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-to taste Salt</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Red chilli powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Garam masala powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1/4 tsp Mustard powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-A pinch of Turmeric powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 tbsp Oil</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-A few sprigs Fresh mint (pudina)</Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Achari Paneer Tikka</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>1.Dry roast coriander seeds, fenugreek seeds, onion seeds till fragrant. Set aside to cool.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Place hung curd in a bowl, add ginger-garlic paste, salt, red chilli powder, garam masala powder, mustard powder, pickle gravy, turmeric powder and mix well.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Crush the roasted spices in a mortar with the pestle. Add a little of the crushed spices to the yogurt and mix well.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Cut cottage cheese into 1 inch cubes and add to the curd mixture and mix well so that all the cottage pieces are well coated. Let them marinate for around 15 minutes.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Heat oil in a non stick pan. String the cottage cheese cubes onto satay sticks and place them in the pan.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Cook, rotating the sticks, so that the cottage cheese cubes get evenly cooked all around.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.7.Arrange them on a serving plate, garnish with mint sprig and serve hot.</Text>
    </ScrollView>
    );
  }
}


class Test11 extends React.Component {
  static navigationOptions = {
    title: ' Murg Bemisal  ',
  };
  render() {
    return (
    <ScrollView>
    <Image style={{   position: 'relative', // because it's parent
    top: 2,
    marginTop: 10,
    borderColor: 'yellow', 
    alignItems: 'center',
    alignContent: 'center',
    alignSelf:'center',
        width:'96%',height:200,resizeMode:'cover',  }} 
     source={require('./assets/mal.jpeg')}/>
    <Text style={{    fontSize: 20,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#a9a9a9',
    paddingLeft: 80}}>Murg Bemisal </Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold'}}>Ingredients Of Murg Bemisal</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-160 Gram Chicken breast</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-15 Gram Cheese</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Green chilli</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Ginger</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-To taste Salt</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Whole jeera</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-5 Gram Garlic</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-100 Gram Onion</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-60 Gram Tomato paste</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-15 Gram Desi ghee</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-15 Gram Cashew paste</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Turmeric powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Red chilli powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Yellow chilli powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Jeera powder</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-1 Gram Kasoori methi</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-2 Gram Garam masala</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:10}}>-10 Ml Cooking oil</Text>
    <Text style={{paddingLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',alignItems:'center',backgroundColor:'#42f4ee'}}>How to Make Murg Bemisal</Text>
    <Text style={{paddingLeft:10,marginTop:5,fontSize:12}}>1.Clean the chicken breast and flatten it with a hammer.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>2.Stuff it with cheese and chicken mince. Roll it.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>3.Marinate with curd and Indian spices. Grill in the tandoor.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>4.Take a pan, add oil, whole jeera, garlic and sauté for 2 minutes.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>5.Add the chopped onion, haldi powder, tomato paste, cashew paste. Cook till it start to lose the oil.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>6.Add the Indian spices, desi ghee, butter and cream.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>7.In a clay pot place the tandoor cooked chicken roll and top it with the gravy.</Text>
    <Text style={{paddingLeft:10,marginTop:3,fontSize:12}}>8.Garnish with grated cheese</Text>
    </ScrollView>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    test: Test,
    test1: Test1,
    test2: Test2,
    test3: Test3,
    test4: Test4,
    test5: Test5,
    test6: Test6,
    test7: Test7,
    test8: Test8,
    test9: Test9,
    test10:Test10,
    test11: Test11
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
     color: 'red'
  },
  text: {
     color: '#4f603c'
  }
})
