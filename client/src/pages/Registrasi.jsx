import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { Input ,Typography, Button } from "@material-tailwind/react";
import { useTheme } from '../utils/ThemeContext';
import { api } from "../api";
import Swal from 'sweetalert2';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useForm } from 'react-hook-form';

const Registrasi = () => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const { register, handleSubmit, formState: { errors } ,setError ,resetField} = useForm({
    mode: "onChange",
    defaultValues: {
      username: '',
      email: '',
      password:'',
      confirmPassword: ''
    }
  });

  const Message = () => {
    return(
      <Typography
            variant="small"
            color="gray"
            className="mt-2 flex items-center gap-1 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Use at least 8 characters
          </Typography>
    )
  }

  const handleCreateAccount = async() => {
   
    if (password !== confirmPassword) {
      // alert("Passwords don't match!");
     
      setError('confirmPassword', {
        type: 'custom',
        message: "confirm Passwords don't match!"
      })
      setError('password', {
        type: 'custom',
        message: "Passwords don't match!"
      })
      

      return
    

      
    }else if( username == "" || password == ""|| email == ""){
      console.log('empty');
      return
    }

    const newUser = {
      username,
      email,
      password
    };

    await api.register(newUser)
    .then(res => {
      console.log(res);
      Swal.fire({
        title: 'Success!',
        text: 'berhasil membuat akun',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        didClose: () => {
          window.location.href = '/login'
        },
        showConfirmButton: false  
      })
  

      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    })
    .catch(err => console.log(err))



    
  


  };
  // console.log(errors);
  return (
    <div className="text-black flex flex-col  justify-between h-screen">
      <div>
        <Navbar />
      </div>
      
      <form onSubmit={handleSubmit(handleCreateAccount)}>
        <div className="border rounded shadow-sm  mt-16 w-96 mx-auto">
          <div className="mx-auto mt-3 text-center ">
            <h1 className="text-2xl font-bold dark:text-white">Sign Up</h1>
          </div>

          <div className="mt-6 px-3">
            <div className="w-full mt-3 dark:text-white">
              <Input 
                name="username"
                {...register("username", {
                  required: "Username Required",
                  maxLength: {
                    value: 10,
                    message: "max length 10 character"
                  }

                })}
                label="Username" 
                color={theme === 'dark' ? 'white' : 'black'}  
                className="dark:text-white" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username && username === ''}

                
              />
              
              {errors.username && <p className="text-red-500 text-xs italic">{errors.username?.message}</p>}
            </div>
            <div className="w-full mt-3 dark:text-white">
              <Input 
                name="email"
                {...register("email", {
                  required: "Email Required",

                })}
                label="Email" 
                color={theme === 'dark' ? 'white' : 'black'} 
                className="dark:text-white" 
                value={email}
                placeholder="name@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                error={!!errors.email && email === ''}

              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email?.message}</p>}

            </div>
            <div className="w-full mt-3 dark:text-white">
              <Input 
                name="password"
                {...register("password", {
                  required: "Password Required",
                  minLength: {
                    value: 8,
                    message: "min length 8 character"
                  }
                })}
                label="Password" 
                color={theme === 'dark' ? 'white' : 'black'} 
                placeholder="******"
                className="dark:text-white" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password }
                type={passwordShown ? "text" : "password"}
                        
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
              {errors.password ? <p className="text-red-500 text-xs italic">{errors.password?.message}</p> : <Message />}

            </div>
            <div className="w-full mt-3 dark:text-white">
              <Input 
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password Required",

                })}
                label="Confirm Password" 
                color={theme === 'dark' ? 'white' : 'black'} 
                className="dark:text-white" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="******"
                error={!!errors.confirmPassword }

                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword?.message}</p>}

            </div>
          </div>
          <div className="flex justify-center mt-4 mb-3">
            <button 
              className="bg-blue-500  text-white p-2 rounded-md"
              type="submit"
            >
              Create Account
            </button>
          </div>

          <div className=" p-2">

              <Button
                  variant="outlined"
                  size="lg"
                  className="mt-6 flex h-12 items-center justify-center gap-2"
                  fullWidth
                >
                  <img
                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                    alt="google"
                    className="h-6 w-6"
                  />{" "}
                  sign up with google
                </Button>
              
            </div>

        </div>
      </form>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Registrasi;
