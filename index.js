// Add your code here
/*const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle",
    }),
  };
    fetch("http://localhost:3000/dogs", configurationObject)
const userUrl = "http://localhost:3000/users"*/




 /*const  configurationObjectusers = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${userName}`,
          email: `${userEmail}`,
        }),
      };*/

 

      function submitData( name, email ) {
        return fetch( 'http://localhost:3000/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify( {
              name,
              email
            } )
          } )
          .then( function ( response ) {
            return response.json()
          } )
          .then( function ( object ) {

            const ul = document.getElementById("ul")
            const li = document.createElement("li")
            li.innerText = object.id
           ul.appendChild(li)
     
       } )
          .catch( function ( error ) {
            document.body.innerHTML = error.message
          } )
      }









 /*function submitData (name,email){
    const  configurationObjectusers = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${name}`,
          email: `${email}`,
        }),
      };
    fetch("http://localhost:3000/users", configurationObjectusers)
    .then(r => r.json())
    .then(data => console.log(data))
 }*/


 