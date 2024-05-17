const form = document.forms.namedItem('signin');
const inputs = form.querySelectorAll('input');
const ageInput = document.querySelector('#Age');

inputs.forEach((input) => {
    input.oninput = (e) => {
        const val = e.target.value;
        const pattern = patterns[e.target.name];

        if (pattern.test(val)) {
            input.style.borderColor = "blue";
        } else {
            input.style.borderColor = "red";
        }
    };
});

form.onsubmit = (e) => {
    e.preventDefault(); 

    const user = {};
    const formData = new FormData(e.target);

    let hasError = false;

    formData.forEach((val, key) => {
        const pattern = patterns[key];
        if (pattern && !pattern.test(val)) {
            hasError = true;
        } else {
            user[key] = val;
        }
    });

    if (hasError) {
        alert('Есть ошибки в форме, пожалуйста, проверьте данные.');
    } else {
        submit(e); 
    }
};

function submit(e) {
    const user = {};
    const formData = new FormData(e.target);

    formData.forEach((val, key) => user[key] = val);

    console.log(user);
}

const patterns = {
    Name: /^[a-z ,.'-]+$/i,
    Surname: /^[a-z ,.'-]+$/i,
    Email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    Age: /^[0-9]{1,2}$/,
    Phone: /^9989[012345789][0-9]{7}$/
};