import axios from 'axios';
import { Dispatch } from 'redux';
import { setUser } from '@/redux/slices/userSlice';

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:4000/api/auth/registration', {
      email,
      password
    })
    alert(response.data.message)
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password
      })
      dispatch(setUser({email}))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const auth = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get('http://localhost:4000/api/auth/auth',
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      console.log(`Error: ${e.message}`);
      localStorage.removeItem('token')
    }
  }
}