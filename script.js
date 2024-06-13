const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', ()=> {
    const webWorkrObj = new Worker('worker.js');
    webWorkrObj.postMessage("start worker");
    webWorkrObj.onmessage = function(e){
        console.log(e.data);
        document.querySelector('#output').innerHTML = e.data;
    }
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', ()=> {    
    document.querySelector('#print').innerHTML = "Hi!";
});