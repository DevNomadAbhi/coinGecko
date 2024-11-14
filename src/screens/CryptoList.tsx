import { useEffect } from "react"
import { Text, View } from "react-native"
import { ApiRequest } from "../services/Api"

const CryptoList=()=>{
    useEffect(()=>{getCryptoList()},[])

async function getCryptoList () {
    let data=await ApiRequest(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,'GET')
    console.log(data)
}

    return(
        <View style={{flex:1}}>
<Text>
    123
</Text>
        </View>
    )
}
export default CryptoList