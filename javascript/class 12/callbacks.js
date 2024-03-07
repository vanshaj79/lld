let data = []
const task1=()=>{
    console.log('completed task 1');
}

const task2=()=>{
    console.log('completed task 2');
}

const fetchResponseBlocking = () => {
    console.log('making a sync API call');
    // mimicing ApI call
    var start = Date.now()
    while(Date.now()- start < 5000){

    }
    data.push({
        name:'sanchit',
        age:26
    })
    console.log('got api response')
}

const fetchResponseNonBlocking = () => {
    console.log('skipping it.will handle it async');
    setTimeout(() => {
        console.log('got the API response');
        data.push({
            name:'sanchit',
            age:26
        })
    }, 5000);
}

const fetchResponseNonBlockingCallback = (renderResponse) => {
    console.log('skipping it.will handle it async');
    setTimeout(() => {
        console.log('got the API response');
        data.push({
            name:'sanchit',
            age:26
        })
        renderResponse()
    }, 5000);
}

const renderResponse = () => {
    console.log('rendering');
    const body = document.querySelector('body')
    const div= document.createElement('div')
    div.innertext = `Name: ${data[0].name} | Age: ${data[1].age}`
    body.appendChild(div)
}

task1()
// fetchResponseBlocking()
// fetchResponseNonBlocking()
fetchResponseNonBlockingCallback(renderResponse)
// renderResponse()
task2()