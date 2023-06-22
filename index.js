window.addEventListener('DOMContentLoaded',()=>{
    
    // Const
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const cclInput = document.querySelector('#cc');
    const regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    // -----

    // Variables
    let inputTarget = inputName =>{
        inputName.addEventListener('input',e =>{
            if(e.target.value == ''){
                console.log('tavaciopa');
                console.log();
                e.target.placeholder = `The ${e.target.id} are required`;
                inputName.classList.add('required');
            } else {
                console.log('Se esta escribiendo');
            }
        })
    };
    let validEmail = inputName =>{
        inputName.addEventListener('input',e => {
            if (regEx.test(e.target.value)) {
                e.target.parentElement.querySelector(".wrongValue").remove;
            } else {
                if(!e.target.parentElement.querySelector(".wrongValue")){
                    const divElement = document.createElement("div");
                    divElement.classList.add('wrongValue');
                    divElement.textContent = "Please, enter a valid email";
                    e.target.parentElement.appendChild(divElement);
                    return;
                } 
            }
          })
    };
      
    // -----

    // Events

    // -----
    // Fuctions

    // -----
    // Call Fuctions
    inputTarget(nameInput);
    inputTarget(emailInput);
    inputTarget(cclInput);
    validEmail(emailInput);
    validEmail(cclInput);
    // -----
    {/* <div class="required">olaowo</div> */}
})