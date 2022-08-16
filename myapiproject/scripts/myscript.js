//This is the javascript fil for all of the action
console.log("file linked!!");
// when the window loads we'll test out the calls to the api
window.addEventListener('load',getsomedata);

async function getsomedata(){
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/search?rating=g&limit=5&q=tacos&api_key=Bf06yzXzF2i3NoN7T8vxOrAmQAFr9aFs',
            {
                method: 'GET',
                headers: {
                 
                }
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }   
