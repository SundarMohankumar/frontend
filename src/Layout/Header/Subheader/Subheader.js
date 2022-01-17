import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Icon from '../../../Components/Icon/Icon';
import $ from 'jquery'


const SubHeader = ({ BreadCrum }) => {

    useEffect(() => {
        $('.sidebarNavigation').removeClass('sidebarNavigationNew');

        $('.toggleBtn').on('click', function () {
            $('.sidebarNavigation').toggleClass('sidebarNavigationNew');
            $('.submenu').removeClass("menu-open");
            $('.sidebar').toggleClass('sidebarNew');
            $('.sidebar').toggleClass('sidebarNewipad');
            $('.mainContent').toggleClass('mainContentNew');
            $('.dateTimeheader').toggleClass('dateTimeheaderNew');
            $('.commonheader').toggleClass('commonheaderNew');
            $('.userheader').toggleClass('userheaderNew');
            $('.breadcum').toggleClass('breadcumNew');
            $('.submenu > a').removeClass('submenuactive');
            $('.submenu > ul').slideUp();
        });
    }, [])

    const finalClassName = (ind) => {
        if (BreadCrum.length-1 === ind) {
            return ("brd-active")
        }
        else {
            return ("")
        }
    }

    return (
        <div className="userheader">
            <div className="toggwrp">
                <a href="#" className="toggleBtn">&nbsp;</a>
                <div className="breadcum">
                    <ul className='m-0'>
                        {BreadCrum.map((val, ind) => {
                            return (
                                <li key={ind} className={finalClassName(ind)}>
                                    {val === 'My Dashboard' && <Link to="/dashboard">My Dashboard</Link>}
                                    {val === 'Report A Loss' && <Link to="/reportaloss">Report A Loss</Link>}
                                    {val === 'Eligibility Check' && <Link to="/eligibilitycheck">Eligibility Check</Link>}
                                    {val === 'Quick Quote' && <Link to="#">Quick Quote</Link>}
                                    {val === 'Commercial Auto' && <Link to="/commercialAuto">Commercial Auto</Link>}
                                    {val === 'Excess Liability' && <Link to="/Excessliability">Excess Liability</Link>}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <div className="search">
                <form>
                    <input placeholder="Search Policy or  Claim" name="search" id="search" type="text" value="" />
                    <input type="submit" name="" id="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}
export default SubHeader;