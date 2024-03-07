let transaction = [100,-200,300,400,-500,600]

function iscredit(transaction){
    return transaction>0
}

function isdebit(transaction){
    return transaction<0
}

function filter(t,cb){
    let filter=[]
    for(let i=0;i<t.length;i++){
        if(cb(t[i])){
            filter.push(t[i])
        }
    }   
    return filter
}

let credit=filter(transaction,iscredit)
let debit=filter(transaction,isdebit)
console.log(credit,debit)