const handeleclick=()=>{
    console.log("registerd")
      }
      const login=()=>{
        console.log("login");
        
      }
function Register(){
    return(
        
        <>
        <div id="registration">
<section id="register">
<h1 className='text-center bg-slate-400'>Register User</h1>
    <form id="registerForm" action="./login">
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" onClick={handeleclick} className='bg-blue-600 text-slate-950' >Register</button>
    </form>
</section>

  <section id="login">
  <h1>Login User</h1>
    <form id="loginForm" action="/dashbord/dashbord.jsx" >
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className='bg-blue-600 text-slate-950'>Login</button>
    </form>
  </section>
</div>
        </>
    )
}
export default Register;