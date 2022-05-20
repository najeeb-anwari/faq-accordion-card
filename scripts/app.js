const faqs = document.querySelectorAll(".faq-header");
faqs.forEach(element => {
    element.addEventListener("click", e => {
        
        if(element.parentNode?.classList.contains("active")){
            element.parentNode.classList.toggle("active");
        }
        else {
            document.querySelector(".active")?.classList.remove("active");
            element.parentNode.classList.toggle("active");

        }
    });
});