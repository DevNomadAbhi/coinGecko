import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from './ScreenName';
import { RootStackParamList } from './ScreenType';
import { CryptoDetail, CryptoList } from '../screens';




const Navigation=()=>{
    const Stack=createNativeStackNavigator<RootStackParamList>()
    const options={headerShown:false}
    return(
        <Stack.Navigator initialRouteName={ScreenName.List}>
        <Stack.Screen name={ScreenName.List} component={CryptoList} options={options} />
        <Stack.Screen name={ScreenName.Detail} component={CryptoDetail}  options={options} />
      </Stack.Navigator>
    );
    
}
export default Navigation