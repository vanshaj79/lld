let radius=[1,2,3,4,5]

//calculate diameter, area, cicumference fo circle

function area(r){
    return Math.PI*r*r
}
function diameter(r){
    return 2*r
}
function cicumference(r){
    return 2*Math.PI*r
}

function calculate(radius,cb){
    let ans=[]
    for(let i=0;i<radius.length;i++){
        ans.push(cb(radius[i]))
    }
    return ans
}

let areaans=calculate(radius,area)
let cicumferenceans=calculate(radius,cicumference)
let diameterans=calculate(radius,diameter)
console.log(areaans,cicumferenceans,diameterans)