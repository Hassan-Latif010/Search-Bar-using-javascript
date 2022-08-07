const searchInput = document.getElementById("searchInput")
let allNamesDOMCollection = document.querySelectorAll(".name")



searchInput.addEventListener("keyup",function(event){
    let searchQuery = event.target.value.toLowerCase()
    console.log(searchQuery)
    for(let counter = 0; counter < allNamesDOMCollection.length ; counter++){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase()

        // console.log(currentName)
        if(currentName.includes(searchQuery)){
            allNamesDOMCollection[counter].style.display= "block"
        }else{
            allNamesDOMCollection[counter].style.display="none"
        }
    }
    


    
})


