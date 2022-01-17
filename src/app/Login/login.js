import React from 'react'
import { useForm } from 'react-hook-form'
import FormControl from '../../Components/FormControl/FormControl'
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import LoginService from '../services/LoginService';
import white_logo from '../../assets/img/logo_White.png';
import box from '../../assets/img/th.jpg';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    var status = ""
    const history = useHistory();
    const onSubmit = async (data) => {
         console.log(data)
        // history.push("/dashboard");
       alert(JSON.stringify(data));
        try {
            const responseData = await LoginService.verifyCredentials(data);
            status = responseData.data;
            alert("user status ::: " + status);
            if (status == "Active") {
                history.push("/dashboard");
            } else {
                alert("Invalid credentials");
            }
        }
        catch (error) {
            alert("Error Occurred" + error.response.data.error);
        }
    }
    return (
        <div>
            <main className="topa_login">
                <section className="header">
                    <div className="main-container">
                        <div className="inner-container">
                            <div className="logowrap">
                                <div className="logo"><a href="#" title=""><img src={white_logo} alt="Topa" title="Topa" /></a></div>
                                <div className="howto"><a href="#" title="How It Works">How It Works</a></div>
                            </div>
                            <div className="headerpara">
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque.</p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="signup">
                    <div className="main-container">
                        <div className="inner-container">
                            <div className="signupleft">
                                <figure><a href="#" title=""><img src={box} alt="Topa" title="Topa" /></a></figure>
                                <figure><a href="#" title=""><img src={box} alt="Topa" title="Topa" /></a></figure>
                                <figure><a href="#" title=""><img src={box} alt="Topa" title="Topa" /></a></figure>
                            </div>
                            <div className="signupbox">
                                <h3>Hi, <span>Welcome!</span></h3>
                                <p>Login to your Portal.</p>
                                <Form name="login" id="login" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="loginField">
                                        <FormControl fieldName="userName" register={register} errors={errors} type="text" showLabel={false} className="uname loginformfield" />
                                    </div>
                                    <div className="loginField">
                                        <FormControl fieldName="password" register={register} errors={errors} type="password" showLabel={false} className="pw loginformfield" />
                                    </div>
                                    {/* <div className="chkbox">
                                        <div classNametopa_login="check_wrapper">
                                            <label className="check_container">Remember Me
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="forg"><a href="#" title="">Forget Password?</a></div>
                                    </div> */}
                                    <div className="loginField">
                                        <input type="submit" name="" id="submit_button" className="loginformbtn" />
                                    </div>
                                    <div className="newuser">
                                        {/* <a href="#" title="">New User? Register Now.</a> */}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div className="main-container">
                        <div className="inner-container">
                            <p>©2021 Topa Insurance Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login
