//   registration

document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault()
    let errors = {
  
    }
    let form = event.target
    let userName = document.getElementById('username').value
  
    if(userName.length<2 ||userName == ''){
        errors.username="დაწერეთ მომხმარებლის სახელი"
    }
  
    let password = document.getElementById('password').value
    let password2 = document.getElementById('password2').value
  
    if(password !=password2 || password == ''){
        errors.password = "ველი არ უნდა იყოს ცარიელი"
        errors.password2 = "პაროლები არაა თანხვედრაში"
    }
    let agree = document.getElementById('chekAgree').checked
    if(!agree){
        errors.agree = 'მონიშნე უჯრა'
    }
  
    let age = false
    form.querySelectorAll('[name = "age"]').forEach(element=>{
        if(element.checked){
            age = true
        }
    })
    if(!age){
        errors.age = "მონიშნეთ თქვენი საფეხური"
    }
    

    for(let item in errors){
        let errorSpan = document.getElementById('error_' + item)
        if(errorSpan){
            errorSpan.innerText = errors[item]
        }
    }
    // form.querySelectorAll('.errorText').forEach(item=>{
    //     item.textContent = ''
    // })
    if(Object.keys(errors).length==0){
        form.submit()
    }
    
  })
  