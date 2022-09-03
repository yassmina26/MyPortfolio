const getAbout = async () => { 

    try{ const resp = await fetch(' https://portfolioo.yassminebouk.site/about '); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getAbout