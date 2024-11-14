export async function ApiRequest(endUrl?:any, method?:any,  body?:any) {
    try {    
      const options = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: body
      };    
      try {
        return fetch(endUrl, options)
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          })
      } catch (e) {
        // console.log('error',e) 
      }
    } catch (e) {
      //  console.log('eee',e)
    }
  }