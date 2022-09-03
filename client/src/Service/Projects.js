const getProjects = async () => { 

    try{ const resp = await fetch(' https://portfolioo.yassminebouk.site/projects'); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getProjects