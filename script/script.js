




function time(){
    setTimeout(()=>{
        let date = new Date();

        document.getElementById('hrs').innerHTML = date.getHours();
    document.getElementById('mins').innerHTML = date.getMinutes();
    document.getElementById('sec').innerHTML = date.getSeconds();
    time()
    },1000)

    
    // console.log(date)
    // console.log(date.getHours())
    // console.log(date.getMinutes())
    // console.log(date.getSeconds())
}

time()