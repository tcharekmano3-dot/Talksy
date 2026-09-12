function sayhello()
{
    console.log("hello ")
    console.log("this is running from another file")
}

//the name you give the exported function = the name of the function you will export 
module.exports.hi = sayhello; 

