// Add your code here

const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
 

function submitData (name,email) {

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      
     return  fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (newObject) {
          console.log(newObject);
          const idElement = document.createElement("p"); // Create a new paragraph element
          idElement.textContent = `New ID: ${newObject.id}`; // Display the new ID
          document.body.appendChild(idElement);
        })
        .catch(error => {
            alert("Unauthorized Access"); // Still shows an alert
            console.log(error.message); //console logging to see if it works

            // Append the error message to the DOM
            const errorElement = document.createElement("p");
            errorElement.textContent = `Unauthorized Access: ${error.message}`;
            document.body.appendChild(errorElement);
        });
}