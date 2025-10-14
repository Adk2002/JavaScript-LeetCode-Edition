function debounce(fn, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() =>{
            fn(...args);
        }, delay);
    };
}

const search = (query) => {
    console.log("Searching for ", query, "at", new Date().toLocaleTimeString());
}


//Depicting that the User is typing...
console.log("User is typing...");
const searchWithDebounce = debounce(search, 100);;

setTimeout(() => searchWithDebounce("J"), 0);
setTimeout(() => searchWithDebounce("Ja"), 300);
setTimeout(() => searchWithDebounce("Jav"), 600);
setTimeout(() => searchWithDebounce("Java"), 900);
setTimeout(() => searchWithDebounce("JavaS"), 1200);
setTimeout(() => searchWithDebounce("JavaSc"), 1500);
setTimeout(() => searchWithDebounce("JavaScr"), 1800);
setTimeout(() => searchWithDebounce("JavaScrip"), 2100);
setTimeout(() => searchWithDebounce("JavaScript"), 2400);