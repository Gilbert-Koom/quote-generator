// API for get requests
function fetcher(){
    let fetchRes = fetch(
        "https://api.adviceslip.com/advice");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(d => {
                
                console.log(d)
                const adviceContainer=document.getElementById('demo');
                adviceContainer.innerHTML=d.slip.advice
                console.log(d.slip.advice)
            })
}
    