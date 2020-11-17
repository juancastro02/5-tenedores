import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favorites from '../screens/Favorites'


export default function FavoriteStack(){

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen
                name='favorites'
                component={Favorites}
                options={{
                    title: 'Restaurantes Favoritos'
                }}
                />
        </Stack.Navigator>
    )
} 