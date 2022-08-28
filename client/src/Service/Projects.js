const getProjects = async () => { 

    try{ const resp = await fetch(' http://localhost:5000/projects'); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getProjects