import axios from 'axios';

export async function loginUser(email: string, password: string) {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    console.log(email, password)
    const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/users/login', {
        email,
        password,
    });

    console.log(res) // { status, data: { user, token }, message }
    return {
        token: res.data.data.token,
        user: res.data.data.user,
        message: res.data.message,
        status: res.data.status
    };
}

export async function registerUser(firstName: string, lastName: string, email: string, phoneNumber: string, password: string) {
    console.log(firstName, lastName, email, phoneNumber, password)
    const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/users/register', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    });
    // The API response structure is: { status, data: { user, token }, message }
    return {
        token: res.data.data.token,
        user: res.data.data.user,
        message: res.data.message,
        status: res.data.status
    };
}

