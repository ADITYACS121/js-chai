//forEach

const coding = ["js", "ruby" , "kotlin", "c++"]

coding.forEach((item)=>(console.log(item)))


const lang =[
{
    languageName :"c++",
    file :["first","second"]
},
{
    languageName:"python",
    file:["third","fourth"]
},
{
    languageName :"javascript",
    file:["fifth","sixth"]
}]

lang.forEach((item)=>(item.file.forEach((val)=>(console.log(item.languageName , val)))))