import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Restaurant from '../screens/Restaurant'
// import Favorites from '../screens/Favorites'
// import TopRestaurants from '../screens/TopRestaurants'
import TopRestaurantsStack from './TopRestaurantesStack'
// import Search from '../screens/Search'
import SearchStack from './SearchStack'
// import Account from '../screens/Account'
import RestaurantStack from './RestaurantsStack'
import FavoriteStack from './FavoritesStack'
import AccountStack from './AccountStack'
import { Icon } from 'react-native-elements'


export default function Navigation(){

    const Tab = createBottomTabNavigator() 

    return(
        <NavigationContainer>
            <Tab.Navigator
                inicialRouteName='restaurant'
                tabBarOptions={{
                    inactiveTintColor: '#646464',
                    activeTintColor: '#00a680'
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route,color)
                })}
            >
                <Tab.Screen
                    name='restaurant'
                    component={RestaurantStack} 
                    options={{
                        title: 'Restaurantes'
                    }}
                    />
                <Tab.Screen 
                    name='favorites' 
                    component={FavoriteStack}
                    options={{
                        title: 'Favoritos'
                    }}
                    />
                <Tab.Screen 
                    name='top-restaurants'
                    component={TopRestaurantsStack}
                    options={{
                        title: 'Top 5'
                    }}
                    />    
                <Tab.Screen 
                    name='search'
                    component={SearchStack}
                    options={{
                        title: 'Buscar'
                    }}
                    />    
                <Tab.Screen 
                    name='account'
                    component={AccountStack}
                    options={{
                        title: 'Cuenta'
                    }}
                    />    
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route,color){

    let iconName;

switch (route.name) {
    case 'restaurant':
        iconName = 'compass-outline'
        break;
    case 'favorites':
        iconName = 'heart-outline'
        break;  
    case 'top-restaurants':
        iconName = 'star-outline'
        break;    
    case 'search':
        iconName = 'magnify'
        break;  
    case 'account':
        iconName = 'home-outline'
        break;                              
default:
        break;
}


return(
    <Icon type='material-community' name={iconName} size={22} color={color}  />
)

}