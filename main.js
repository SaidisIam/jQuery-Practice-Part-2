// 1-способ
// function func(){
//     console.log("hello");
// }

// func()  

// 2-способ
// let func = ()=>{
//     console.log("hello");
// }
// setTimeout( ()=>{}, 4000)                    // 1-способ  (появляется после задонного времени и не нужно вызывать функцию)
// setTimeout(function(), 4000)                 // 2-способ  (появляется после задонного времени и не нужно вызывать функцию)
// setTimeout(func, 4000)                       // 3-способ  (появляется после задонного времени и не нужно вызывать функцию)

function F(){
    function f1(){
        $('img').css({ "margin-top" : "50px",
        "margin-left" : "100px" , "transition" : "1s"})
    }
    setTimeout(f1 , 500)
    f1()
    
    function f2(){
        $('img').css({ "margin-top" : "200px" ,
        "margin-left" : "200px" , "transition" : "1s" })
    }
    setTimeout(f2, 700)
    
    function f3(){
        $('img').css({ "margin-top" : "50px" ,
        "margin-left" : "300px" , "transition" : "1s" })
    }
    setTimeout(f3, 1400)
    
    function f4(){
        $('img').css({ "margin-top" : "200px" ,
        "margin-left" : "400px" , "transition" : "1s" })
    }
    setTimeout(f4, 2100)
    
    function f5(){
        $('img').css({ "margin-top" : "50px" ,
        "margin-left" : "500px" , "transition" : "1s" })
    }
    setTimeout(f5, 2800)
    
    function f6(){
        $('img').css({ "margin-top" : "200px" ,
        "margin-left" : "600px" , "transition" : "1s" })
    }
    setTimeout(f6, 3500)
    
    function f7(){
        $('img').css({ "margin-top" : "50px" ,
        "margin-left" : "700px" , "transition" : "1s" })
    }
    setTimeout(f7, 4200)
    
    function f8(){
        $('img').css({ "margin-top" : "200px" ,
        "margin-left" : "1000px" , "transition" : "1s" })
    }
    setTimeout(f8, 4900) 
}
F()
setInterval(F , 5700)