// manualTestLogin.ts
import axios from 'axios';

const testLogin = async () => {
  try {
    const loginData = {
      email: 'test@example.com',
      password: 'password123',
    };

    const response = await axios.post('http://localhost:3000/auth/login', loginData);
    console.log('Response:', response.data);

    if (response.status === 200 && response.data.token) {
      console.log('Test passed: User is successfully logged in.');
    } else {
      console.log('Test failed: Invalid login response.');
    }
  } catch (error: any) {
    if (error.response) {
      console.log('Test failed:', error.response.data.message);
    } else {
      console.log('Test failed:', error.message);
    }
  }
};
testLogin();
