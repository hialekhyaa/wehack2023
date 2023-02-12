import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Recipe from '../screens/Recipe';

const screens = {
    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    }
};

const config = {
    cardShadowEnabled: false,
    cardStyle: {backgroundColor: 'red'}

};

const HomeStack = createStackNavigator(screens, config);

export default createAppContainer(HomeStack);