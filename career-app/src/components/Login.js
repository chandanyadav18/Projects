import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if(!name) return alert('Please enter a Full Name')
        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => userAuth.user.updateProfile({ displayName: name, photoURL: profilePic })
            .then(() => {
                dispatch(login({ email: userAuth.user.email, uid: userAuth.user.uid, displayName: name, photoUrl: profilePic }))
            }))
    }

    const loginToApp = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email, 
                    uid: userAuth.user.uid, 
                    displayName: userAuth.user.displayName, 
                    photoUrl: userAuth.user.photoURL
                }))
            })
    }

    return (
        <div className="login">
            <img src="logo512.png" alt="logo" /> 
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" /> 
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button> 
            </form>
            <p>Not a member?{' '}
                <span onClick={register} className="login__register">Register
                    Now</span> </p>
        </div>
    )
}

export default Login