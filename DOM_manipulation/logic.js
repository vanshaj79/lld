// Q1)- Make the filter work
        //in this we are going to play with DOM
        //first we will select the element by which we can interact


        let selectTag=document.querySelector('select')//selecting element from html file
        //here we have event name as 'change' bcz it is associated with select tag
        selectTag.addEventListener('change',function(event){ //listening event of the element
            let filterValue = selectTag.value; //value property gives the current value in a element 
            console.log(filterValue)

            //if 'none' is selected -> display all the divs
            //else -> display only those divs with matching genre
            let tickets = document.querySelectorAll('.price')//selects all element which have class = price
            if(filterValue === 'none'){
            //=== operator checks the type of value and value aslo
            tickets.forEach(ticket =>{
                ticket.parentElement.style.display='block'
            })
            }
            else{
                //need to loop over the tickets then only i can filter out display the desired ones
                tickets.forEach(function(ticket){
                    let ticketCategory = ticket.getAttribute("data-category")//returns the value of an element's atribute
                    if(filterValue === ticketCategory){
                        //show the div
                        ticket.parentElement.style.display = 'block'
                    }else{
                        //hide the div
                        //we can also apply CSS to our hTml element using DOM (.style property)
                        ticket.parentElement.style.display = 'none'
                    }
                })
            }
        })
        let searchbar = document.querySelector('.search')
        let searchValue = searchbar.value
        let tickets = document.querySelectorAll('.price')
        searchbar.addEventListener('input',function(event){
            tickets.forEach(function(ticket){
                let ticketCategory = ticket.getAttribute("data-category")
                if(ticketCategory.includes)
                ticket.parentElement.style.display = 'block'
            })
            console.log(event.target.value)
        })
        console.log(searchbar);