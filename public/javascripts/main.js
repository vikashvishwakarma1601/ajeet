console.log("----------- Rental Riders ----------")


const handleSubmit = (event) => {
    event.preventDefault()
    const name = document.querySelector('#name')
    const bike = document.querySelector('#bike')
    const gender = document.querySelector('input[type="radio"]:checked')

    if(name.value===""){
        const messageContainer = document.querySelector('.nameError')
        messageContainer.style.visibility = 'visible' 
        messageContainer.innerText = "Please Enter Name"
    }
    if(bike.value===""){
        const messageContainer = document.querySelector('.bikeError')
        messageContainer.style.visibility = 'visible' 
        messageContainer.innerText = "Please Enter Bike"
    }
    if(!gender){
        const messageContainer = document.querySelector('.genderError')
        messageContainer.style.visibility = 'visible' 
        messageContainer.innerText = "Please Select Gender"
    }


}