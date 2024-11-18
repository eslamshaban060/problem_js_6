// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM NO 6 !!!!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript

//  =========================== METHODE ONE ==============================


// function pigIt(str){
    

//     // ========================== condition =====================
//     let array = str.split(" ")

//     let result = []

//     for(let i = 0 ; i < array.length ; i++){

//         if(array[i].length > 1){
            
//             let smallarray = array[i].split("")
//             let fleter = smallarray.splice(0,1).join("")
//             smallarray.push(fleter+"ay")
//             let finalword = smallarray.join("")

//             result .push(finalword) 
//         }
//         else{
//             result.push(array[i])
//         }
//     }


//     // ========================== condition =====================

// return result.join(" ")

// }
// console.log(pigIt('Pig latin is cool !'))





// let s = ["k","fgdg","sdfg",'rtr',"er"]
//  s.push("eslam")
// console.log(s)





// ================================ METHODE 2 =======================


// function pigIt(str){
    

//     // ========================== condition =====================
//     let array = str.split(" ")

//     let result = []
//     let i = 0

//     while(i < array.length){

//         if(array[i].length > 1){
            
//             let smallarray = array[i].split("")
//             let fleter = smallarray.splice(0,1).join("")
//             smallarray.push(fleter+"ay")
//             let finalword = smallarray.join("")

//             result .push(finalword) 
//         }
//         else{
//             result.push(array[i])
//         }

//         i++
//     }


//     // ========================== condition =====================

// return result.join(" ")

// }
// console.log(pigIt('Pig latin is cool !'))






// ================================ METHODE 3 =======================


function pigIt(str){
    

    // ========================== condition =====================
    let array = str.split(" ")
    let result = []
    let i = 0

    array.forEach(element => {
       
        



        if(element.length > 1){
            
            let smallarray = element.split("")
            let fleter = smallarray.splice(0,1).join("")
            smallarray.push(fleter+"ay")
            let finalword = smallarray.join("")

            result .push(finalword) 
        }
        else{
            if(element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 122 ){
                result.push(element.toUpperCase() +"ay")
                

            }
            else{
                result.push(element)
                // console.log(element)

            }
        }

        i++
    }


    // ========================== condition =====================
)

return result.join(" ")

}
 

        


console.log(pigIt(' O emporatay Oay o oresmay !'))


