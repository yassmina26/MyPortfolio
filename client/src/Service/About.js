const getAbout = async () => { 

    try{ const resp = await fetch(' http://localhost:5000/about '); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getAbout