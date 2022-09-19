var users=[
    {
    username:"Mohan",
    password:"azure01"
    },
    {
    username:"Naveen",
    password:"azure02"
    },  
    {
    username:"Siva",
    password:"azure03"
    },
    {
    username:"Selva",
    password:"azure04"
    },
]
function getInfo(){
    var username=document.getElementById("name").value;
    var password=document.getElementById("password").value;
   for(var i=0; i<users.length; i++){
    if(username == users[i].username && password == users[i].password){
        alert("Welcome  "+username);
        return
    }
    else{
        alert("Invalid Username or password");
        
       }
   }

}