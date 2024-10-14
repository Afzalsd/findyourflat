import './EditUser.css'
import { useContext } from 'react'
import { UserLoginContext } from '../../contexts/UserLoginContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
function EditUser() {
    let {user,setUser,seterr,status,token}=useContext(UserLoginContext)
    let {register,handleSubmit,setValue,formState:{errors}}=useForm()
    let navigate=useNavigate()
    // let currUser = JSON.parse(sessionStorage.getItem('loginDetails'));
    async function onsave(obj){
        let res=await fetch('http://localhost:3000/users',{
            method:"PUT",
            headers:{
              "Content-Type":"application/json",
              "Authorization":  `Bearer ${token}`
            },
            body:JSON.stringify({name:user.username,update:obj})
        })
        let data=await res.json()
        if(data.message==="User updated"){
            setUser(obj)
            sessionStorage.setItem('loginDetails',JSON.stringify(obj))
            navigate('/user-profile')
        }
        else if(data.message==="token expired.Plz relogin to continue"){
          setUser({})
        //   setstat(false)
          seterr('Expired... Please relogin to continue')
          navigate('/login')
        }
    }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit(onsave)}>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              value={setValue('name',user?.name)}
              placeholder="Enter your name"
            />
            {errors.name?.type === 'required' && <span className='error'>*This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              value={setValue('email',user?.email)}
              placeholder="Enter your email"
            />
            {errors.email?.type === 'required' && <span className='error'>*This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='contact'>Contact</label>
            <input 
              type='number' 
              {...register('contact', { required: true })}
              value={setValue('contact',user?.contact)}
              placeholder="Enter your contact" 
            />
            {errors.contact?.type === 'required' && <span className='error'>*This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              value={setValue('password',user?.password)}
              disabled
              placeholder="Enter your password"
            />
            {errors.password?.type === 'required' && <span className='error'>*This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', { required: true })}
              value={setValue('confirmPassword',user?.password)}
              disabled
              placeholder="Confirm your password"
            />
            {errors.confirmPassword?.type === 'required' && <span className='error'>*This field is required</span>}
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default EditUser