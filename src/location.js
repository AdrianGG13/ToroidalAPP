alert("Está funcionando");

const config = {
    timeout: 5000,
    enableHighAccuracy: true,
};

function locate(pos){
    pos.toJSON();
    console.log(pos);
}

function err(){
    console.log("error");
}

navigator.geolocation.getCurrentPosition(locate, err, config);
