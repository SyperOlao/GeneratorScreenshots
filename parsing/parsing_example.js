// jXQcZEKVjObhFdTM:20b1004643551d42254f86fccc28093c66dc7fc8ab9c33625d720e5ba224e546

const axios = require('axios');

async function login_data_axious() {
    try {
        const res = await axios.post("https://tgads.su/login", {
            "email": "MoklyakovaAS@anodialog.ru",
            "password": "irAaRkgX",
            "remember": false
        }
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(res);
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

async function login_data() {
    try {
        const res = await fetch("https://tgads.su/login", {
            method: 'POST',
            body: { "email": "MoklyakovaAS@anodialog.ru", "password": "irAaRkgX", "remember": false }

        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(res);
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}


async function request_data() {
    try {
        const res = await fetch("https://tgads.su/cp/get?date_from=2024-07-18&date_to=2024-07-18&table=ads", {
            credentials: 'include',

        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(res);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

async () => {
    try {
        const res = await fetch("https://tgads.su/ad/preview/109099205",{
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
              },
        });
        const data = await res.json();
        return data; 
    } catch (error) {
        console.error('Fetch failed:', error);
        return {error: error.toString()}; 
    }
}

(async () => {
    await login_data();
    //  await request_data();
})();