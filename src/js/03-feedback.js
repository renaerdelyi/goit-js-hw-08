
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")

const LOCAL_STORAGE_KEY = "feedback-form-state";

const saveFormData = throttle(()=>{
    const formData = {
        email:form.elements.email.value,
        message:form.elements.message.value,

    }
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(formData));
},500);

const loadFormState = ()=>{
    const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saveData){
        const{email,message} = JSON.parse(saveData);
        form.elements.email.value = email || ""
        form.elements.message.value = message || "" 
    }
};
const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    console.log(formData)
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
};
form.addEventListener("input",saveFormData)
form.addEventListener("submit",handleSubmit)
loadFormState();
