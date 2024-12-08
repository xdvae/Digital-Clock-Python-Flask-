function Get_time(){
    fetch('/gettime') 
    .then(response => response.json()) 
    .then(data => { 
        console.log(data.hour);
        document.getElementById('hour').innerText = data.hour + ':';
        document.getElementById('min').innerText = data.min + ':';
        document.getElementById('sec').innerText = data.sec;
        document.getElementById('am-pm-text').innerText = data.am_pm;

     });
    setTimeout(Get_time, 1000);
}
let dark_mode = 0;

function set_Dark_Mode(){
    if(dark_mode == 0){
        dark_mode = 1;
        document.getElementById('body').style.color = 'white';
        document.getElementById('body').style.backgroundColor = 'black';
        document.getElementById('set_Dark_Mode').textContent = 'Set Light Mode';
        change_btn_class();
    }
    else if(dark_mode == 1){
        dark_mode = 0;
        document.getElementById('body').style.color = 'black';
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('set_Dark_Mode').textContent = 'Set Dark Mode';
        change_btn_class();
    }
}

function change_btn_class(){
    var btn = document.getElementById("set_Dark_Mode");
    if(btn.classList.contains('Dark_mode_btn_1')){
        btn.classList.remove('Dark_mode_btn_1');
        btn.classList.add('Dark_mode_btn_2');
    }
    else{
        btn.classList.remove('Dark_mode_btn_2');
        btn.classList.add('Dark_mode_btn_1');
    }
}
window.onload = Get_time;
