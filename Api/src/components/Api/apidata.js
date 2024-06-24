// import React from 'react'
export const apidata = async (key) => {
    const res = await fetch('https://fakestoreapi.com/' + key);
    if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
    }else{
        throw new Error ("Invalid response from server");
    }
    
}

// export default apidata;


























// if the url is not available or the server is not responding or user entered wrong url then
// if(!res.ok)
    // throw new Error ("res.statusText");
// if the url is available and the server is responding then