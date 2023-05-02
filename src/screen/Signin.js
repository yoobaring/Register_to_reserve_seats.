import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../app/api/authSlice'
// import { useLoginMutation } from '../app/api/authApiSlice'
import Loading from '../components/Loading'

const Signin = () => {
      const userRef = useRef()
      const errRef = useRef()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [errMsg, setErrMsg] = useState('')
      const navigate = useNavigate()
  
      // const [login, { isLoading }] = useLoginMutation()
      const [loading, setLoading] = useState(false)
      const dispatch = useDispatch()
  
      useEffect(() => {
          userRef.current.focus()
      }, [])
  
      useEffect(() => {
          setErrMsg('')
      }, [email, password])

      const handleSubmit = async (e) => {
            e.preventDefault()
    
            try {
            //     const userData = await login({ email, password }).unwrap()
                dispatch(setCredentials({ email, password }))
                sessionStorage.setItem("password", password);
                sessionStorage.setItem("email", email)
                setEmail('')
                setPassword('')
                navigate('/admin')
            } catch (err) {
                if (!err?.originalStatus) {
                    // isLoading: true until timeout occurs
                    setErrMsg('No Server Response');
                } else if (err.originalStatus === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.originalStatus === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
            }
        }

      const handleUserInput = (e) => setEmail(e.target.value)
      const handlePwdInput = (e) => setPassword(e.target.value)

      const content =  (
            <section className="flex min-h-full items-center justify-center py-10 px-10 ">
            <div className='bg-white rounded-lg px-10 py-10 ring-1 ring-slate-900/5 shadow-xl w-full max-w-xl space-y-8'>    
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="container">
                <p className='text-3xl font-serif font-bold text-center mb-5' style={{color:' #424040'}}>Sign In</p>
                        <form onSubmit={handleSubmit} className="">
                              <div>
                              <label className='label' htmlFor="floatingInput">Email address</label>
                              <input 
                                    type="email" 
                                    className="Form-input" 
                                    id="floatingInput" 
                                    placeholder="name@example.com"
                                    ref={userRef}
                                    value={email}
                                    onChange={handleUserInput}
                                    autoComplete="off"
                                    required
                              />
                              </div>

                              <div className="">
                              <label className='label' htmlFor="floatingPassword">Password</label>
                              <input 
                                    type="password" 
                                    className="Form-input" 
                                    id="floatingPassword" 
                                    placeholder="Password"
                                    onChange={handlePwdInput}
                                    value={password}
                                    required
                              />
                              </div>

                              <div className="flex justify-between">
                                    <div>
                                          <input type="checkbox" 
                                                className="form-check-input" 
                                                id="exampleCheck1"
                                          />
                                          <label className="" htmlFor="exampleCheck1"> Check me out</label>
                                    </div>
                                    <div><a className="text-blue-600 hover:text-blue-800" href="#" >Forgot Password</a></div>
                              </div>
                              <div className="flex justify-between mt-5">
                              <button className='button bg-blue-600 hover:bg-blue-700'>Sign In</button>
                              <p className="mt-5">Don't have an Account? <Link to={'/signup'}><a className='text-blue-600 hover:text-blue-800'>Sign Up</a></Link></p>
                              </div>
                        </form>
            </div>
            </div>  
            </section>
      )
      return content
}
export default Signin