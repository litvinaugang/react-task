import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';



import {
  UPDATE_FIELD_AUTH,
} from '../../actions/actionTypes';
// import { login } from '../../actions/auth.actions';

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => 
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: ( email, password ) => {
    // return new Promise((resolve, reject) => {
    //   dispatch(login(email, password)).then((value) => {
    //     if ( value ) {
    //       return resolve();
    //     } else {
    //       return reject();
    //     }
    //   })
    // })
  }
})

const useStyles = theme => createStyles({
  root: {
    padding: '113px 0 214px',
    background: 'white',
  },
  signinwidth: {
    maxWidth: 500,
  },
  avatar: {
    width: '168px',
    marginBottom: '27.38px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '68px',
    marginBottom: '34px',
    color: '#31333B'
  },
  icon: {
    width: '20px'
  },
  iconBorder: {
    borderRadius: '16px',
    background: '#F7F8FC'
  },
  formcontrol: {
    margin: 0,
    height: '64px',
    // 
    "& .MuiInputLabel-shrink": {
      transform: 'translate(0, 1.5px) scale(0.875)',
      fontWeight: 'bold',
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: '#31333B'
    },
    "& .MuiInput-underline:after": {
      borderBottom: '2px solid #EAEFF5'
    },
    "& .MuiInput-underline:before": {
      borderBottom: '2px solid #EAEFF5'
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: '2px solid #EAEFF5'
    },
    "& .MuiInput-formControl": {
      margin: 0,
      height: '64px',
      "& input": {
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '-0.2px',
        color: '#626264',
      },
      "& .MuiInputBase-input:focus": {
        boxShadow: 'none'
      },
      "& input:focus": {
        boxShadow: 'none'
      }
    }
  },
  submit: {
    background: '#11C856',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.04)',
    borderRadius: '28px',
    height: '56px',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    color: 'white',
    textTransform: 'capitalize',
    "& :hover": {
    }
  },
  text14: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#31333B'
  },
  gray: {
    color: '#31333B',
    opacity: '0.5'
  },
  green: {
    color: '#11C856'
  },
  formcontrolerr: {
    "& .MuiInput-underline:after": {
      borderBottom: '2px solid #ECACA5'
    },
    "& .MuiInput-underline:before": {
      borderBottom: '2px solid #ECACA5'
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: '2px solid #ECACA5'
    },
  },
  colorerr: {
    fill: '#E8543F',
  },
  emailerr: {
    color: '#E8543F',
    marginTop: '-16px',
    marginLeft: '88px',
    marginBottom: '15px'
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.ChangeEmail = e => this.props.onChangeEmail(e.target.value);
    this.ChangePassword = e => this.props.onChangePassword(e.target.value);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.state = {
      showPassword: false,
      verifyemail: true,
      email: "",
    }
  }
  handleClickShowPassword () {
    this.setState({
      showPassword: !this.state.showPassword,
    })
  }
  handleSubmit(event) {    
    event.preventDefault()
    let verifyemail = this.validateEmail(this.state.email)
    this.setState({
      verifyemail: verifyemail
    })
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  render() {
    const { classes } = this.props;  
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12}>
          <Box className={`flex flex-col items-center mx-auto ${classes.signinwidth}`}>
            <Box>
              <Box
                component="img"
                src="./img/Illustrator.svg"
                className={`${classes.avatar} cursor-pointer`}
              />
            </Box>
            <Typography 
              component="h1"
              className={`${classes.title}`}
            >
              Log in
            </Typography>
            <form 
              autoComplete="off"
              className={`w-full`} 
              onSubmit={this.handleSubmit}
              noValidate
            >
              <Box
                className={`flex mb-6`}
              >
                <Box
                  className={`w-16 h-16 mr-6 flex items-center justify-center ${classes.iconBorder}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                    <path className={this.state.verifyemail ? classes.green: classes.colorerr} d="M12 2C10.466 1.99993 8.95266 2.35274 7.57691 3.03113C6.20116 3.70952 4.99992 4.69531 4.0661 5.91222C3.13229 7.12914 2.49094 8.54457 2.19168 10.049C1.89241 11.5535 1.94325 13.1066 2.34026 14.5882C2.73727 16.0699 3.46982 17.4403 4.48121 18.5936C5.49261 19.7468 6.75576 20.6519 8.17293 21.2389C9.5901 21.8259 11.1233 22.0789 12.6539 21.9786C14.1846 21.8782 15.6716 21.427 17 20.66C17.1195 20.5975 17.2251 20.5114 17.3105 20.407C17.3959 20.3027 17.4592 20.1821 17.4968 20.0525C17.5344 19.923 17.5454 19.7872 17.5291 19.6533C17.5129 19.5194 17.4697 19.3902 17.4022 19.2735C17.3347 19.1567 17.2443 19.0548 17.1364 18.9739C17.0285 18.893 16.9053 18.8347 16.7743 18.8026C16.6433 18.7705 16.5072 18.7653 16.3741 18.7872C16.241 18.8091 16.1138 18.8576 16 18.93C14.4749 19.8105 12.7019 20.1632 10.956 19.9334C9.21003 19.7036 7.5887 18.9041 6.34342 17.659C5.09813 16.4138 4.29848 14.7926 4.06848 13.0467C3.83848 11.3008 4.19097 9.52774 5.0713 8.00257C5.95163 6.47741 7.31059 5.28532 8.93745 4.61119C10.5643 3.93706 12.3681 3.81855 14.0692 4.27404C15.7703 4.72953 17.2735 5.73358 18.3458 7.13046C19.4181 8.52734 19.9996 10.239 20 12V12.75C20 13.2141 19.8156 13.6592 19.4874 13.9874C19.1592 14.3156 18.7141 14.5 18.25 14.5C17.7858 14.5 17.3407 14.3156 17.0125 13.9874C16.6843 13.6592 16.5 13.2141 16.5 12.75V8.5C16.5 8.23478 16.3946 7.98043 16.2071 7.79289C16.0195 7.60536 15.7652 7.5 15.5 7.5C15.2674 7.49483 15.0403 7.57088 14.8578 7.71507C14.6753 7.85926 14.5487 8.06257 14.5 8.29C13.7649 7.78158 12.8937 7.5063 12 7.5C11.2471 7.491 10.5041 7.67102 9.83882 8.0236C9.17359 8.37617 8.60745 8.89001 8.19226 9.51807C7.77706 10.1461 7.52609 10.8683 7.46231 11.6185C7.39854 12.3687 7.524 13.1229 7.82722 13.812C8.13044 14.5011 8.60171 15.1032 9.19788 15.563C9.79405 16.0228 10.4961 16.3257 11.2396 16.4439C11.9832 16.5621 12.7445 16.4918 13.4539 16.2396C14.1632 15.9873 14.798 15.5611 15.3 15C15.7751 15.6153 16.4302 16.0673 17.1741 16.293C17.918 16.5188 18.7138 16.5071 19.4508 16.2596C20.1877 16.0121 20.8292 15.5411 21.2861 14.9121C21.743 14.2831 21.9925 13.5274 22 12.75V12C22 10.6868 21.7413 9.38642 21.2387 8.17317C20.7362 6.95991 19.9996 5.85752 19.071 4.92893C18.1424 4.00035 17.04 3.26375 15.8268 2.7612C14.6135 2.25866 13.3132 2 12 2ZM12 14.5C11.5055 14.5 11.0221 14.3534 10.611 14.0787C10.1999 13.804 9.87947 13.4135 9.69025 12.9567C9.50103 12.4999 9.45153 11.9972 9.54799 11.5123C9.64445 11.0273 9.88255 10.5819 10.2322 10.2322C10.5818 9.8826 11.0273 9.6445 11.5122 9.54804C11.9972 9.45157 12.4998 9.50108 12.9567 9.6903C13.4135 9.87952 13.8039 10.2 14.0786 10.6111C14.3533 11.0222 14.5 11.5055 14.5 12C14.5 12.663 14.2366 13.2989 13.7677 13.7678C13.2989 14.2366 12.663 14.5 12 14.5Z" fill="#11C856"/>
                  </svg> 
                </Box>
                <Box
                  className={`flex-grow`}
                >
                  <FormControl className={`${classes.formcontrol} ${this.state.verifyemail ? '' : classes.formcontrolerr} h-16 w-full`}>
                    <InputLabel htmlFor="standard-adornment-password">Email Address</InputLabel>
                    <Input
                      id="email-address"
                      type='text'
                      required
                      onInput={(e) => {
                        this.setState({ email: e.target.value})
                      }}
                    />
                  </FormControl>
                </Box>
              </Box>
              {
                !this.state.verifyemail && 
                <Typography
                  component="p"
                  className={`${classes.emailerr}`}
                >
                  That email address does not seem valid.
                </Typography>
              }
              <Box
                className={`flex mb-8`}
              >
                <Box
                  className={`w-16 h-16 mr-6 flex items-center justify-center ${classes.iconBorder}`}
                >
                  <Box
                    component="img"
                    src="./img/key.svg"
                    className={`${classes.icon} cursor-pointer`}
                  />
                </Box>
                <Box
                  className={`flex-grow`}
                >
                  <FormControl className={`${classes.formcontrol} h-16 w-full`}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      required
                      className={`${classes.textField} h-16`}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </Box>
              <Box className="mb-8">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={`focus:outline-none ${classes.submit}`}
                >
                  Log In
                </Button>
              </Box>
              <Box className="mb-8">
                <Typography 
                  component="p"
                  className={`${classes.text14} ${classes.gray}`}
                >
                  Forgot password?
                </Typography>
              </Box>
              <Box className="mb-1">
                <Typography 
                  component="p"
                  className={`${classes.text14}`}
                >
                  Don't have an account?
                </Typography>
              </Box>
              <Box>
                <Typography 
                  component="p"
                  className={`${classes.text14} ${classes.green}`}
                >
                  <Link
                    href="signup"
                    className={classes.green}
                  >
                    Sign up.
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SignIn));