let cities = ["Mangalore" , "Bangalore", "Vijayapura","Hubballi"];
console.log("Length of cities:",cities.length);
console.log("Initial cities:",...cities);
console.log("After adding  cith at the end:",cities.push("Delhi"));
console.log(cities.shift());
console.log(cities);
console.log(cities.indexOf("Hubballi"));
console.log(cities[-2]);
console.log(cities[50]="indi");
console.log(cities);

let subarray = [["Mumbai",1.5], ["Delhi", 2], ["Udupi", 0.40], ["Mangalore", 0.60]];
console.log("List of cities having population more than 1cr : ",subarray);
for(let i=0; i<subarray.length; i++ ){
    if(subarray[i][1]>1){
        console.log(subarray[i]);
    }
}   
