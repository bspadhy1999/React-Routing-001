import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                  <Card>
                    <CardContent>
                        <div className="text-center mt-2">
                        <img className='rounded shadow' src="https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png" alt="" style={{width:"150px"}}/>
                        <h3><b>Sign In to Flipkart</b></h3>
                        <span>New Here? <Link style={{textDecoration: "none"}} to="/signup"><b>Create an Account</b></Link></span>
                        </div>
                        <TextField id="outlined-basic" label="User Id or Email Address" variant="outlined" style={{width:"100%",marginTop:"15px"}}/>
                        <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
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
                            label="Password"
                          />
                        </FormControl>
                        <a style={{textDecoration: "none"}} className='float-end mt-1' href="#"><b>Forget Password?</b></a>
                        <div className='mt-5'>
                        <Button style={{width:"100%"}} variant="contained">Sign In</Button>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </div> 
      </div>
    </>
  )
}


        
    