
exports.getAbout = (req,res)=>{
    res.send('hello from getAbout')
}

exports.addAbout = (req,res)=> {
    res.send('hello from post router')
}

exports.getAboutId = (req,res)=> {
    res.send('hello from specific  post router')
}

exports.updateAboutId = (req,res)=> {
    res.send('hello from updated  post router')
}

exports.delAboutId = (req,res)=> {
    res.send('hello from delete  post router')
}




