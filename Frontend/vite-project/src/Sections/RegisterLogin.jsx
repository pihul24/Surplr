import {React,useState} from 'react'
import Button from"../Components/Button"
import Navbar from "../Components/Navbar"
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Eye,EyeOff} from "lucide-react";
import {useNavigate} from "react-router-dom"

function RegisterLogin() {
      const [isLogin,setIsLogin] = useState(false)
      const[email,setEmail]= useState("")
      const[password,setPassword]=useState("")
      const[username,setUserName]= useState("")
      const[confirmPassword , setConfirmPassword] = useState("")
      const[role,setRole] = useState("")
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      
      function handleSubmit(e){
        e.preventDefault();
              if (!isLogin) {

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        navigate("/explore");
    }

    else {
        navigate("/explore");
    }
      }   

     
      const navigate = useNavigate();

  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50 flex justify-center py-6" />
          <div className="background min-h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center"
              style={{
                backgroundImage: "url('/textures/registerBackground1.png')"
              }}
              >

        <div className=" heading flex flex-col w-125 items-center bg-white/15 border border-violet-900 shadow-[0_0_15px_rgba(34,211,238,0.8)] mt-20 ml-70  px-12 py-10 justify-center gap-4 rounded-3xl">
          <p className="text-5xl font-bold text-center "> 
            Surpls <span className=" text-violet-800 ">  Saver</span>
          </p>
          <p className="text-base">Save Food . Save Tomorrow</p>
          
          
            <p>
              {/* logic of login here  */}
             <Button onClick={() => setIsLogin(true)}
              className="log-in rounded-xl px-12 py-3">
                <i className="fa-regular fa-user mr-2"></i>
                  Login
            </Button>

            {/* logic of register */}
            <Button onClick={()=> setIsLogin(false)}
              className="register rounded-xl px-12 py-3">
                <i className="fa-duotone fa-solid fa-user-plus mr-2"></i>
                  Register
            </Button>  
            </p>
             {isLogin ?(
              <form onSubmit={handleSubmit}>
                <div className="relative w-full px-12 py-3 m-8">

                    {email==="" ?<i className="fa-solid fa-envelope text-gray-400  absolute top-1/2 left-4 -translate-y-1/2"></i>:null }

                      {/* for email */}

                  <input 
                    className="pl-14" 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                  />

                </div>
                {/* for password */}
                
                  <div className="login-password relative w-full px-12 py-3 m-8">

                    {password===""? <i className="fa-solid fa-lock text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>:null}
                      <input
                      className="pl-14"
                        type={showPassword ? "text": "password"}
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                      />
                      <div>
                        {showPassword ? (
                          <EyeOff onClick={()=>setPassword(false)} className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>):
                          (<Eye onClick={()=> setPassword(true)} className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>
                        )}
                      </div>

                  </div>
                  <div className="flex justify-center">
                      <Button className="rounded-xl p-6  "
                        type="submit"
                    >  Submit</Button>
                  </div>
            </form>
                ):(
              <form onSubmit={handleSubmit}>
                  {/* username */}
                  <div className="relative w-full px-12 py-3 m-8">
                    {username === "" && 
                    (<i className="fa-regular fa-user text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 "></i>)}

                    <input 
                        type="text"
                        value={username}
                        placeholder="Enter your full name"
                        required
                        onChange={(e)=>setUserName(e.target.value)}
                    />

                  </div>

                  {/* email */}
                  <div className="relative w-full px-12 py-3 m-8">
                        {email === "" && 
                        (
                          <i className="fa-regular fa-envelope text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 "></i>
                        )}
                        <input
                          type="email"
                          value={email}
                          placeholder="Enter a valid email id"
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                        />
                  </div>

                  {/* Password */}

                  <div className="relative w-full px-12 py-3 ">
                        {password ==="" &&
                          (<i className="fa-solid fa-lock absolute  text-gray-400 top-1/2 left-4 -translate-y-1/2"></i>)}
                        <input
                          type={showPassword ? "text":"password"}
                          placeholder="Create a password"
                          value={password}
                          required
                          onChange={(e)=>setPassword(e.target.value)}

                        />
                        <div>
                          {password ? (
                            <EyeOff  onClick={()=>setShowPassword(true)} className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>):
                            (<Eye onClick ={()=>setShowPassword(false)} className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>
                          )}
                        </div>
                  </div>
                  {/* confirm password */}
                  <div className=" relative w-full px-12 py-3 ">
                          {confirmPassword === "" &&
                          (
                              <i className="fa-solid fa-lock text-gray-400 absolute left-4 top-1/2 translate-y-1/2"></i>
                          )}

                          <input
                            type={ showConfirmPassword ? "text": "password"}
                            placeholder="Confirm your passsword"
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            required
                            value={confirmPassword}
                            
                          />

                          <div>
                          {password ? (
                            <EyeOff  onClick={()=>setShowConfirmPassword(false)}  className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>):
                            (<Eye onClick ={()=>setShowConfirmPassword(true)} className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"/>
                          )}
                        </div>
                  </div>
                  {/* // role */}

                  <div>
                    <select 
                      value={role}
                      onChange={(e)=>setRole(e.target.value)}
                      className="
                         w-full
                         m-8
                         bg-white/5
                         backdrop-blur-md
                         border border-cyan-400/40
                         rounded-2xl
                         px-5
                         py-3
                         text-gray-400
                         outline-none
                         focus:border-cyan-400
                         focus:ring-2
                         focus:ring-cyan-400/30
                         transition-all
                         cursor-pointer
                      "     
                      >
                          <option value=""
                          className="bg-slate-900 ">Select Role</option>
                          <option value="buyer">Buyer</option>
                    <option value="restaurant">restaurant</option>
                    <option value="ngo">NGO</option>
                  </select>
                  </div>

                  <Button 
                    type="submit"
                    
                  >Register now</Button>
              </form>
                )}
          
          
      </div>
          </div>
    </>
  )
}

export default RegisterLogin