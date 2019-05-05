window.request = (url,options={}) => {
    if(options.body){
        options.body = JSON.stringify(options.body);
    }
    options = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        },
        ...options
    }
    return fetch(url,options).then(res=>res.json()).catch(err=>alert(err));
}