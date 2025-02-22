let Username = document.getElementById("user");
let submit = document.getElementById("submit");
let myName = document.getElementById("name");
let userId = document.getElementById("userid");
let locality = document.getElementById("location");
let publicrapo = document.getElementById("publicrapo");
let blog = document.getElementById("blog");
let profile = document.getElementById("profile");
//------------------------------------

var data;
var requestUrl = `https://api.github.com/users/bhaveshbishnoi`;




    submit.addEventListener("click", function githubData() {
        if (Username.value === "") {
          alert("Insert Username");
        } else {
          requestUrl = `https://api.github.com/users/${Username.value}`;
    
          console.log(Username.value);
          console.log(requestUrl);

          //-------------------

          let xhr = new XMLHttpRequest();
          xhr.open("GET", requestUrl);
          xhr.onreadystatechange = function () {
            console.log(xhr.readyState);
            if (xhr.readyState === 4) {
              data = JSON.parse(this.responseText);  
          
              userId.textContent = data.id;
              locality.textContent = data.location;
              publicrapo.textContent = data.public_repos;
              blog.textContent = data.blog;
              profile.innerHTML = `<img src="${data.avatar_url}" alt="github profile" />`;
              myName.textContent = data.name
          }
          };
          xhr.send();
          //=================
    
         
        }
         
        
      });
 



