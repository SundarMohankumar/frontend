import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery'
import logo from '../../assets/img/logo.png';
import icon1 from '../../assets/img/icons/icon1.png';
import icon2 from '../../assets/img/icons/icon2.png';
import icon3 from '../../assets/img/icons/icon3.png';
import icon4 from '../../assets/img/icons/icon4.png';
import icon5 from '../../assets/img/icons/icon5.png';
import icon6 from '../../assets/img/icons/icon6.png';
import icon7 from '../../assets/img/icons/icon7.png';


const Sidebar = ({ sidebarQQSopen = false, TabName = '' }) => {

    useEffect(() => {
        $('section').on("click", '.accord .accord-btn', function (e) {
            e.preventDefault();
            $('.accord-target').not($(this).next('.accord-target')).slideUp();
            $(this).next('.accord-target').slideToggle();

            $('.accord-btn').not($(this)).removeClass('actv');
            $(this).toggleClass('actv');
        });
    }, [])

    return (
        <section className="sidebar sidebarNewipad">
            <div class="innerlogo">
                <Link to="#"><img src={logo} alt="Topa" title="Topa" /></Link>
            </div>
            <div class="ip">Insurance Portal</div>
            <div class="sidebarNavigation sidebarNavigationNew">
                <ul>
                    <li><Link to="/reportloss"><span><img src={icon1} alt="Topa" title="Topa" /></span> <p>Report a Loss</p></Link></li>
                    <li><Link to="#"><span><img src={icon2} alt="Topa" title="Topa" /></span> <p>Content Management</p></Link></li>
                    <li><Link to="/eligibilitycheck"><span><img src={icon3} alt="Topa" title="Topa" /></span> <p>Eligibility Check</p></Link></li>
                    <li class="submenu accord" id="" >
                        <Link to="#" class="accord-btn"><span><img src={icon4} alt="Topa" title="Topa" /></span> <p>Quick Quote</p></Link>
                        <ul class="accord-target">
                            <li><Link to="#"><span><img src={icon5} alt="Topa" title="Topa" /></span> <p>Commercial Auto</p></Link></li>
                            <li><Link to="#"><span><img src={icon6} alt="Topa" title="Topa" /></span> <p>Excess Liability</p></Link></li>
                            <li><Link to="#"><span><img src={icon7} alt="Topa" title="Topa" /></span> <p>TPCI</p></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="sidefooter">
                <div class="flogo"><Link to="#"><img src={logo} alt="Topa" title="Topa" /></Link></div>
                <div class="copyright">©2021 Topa Insurance Company.<br />
                    All Rights Reserved.</div>
            </div>
        </section>
    )
}
export default Sidebar