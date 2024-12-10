let Run_Default_Time = 1;
let Run_City_Time = 0;
let Current_city = 0;
function Get_time(){
    
    if(Run_Default_Time == 1){
        Run_City_Time = 0;
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
// TODO: Add getlocation to show time in user's current location when they enter the site.

function Get_city_time(){
    Run_City_Time = 1;
    if(Run_City_Time == 1){
        Run_Default_Time = 0;
    
        const city_name = Current_city;
        fetch('/get_city_time', {
            method: 'POST',
            headers: 
            { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            City_name: city_name
        })}
    )
        .then(response => response.json()) 
        .then(data => { 
            console.log(data.hour);
            document.getElementById('hour').innerText = data.hour + ':';
            document.getElementById('min').innerText = data.min + ':';
            document.getElementById('sec').innerText = data.sec;
            document.getElementById('am-pm-text').innerText = data.am_pm;
            document.getElementById('current-country-name').innerHTML = "Current Timezone: " + data.current_timezone
        });
        setTimeout(Get_city_time, 1000);
    }
}
function update_city_value(){
    Current_city = document.getElementById('search-bar-input').value;
    Get_city_time();
}
window.onload = Get_time;
