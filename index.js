// API for get requests
function fetcher(){
    let fetchRes = fetch(
        "https://api.adviceslip.com/advice");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(d => {
                
                console.log(d)
                let adviceId= document.querySelector('span');
                adviceId.innerHTML=d.slip.id
                document.getElementById('second').innerHTML=`"${d.slip.advice}"`
                document.getElementById('third').innerHTML=''
                document.getElementById('fourth').innerHTML=''

            })
}
    