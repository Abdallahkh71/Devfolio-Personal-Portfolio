//navbar
const links = document.querySelectorAll(".nav-item a");
links.forEach(link => {
    link.addEventListener('click', (e) => {
        setActivelink(e);
    });
});
function setActivelink(e) {
    // Remove 'link-clicked' class from all links
    links.forEach(link => {
        link.classList.remove('link-checked');
    });
    // Add 'link-checked' class to checked button
    e.target.classList.add('link-checked');
}
//type writing 
    var typed=new Typed(".auto-type",{
    strings : ["Freelancer","Developer","Photographer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})
//portfilio section
// Get elements from the DOM
const btns = document.querySelectorAll(".buttons button");
const imgs = document.querySelectorAll(".images img");

// Add click event to all buttons
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setActiveBtn(e);
        filterImg(e);
    });
});

// Set active button on click
function setActiveBtn(e) {
    // Remove 'btn-clicked' class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    // Add 'btn-clicked' class to clicked button
    e.target.classList.add('btn-clicked');
}

// Filter images based on button click
function filterImg(e) {
    const btnType = parseInt(e.target.dataset.btn); // Get the text of the clicked button

    imgs.forEach(img => {
        const imgType = parseInt(img.dataset.img); // Get the data-img attribute value

        // Show all images if 'All' button is clicked, otherwise filter images
        if (imgType === btnType) {
            img.parentElement.style.display = 'block'; // Show matching images
        } else {
            img.parentElement.style.display = 'none'; // Hide non-matching images
        }
    });
   // set click event for "All" button
    btns[0].addEventListener('click',(e)=> {
    //run the active button function
    setActiveBtn(e)
    //loop through all images
    imgs.forEach(img => {
        //Expand all images
        img.parentElement.style.display = 'block';
        
});
});
}

