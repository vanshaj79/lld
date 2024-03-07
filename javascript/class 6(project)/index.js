let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let textAreaCont = document.querySelector('.textArea-cont')
let maincont = document.querySelector('.main-cont')
let allPriorityColors = document.querySelectorAll('.priority-color')
let removeBtn = document.querySelector('.remove-btn')
let toolboxColors = document.querySelectorAll('.color')

let addTaskFlag = false
let removeTaskFlag = false
let modalPriorityColor = 'lightpink'
let lockIconClass = 'fa-lock'
let unlockIconClass = 'fa-lock-open'
let colors = ['lightpink','lightgreen','lightblue','black']
let ticketArray = []

addBtn.addEventListener('click',event => {
    addTaskFlag = !addTaskFlag
    
    if(addTaskFlag == true){
        //show
        modalCont.style.display = 'flex'
    }else{
        //hide
        modalCont.style.display = 'none'
    }
})
//here priority color code is working
//selecting ticket color
allPriorityColors.forEach(colorEle => {
    colorEle.addEventListener('click',event => {
        //remove active class from all divs
        allPriorityColors.forEach(priorityColor => {
            priorityColor.classList.remove('active')
        })

        //add active class on div that is clicked
        colorEle.classList.add('active') //adding the active class
        //classList gives all the classes of the particular element that i have selected
        
        //console.log(colorEle.classList)
        modalPriorityColor=colorEle.classList[0]
        
    })
})

//Ticket Creation
//whenever i am in the modal box, i press the shift key the ticket gets created
modalCont.addEventListener('keydown', event=>{
    let keyPressed = event.key //key property will give me the value of that particular key that is clicked
    //if shift is pressed
    if(keyPressed === 'Shift'){
        //create a ticket
        let ticketDesc = textAreaCont.value //extracts the text from TextArea
        //let ticketId = shortid()
        //console.log('calling create ticket')
        createTicket(modalPriorityColor, ticketDesc)
        //close modal
        modalCont.style.display = 'none'//hide that particular modal of the event
        addTaskFlag = !addTaskFlag //tofggling flag so that we don't need to everytime double clcik
        //clear textarea
        textAreaCont.value = ''
    }
})

function createTicket(ticketColor, ticketId, ticketDesc){//creating ticket
    //console.log('inside create ticket')
    let id = ticketId || shortid()

    let ticketCont = document.createElement('div')

    ticketCont.classList.add('ticket-cont')

    //innerHTML adds HTML inside HTML page
    ticketCont.innerHTML=`<div class="ticket-color ${ticketColor}"></div><div class="ticket-id">${id}</div><div class="task-area">${ticketDesc}</div><div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`
    
    maincont.appendChild(ticketCont)

    let ticketMetaData = {
        ticketColor,
        ticketId: id,
        ticketDesc
    }
    // let ticketMetaData = {
    //     "ticketColor":ticketColor,
    //     "ticketId":ticketId,
    //     "ticketDesc":ticketDesc
    // }

    //if freshly created ticket
    //then only push to ticketArray
    //otherwise dont push 

    if(!ticketId){
        ticketArray.push(ticketMetaData)
        localStorage.setItem('tickets',JSON.stringify(ticketArray))
    }

    handleRemove(ticketCont)//simply adds event listener and only gets triggered when there is a click event

    handleLock(ticketCont)

    handleColor(ticketCont)
}

//selecting remove button
removeBtn.addEventListener('click', (event)=>{
    removeTaskFlag = !removeTaskFlag
    if(removeTaskFlag == true){
        //show alert
        alert("Delete mode is acivated")
        //change icon color to red
        removeBtn.style.color='red'
    }else{
        //change icon color to white
        removeBtn.style.color='white'
    }
})

function handleRemove(ticket){
    ticket.addEventListener('click',(event)=>{
        if(removeTaskFlag){
            // remove ticket - ticketArray
            let ticketId = ticket.children[1].innerText
            let ticketIndex = ticketArray.findIndex(t=>{
                return t.ticketId == ticketId
            })
            ticketArray.splice(ticketIndex,1) //this method adds and/or removes array elements and overwrites the original array

            //update local storage
            localStorage.setItem('tickets',JSON.stringify(ticketArray))
            
            //remove ticket - ui removal 
            //ticket.style.display='none' //this property will hide your ticket,it will not delete from DOM
            ticket.remove()//it will delete that particular element from DOM
        }
    })
}

//handling lock function
function handleLock(ticket){
    //taking parent class
    let ticketLockEle = ticket.querySelector('.ticket-lock')
    
    let ticketLockIcon = ticketLockEle.children[0]//will give you list of all the children of the particular element
    //console.log(ticketLockIcon)
    let taskArea = ticket.querySelector('.task-area')

    ticketLockIcon.addEventListener('click',()=>{

    //let ticketLockIcon = ticketLockEle.children[0]//will give you 0th children of the particular element
        if(ticketLockIcon.classList.contains(lockIconClass)){
            //remove locked class
            ticketLockIcon.classList.remove(lockIconClass)
            //add unlocked class
            ticketLockIcon.classList.add(unlockIconClass)
            //make the ticket editable
            taskArea.setAttribute('contenteditable','true')
        }else{
            //remove unlocked class
            ticketLockIcon.classList.remove(unlockIconClass)
            //add locked class
            ticketLockIcon.classList.add(lockIconClass)
            //make ticket uneditable
            taskArea.setAttribute('contenteditable','false')
            
            //updating ticketArray state with new text
            let ticketId = ticket.children[1].innerText

            ticketArray.forEach(t=>{
                if(t.ticketId == ticketId){
                    t.ticketDesc = taskArea.innerText
                }
            })

            //update local storage
            localStorage.setItem('tickets',JSON.stringify(ticketArray))
        }
        
    })
}

//change ticket priority
function handleColor(ticket){
    let ticketColorBand = ticket.querySelector('.ticket-color')
    ticketColorBand.addEventListener('click',()=>{
        let currentColor = ticketColorBand.classList[1]
        let currentColorIndex = colors.findIndex(color =>{//gives index 
            return color == currentColor
        })

        currentColorIndex++

        let newColorindex = currentColorIndex % colors.length
        let newColor = colors[newColorindex]

        //remove the current color
        ticketColorBand.classList.remove(currentColor)

        //add new color
        ticketColorBand.classList.add(newColor)

        let ticketId = ticket.children[1].innerText

        //updating color in ticketArray so when on clicking the colorband the color chnages 
        //but it doesnot get updated in ticketArray, now it will get updated
        ticketArray.forEach(t=>{
            if(t.ticketId == ticketId){
                t.ticketColor = newColor
                console.log(newColor)
            }
        })
        //console.log(ticketArray)
        
        //updating local storage
        localStorage.setItem('tickets',JSON.stringify(ticketArray))
    })
}

//implementing filters
toolboxColors.forEach(toolboxColor=>{
    toolboxColor.addEventListener('click',()=>{
        let selectedToolBoxColor = toolboxColor.classList[0]

        let filteredTickets = ticketArray.filter(ticket =>{
            return selectedToolBoxColor == ticket.ticketColor
        })
        // console.log("filtered tickets : ",filteredTickets)
        // console.log("all tickets : ",ticketArray)

        let allTickets = document.querySelectorAll('.ticket-cont')
        //remove all tickets
        allTickets.forEach(ticket => {
            ticket.remove()
        })

        //recreate tickets within filtered array
        filteredTickets.forEach(filteredTicket => {
            createTicket(filteredTicket.ticketColor ,filteredTicket.ticketId ,filteredTicket.ticketDesc)
        })
    })

    toolboxColor.addEventListener('dbclick',()=>{
        //remove all the tickets from DOM
        let allTickets = document.querySelectorAll('.ticket-cont')

        allTickets.forEach(ticket => {
            ticket.remove()
        })
        //create all tickets from ticket array
        ticketArray.forEach(ticket => {
            createTicket(ticket.ticketColor, ticket.ticketId, ticket.ticketDesc)
        })
    })
})

//local storage
//on every page refresh this code will execute
let ticketsLocalStorage = localStorage.getItem('tickets')
if(ticketsLocalStorage){
    ticketArray = JSON.parse(ticketsLocalStorage)
    ticketArray.forEach(ticket=>{
        createTicket(ticket.ticketColor, ticket.ticketId, ticket.ticketDesc)
    })
}