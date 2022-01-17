import React, { useEffect } from "react";
import CurrentTime from "./CurrentTime/CurrentTime";
import Logo from "./Logo.js/Logo";
import { Link } from 'react-router-dom';
import $ from 'jquery'
import user_icon from '../../assets/img/icons/username.svg';


const Header = () => {
    useEffect(() => {
        $('.userinfoLink p').on('click', function () {
            $('.drpdwn').slideToggle();
        });
        $(document).on('click', function (e) {
            var parentarea = $('.userinfoLink');
            var elm = $('.drpdwn');
            if (parentarea.has(e.target).length === 0) {
                elm.slideUp();
            }
        });
    }, [])

    return (
        <div class="dateTimeheader">
            <CurrentTime />
            <div class="userInfoNotification">
                <div class="userInfo">
                    <div class="userinfoLink">
                        <p>
                            <span>
                                <img src={user_icon} />
                            </span>
                            Erick Thomson
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </p>
                        <div class="drpdwn">
                            <ul>
                                <li>
                                    <Link to="#">My Profile</Link>
                                    <ul>
                                        <li><Link to="#" class="openEditPro"><span>Edit Profile</span></Link></li>
                                        <li><Link to="#" class="openChangPass">Change Password</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Header
