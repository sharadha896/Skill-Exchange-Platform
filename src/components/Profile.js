import React from "react";

function Profile(){

const username = localStorage.getItem("username");
const email = localStorage.getItem("userEmail");

return(

<div style={{padding:"40px"}}>

<h2>My Profile</h2>

<h3>Name: {username}</h3>
<p>Email: {email}</p>
<p>Skills Uploaded: 5</p>
<p>Videos Watched: 12</p>
<p>Project Progress: 60%</p>

</div>

)

}

export default Profile;