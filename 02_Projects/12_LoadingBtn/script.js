/*const loadButton = document.getElementById('loadButton');
const loader = document.getElementById('loader');
const demoForm = document.getElementById('my-form');

demoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if(!username || !password) {
        alert("Please fill all fields!");
        return;
    }

    loadButton.classList.add('loading');
    loadButton.disabled = true;
    loader.style.display = 'inline-block';
    loadButton.firstChild.textContent = ' Processing...';

    setTimeout(() => {
        loadButton.disabled = false;
        loader.style.display = 'none';
        loadButton.classList.remove('loading');

        if (username === 'admin' && password === '1234') {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: `Welcome, ${username}!`
            });
            demoForm.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid username or password!'
            });
        }
        demoForm.reset();

        loadButton.firstChild.textContent = 'submit';
    }, 2000);

    function  authenticateUser(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(username === "admin" && password === "1234") {
                    resolve("Authentication successful!");
                } else {
                    reject("Invalid username or password")
                }
            }, 2000);
        });
    }
    async function handleLogin() {
        try {
            const result = await authenticateUser("admin", "1234");
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }
    handleLogin();
});
*/


const loadButton = document.getElementById('loadButton');
const loader = document.getElementById('loader');
const demoForm = document.getElementById('my-form');

// 1. Authentication function
function authenticateUser(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "1234") {
                resolve("Authentication successful!");
            } else {
                reject(new Error("Invalid username or password!"));
            }

        }, 2000);

    });

}

// 2. Form submission
demoForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill all fields!");
        return;
    }

    // Start loading
    loadButton.classList.add('loading');
    loadButton.disabled = true;
    loader.style.display = 'inline-block';
    loadButton.firstChild.textContent = ' Processing...';

    try {

        // Wait for authentication
        const result = await authenticateUser(username, password);

        // Successful authentication
        await Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `Welcome, ${username}!`
        });

        demoForm.reset();

    } catch (error) {

        // Failed authentication
        await Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: error.message
        });

    } finally {

        // Restore button state
        loadButton.disabled = false;
        loader.style.display = 'none';
        loadButton.classList.remove('loading');
        loadButton.firstChild.textContent = ' submit';

    }
    demoForm.reset();

});
