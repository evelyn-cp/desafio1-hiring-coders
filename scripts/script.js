document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
        type: 'loop',
        fixedHeight: 360,
        gap: 12,
        autoWidth: true,
        lazyLoad: 'nearby',
        focus: 'center',
	    perPage: 4,
        /* perMove: 1, */
        breakpoints: {
            640: {
                perPage: 1,
                gap: 5,
            },
        },
    } ).mount();
} );



function saveUserForm () {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;

    if (name == "" || email == "") {
        alert("Preencha todos os campos!");
        return
    } 
    
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Seus dados foram cadastrados com sucesso!");

}

let cadastroButton = document.getElementById("cadastroButton");

cadastroButton.addEventListener("click", saveUserForm);


