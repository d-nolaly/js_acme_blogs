
/*
FSHU INF_651_VB Front-End-Programming Final Project
Dana Nolaly ID: A0012183
December 3, 2024
*/

/* 
 1. Creates a new element that will add to HTML
*/
function createElemWithText(elemType = "p", AddedText = "", className){
    const myElement = document.createElement(elemType);
    myElement.textContent = AddedText;
    if(className) myElement.classList.add(className);
    return myElement;
}

/*
   Sample data to test CreateSelectOptions() from site
*/
const JSONData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

/*
  2. Creates a list of users for option choosing
*/
function createSelectOptions(jsonData){
    if(!jsonData) return;

   const selectOptions = [];
        jsonData.forEach((user) => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        selectOptions.push(option);
    });
    return selectOptions;
}


/*
  3. Toggles between showing comment and hiding comment
*/
function toggleCommentSection(postId){
    if(!postId) return;
    const postElement = document.querySelector(`section[data-post-id="${postId}"]`);
    if(postElement){
        postElement.classList.toggle('hide');
    }
    return postElement;
}

/*
   4. Toggle between showing comment on button and hiding comment
*/
function toggleCommentButton(postId){
    if(!postId) return;
    const button = document.querySelector(`button[data-post-id="${postId}"]`);
    if(button){
        button.textContent = 
            button.textContent === 'Show Comments' ? 'Hide Comments' : 'Show Comments';
    }
    return button;
}

/*
  5. Delete a node/child and all child of that current child
*/
function deleteChildElements(parentElement){
    if(!(parentElement instanceof HTMLElement)) return;
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
    return parentElement;
}

/*
  6. Button in main will toggle when clicked
*/
function addButtonListeners(){
    const mainButtons = document.querySelectorAll('main button');
    if(mainButtons){
        mainButtons.forEach((button) =>{
            const postId = button.dataset.postId;
            if(postId){
                button.addEventListener("click", function (e){toggleComments(e, postId)}, false);
            }
        });
    }
    return mainButtons;
}

/*
  7. Remove the button toggle effect
*/
function removeButtonListeners(){
    const mainButtons = document.querySelectorAll('main button');
    if(mainButtons){
        mainButtons.forEach((button) =>{
            const postId = button.dataset.postId;
            if(postId){
                button.removeEventListener("click", function (e){toggleComments(e, postId)}, false);
            }
        });
    }
    return mainButtons;
}

/*
  8. Creates a comment section with a header and paragraphs (Time efficient)
*/
function createComments(jsonComments){
    if(!jsonComments) return;
    const comments = document.createDocumentFragment();
    jsonComments.forEach((comment) => {
        if(!comment) return;
        const article = document.createElement('article');
        const h3 = createElemWithText('h3', comment.name, 'h3Comment');
        const p1 = createElemWithText('p', comment.body, 'bodyComment');
        const p2 = createElemWithText('p', `From: ${comment.email}`, 'emailComment');
        article.append(h3, p1, p2);
        comments.append(article);
    })
   return comments;
}

/*
  9. Create a selection menu
*/
function populateSelectMenu(jsonData){
    if(!jsonData) return;
    const selectMenu = document.getElementById('selectMenu');
    const optionMenu = createSelectOptions(jsonData);
    optionMenu.forEach((option) => {
        selectMenu.append(option);
    });
    return selectMenu;
}

/*  
  10. Retreives user data from site
*/
const getUsers = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new Error("Status code not in range");
        return await res.json();
    }catch(err){
        console.error(err);
    }
}

/*
  11. Retrieves posts for a choosen user
*/
const getUserPosts = async (userId) => {
    try{
        if(!userId) return;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if(!res.ok) throw new Error("Status code not in range");
        return await res.json();
    }catch(err){
        console.error(err);
    }
}

/*
  12. Retrieves data for a choosen user
*/
const getUser = async (userId) => {
    try{
        if(!userId) return;
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!res.ok) throw new Error("Status code not in range");
        return await res.json();
    }catch(err){
        console.error(err);
    }
}

/*
  13. Retrieves comments from a post for a choosen user
*/
const getPostComments = async (userId) => {
    try{
        if(!userId) return;
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`);
        if(!res.ok) throw new Error("Status code not in range");
        return await res.json();
    }catch(err){
        console.error(err);
    }
}

/*
  14. Display comments in a section
*/
const displayComments = async (postId) => {
    if(!postId) return;
    const section = document.createElement('section');
    section.dataset.postId = postId;
    section.classList.add('comments', 'hide');
    const comments = await getPostComments(postId);
    const fragment = createComments(comments);
    section.append(fragment);
    return section;
}

/*
  15. Create posts with time efficiency in mind
*/
const createPosts = async (jsonData) => {
    const fragment = document.createDocumentFragment();
    if(!jsonData) return;
    for(const post of jsonData){
        const article = document.createElement('article');
        const h2 = createElemWithText('h2', post.title, 'h2Post');
        const p1 = createElemWithText('p', post.body, 'bodyPost');
        const p2 = createElemWithText('p', `Post ID: ${post.id}`, 'idPost');
        const author = await getUser(post.userId);
        const p3 = createElemWithText('p', `Author: ${author.name} with ${author.company.name}`, 'authorPost');
        const p4 = createElemWithText('p', author.company.catchPhrase, 'catchPhrasePost');
        const button = createElemWithText('button', 'Show Comments', 'buttonPost');
        button.dataset.postId = post.id;
        const section = await displayComments(post.id);
        article.append(h2, p1, p2, p3, p4, button, section);
        fragment.append(article);
    }
    return fragment;
}

/*
  16. Display posts in main section
*/
const displayPosts = async (posts) => {
    const main = document.querySelector('main');
    const element = 
        posts ? await createPosts(posts) : createElemWithText('p', 'Select an Employee to display their posts.', 'default-text');
    main.append(element);
    return element;
}

/*
  17. Toggle comments in section and button
*/
function toggleComments(event,postId) {
    if(!event || !postId) return;
    event.target.listener = true;
    const section = toggleCommentSection(postId);
    const button = toggleCommentButton(postId);
    return [section, button];
}

/*
  18. Removes actions done and resets to prevent duplicates
*/
const refreshPosts = async (jsonData) => {
    if(!jsonData) return;
    const removeButtons = removeButtonListeners();
    const mainElement = document.querySelector('main');
    const main = deleteChildElements(mainElement);
    const fragment = await displayPosts(jsonData);
    const addButtons = addButtonListeners();
    return [removeButtons, main, fragment, addButtons];
}

/*
  19. Handles the change of user choosen in the dropdown menu
*/
const selectMenuChangeEventHandler = async (event) => {
    if(event?.type !=='change') return;
    const selectMenu = event.target;
    if(selectMenu !== undefined) selectMenu.disabled = true;
    const userId = 
        selectMenu?.value === 'Employees' || !selectMenu?.value ? 1 : selectMenu?.value;
    const posts = await getUserPosts(userId);
    const refreshPostsArray = await refreshPosts(posts);
    if(selectMenu) selectMenu.disabled = false;
    return [userId, posts, refreshPostsArray];
}

/*
  20. Initialize page and has dropdown menu
*/
const initPage = async () => {
    const users = await getUsers();
    const select = populateSelectMenu(users);
    return [users, select];
}

/*
  21. Initialize dropdown menu function to change users
*/
function initApp(){
    initPage();
    const selectMenu = document.getElementById('selectMenu');
    selectMenu.addEventListener('change', selectMenuChangeEventHandler, false);
}

 document.addEventListener('DOMContentLoaded',initApp);
