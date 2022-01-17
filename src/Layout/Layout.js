import React from "react";
import Header from './Header/Header'
import Sidebar from "./Sidebar/Sidebar";
import Subheader from './Header/Subheader/Subheader'
import OpendTab from "./Header/OpenedTab/OpendTab";
// import TalkTo from "../Screens/TalkTo/TalkTo";

function Layout({ children, BreadCrum,TabName,sidebarQQSopen }) {
    return (
        <div>
            <Header />
            <Subheader BreadCrum={BreadCrum} />
            <Sidebar sidebarQQSopen={sidebarQQSopen} TabName={TabName}/>
            <OpendTab TabName={TabName}/>
            {/* <TalkTo /> */}
            <div className='innerpages'>
                <main ><div className="row"><section class="mainContent">{children}</section></div></main>
            </div>
        </div>

    )
}

export default Layout;