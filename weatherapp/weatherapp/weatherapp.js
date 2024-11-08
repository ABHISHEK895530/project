// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '2ba4f29b54msh932fa2cfda1cf23p1312cajsnfb91679149b2',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// eeff0f426c12308a5f626c0b652abfa5
// url = "https://api.openweathermap.org/data/2.5/weather?q={india}&appid={eeff0f426c12308a5f626c0b652abfa5}"
// async function abhi(){
    //     try {
        //         const response = await fetch(url);
        //         const result = await response.text();
        //         console.log(result);
        //     } catch (error) {
            //         console.error(error);
            //     }
            
            // }
// abhi();


let input = document.getElementById("user-input")
let temp_value = document.querySelector(".temp")
let humidity_value = document.querySelector(".humidity")
let wind_value = document.querySelector(".wind")
let city_name = document.querySelector('.city')
// let button = document.getElementById("btn")
document.getElementById("btn").addEventListener("click",()=>{
    let user_input = input.value
    if((user_input)){
        // console.log(city_name);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${user_input}&appid=eeff0f426c12308a5f626c0b652abfa5`;
        abhi(url);
    }
})

// let url = "https://api.openweathermap.org/data/2.5/weather?q=india&appid=eeff0f426c12308a5f626c0b652abfa5"

async function abhi(url){
                const response = await fetch(url).then();
                // console.log(response);                
                const result = await response.json();
                console.log(result);
                let temp = result.main.temp;
                let cel_temp =Math.floor((temp -32 )* (5/9))
                let humedity = result.main.humidity
                let speed = result.wind.speed
                temp_value.innerHTML = cel_temp+"°C";
                humidity_value.innerHTML = humedity;
                wind_value.innerHTML = speed
                city_name.innerHTML = input.value.toUpperCase()
                

}


// async function abhi(url){
//     fetch(url)
//     .then(responce=>responce.json())
//     .then(data=>console.log(data.main.temp))
// }
// abhi(url);

// try {
//     const num = 20;
//     // console.log(num)
//     num = 50;
// }
// catch(err){
//     console.log("aap constant variable me assign nhi kr skte");
// }
// finally{
//     console.log("You are good to go");
// }


// async function abhi(url){
//             fetch(url)
//             .then(responce=>responce.json())
//             .then(data=>console.log(data.main.temp));
// }
// abhi(url);