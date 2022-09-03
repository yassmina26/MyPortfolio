const getProjects = async () => { 

    try{ const resp = await fetch(' https://portfolio.yassminebouk.site/projects'); 
    const respJson = await resp.json();
     return respJson; }

     catch(e){
         console.log(e.message) } }

 export default getProjects