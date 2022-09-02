const getCert = async () => { 

    try{ const resp = await fetch(' https://portfolio.yassminebouk.site/certifications '); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getCert