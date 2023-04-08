let traditionalPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(
        "This is promise will always resolve after 2 seconds"
    ), 2000})
})


async function asyncFunction (){
    let value = await traditionalPromise;
    console.log(value);
}