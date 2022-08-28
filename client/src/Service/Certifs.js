const getCert = async () => { 

    try{ const resp = await fetch(' http://localhost:5000/certifications '); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getCert