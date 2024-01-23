const userInput = document.getElementById('userInput');
const button = document.getElementById('button');
const msgToUser = document.getElementById('msgToUser');
const inputPage = document.getElementById('inputPage');
const gitHubCard = document.getElementById('gitHubCard');

function hasWhiteSpace(githubID) {
    return githubID.indexOf(' ') >= 0;
}
function validateUserID(githubID) {
    if (githubID == "") {
        msgToUser.textContent = "Please enter your github ID";
    } else if (hasWhiteSpace(githubID)) {
        msgToUser.textContent = "Enter your github ID without spaces";
    } else {
        msgToUser.textContent = "Proceeding on your github ID";
        msgToUser.style.color = "green";
        return getAPIlink(userInput.value);
    }
}

function getAPIlink (githubID) {
    return `https://api.github.com/users/${githubID}`
}

function creatAndAppendCard(data) {
    inputPage.style.display = "none";

    let div = document.createElement("div");
    div.classList.add("user-card")

    let photo = document.createElement("img");
    photo.src = data.avatar_url;
    photo.classList.add("user-card-img");
    div.appendChild(photo);

    let name = document.createElement("h1");
    name.classList.add("user-card-elements");
    name.innerHTML = data.name;
    div.appendChild(name);

    let location = document.createElement("h2");
    location.classList.add("user-card-elements");
    if (data.location == null) {
        location.innerHTML = "India";
    } else {
        location.innerHTML = data.location;
    }
    div.appendChild(location);

    let followers = document.createElement("p");
    followers.classList.add("user-card-elements");
    followers.innerHTML = `Followers: ${data.followers}`;
    div.appendChild(followers);
    
    let following = document.createElement("p");
    following.classList.add("user-card-elements");
    following.innerHTML = `Following: ${data.following}`;
    div.appendChild(following);

    let profileURL = document.createElement("a");
    profileURL.innerHTML = "click to see profile";
    profileURL.href = `${data.html_url}`;
    profileURL.target = "_blank";
    profileURL.classList.add("user-card-profile");
    div.appendChild(profileURL);

    gitHubCard.appendChild(div);

    let button = document.createElement("button");
    button.classList.add("user-card-button");
    button.innerHTML = "Create More!";
    button.style.marginTop = "20px";
    button.id = "goHome"
    gitHubCard.appendChild(button);

    const goHome = document.getElementById("goHome");
    goHome.addEventListener("click", () => {
        gitHubCard.style.display = "none";
        inputPage.style.display = "block";
        document.querySelector(".user-card").remove();
        document.querySelector(".user-card-button").remove();
    })
    msgToUser.textContent = "";
}



button.addEventListener('click', () => {
    const userInputValue = userInput.value;
    const requestURL = validateUserID(userInputValue);
    // console.log(requestURL);
    
    if (requestURL) {
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 404) {
                msgToUser.textContent = "Please enter a valid github ID";
                msgToUser.style.color = "rgb(223, 0, 0)";
            } else if (xhr.readyState == 4 && xhr.status == 200) { 
                const data = JSON.parse(this.responseText);
                // console.log(data.name);
                creatAndAppendCard(data);
            }
        }
        xhr.open('GET', requestURL, true)
        xhr.send();
    }
    userInput.value = "";
    gitHubCard.style.display = "block";
})
