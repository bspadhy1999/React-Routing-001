import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import swal from 'sweetalert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
  })
  const handleOnchange=(e)=>{
    const {name,value}=e.target;
    setUser(prevState =>({
      ...prevState,
      [name]:value
    }));
  };
  const [open, setOpen] = React.useState(false);
  const handleRegister=()=>{
    if(user.username==='' && user.password===''){
      setOpen(true);
      return;
    }
    else{
         const sendRequest =async () => {
          const userData =await  axios.post("https://fakestoreapi.com/users") .then(function (response) {
            swal("Thank You!", "For Creating account in Exam Portal.", "success");
          })
          .catch(function (error) {
            swal("Sorry", "This username is already exist.Try with another one.", "error");
          });
         };
         sendRequest();
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mb-2 mt-2">
                  <Card>
                    <CardContent>
                        <div className="text-center mt-2">
                        <img className='rounded shadow' src="https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png" alt="" style={{width:"150px"}}/>
                        <h3><b>Create an Account</b></h3>
                        <span>Already have an account? <Link style={{textDecoration: "none"}} to="/signin"><b>Sign in here</b></Link></span>
                        {/* <pre>{JSON.stringify(user)}</pre> */}
                        </div>
                        <TextField onChange={handleOnchange} value={user.firstName} name="firstName" label="First Name" variant="outlined" style={{width:"100%",marginTop:"15px"}} />
                        <TextField onChange={handleOnchange} value={user.lastName} name="lastName" label="Last Name" variant="outlined" style={{width:"100%",marginTop:"15px"}}/>
                        <TextField onChange={handleOnchange} value={user.email} name="email" label="Email Address" variant="outlined" style={{width:"100%",marginTop:"15px"}}/>
                        <TextField onChange={handleOnchange} value={user.phone} name="phone" label="Mobile Number" variant="outlined" type="number" style={{width:"100%",marginTop:"15px"}}/>
                        <TextField onChange={handleOnchange} value={user.username} name="username" label="User Id" variant="outlined" style={{width:"100%",marginTop:"15px"}}/>
                        <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">User Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
                            value={user.password}
                            onChange={handleOnchange}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="User Password"
                          />
                        </FormControl>
                        <small>Use 8 or more characters with a mix of letters, numbers & symbols.</small>
                        <div className='d-flex'> 
                        <Checkbox {...label} defaultChecked />
                        <p className="mt-3">I Agree <a href="#">Terms and conditions</a>.</p>
                        </div>
                        <div className="mt-2">
                        <Button style={{width:"100%"}} type='submit' variant="contained" onClick={handleRegister}>Continue</Button>
                        </div>
                        </CardContent>
                  </Card>
                </div>
            </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Username and Password must be required!
        </Alert>
      </Snackbar>
    </>
  )
}
