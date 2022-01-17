import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import TabsTable from './TabsTable/TabsTable'
import $ from 'jquery'
import dash1 from '../../assets/img/icons/dash1.png';
import dash2 from '../../assets/img/icons/dash2.png';
import dash3 from '../../assets/img/icons/dash3.png';
import graph1 from '../../assets/img/graph1.jpg';
import graph2 from '../../assets/img/graph2.jpg';

const Dashboard = () => {

    useEffect(() => {
        $('body').on("click", '.tabMenu .item a', function () {
            var indx = $(this).parent().index();
            $(".tabMenu .item a").removeClass("actv");
            $(this).addClass("actv");
            $(".tabContent").hide();
            $(".tabContent").eq(indx).fadeIn();
        });
    }, [])

    return (
        <Layout TabName='Dashboard' BreadCrum={['My Dashboard']} sidebarQQSopen='true'>
            <div className="coverContainer">
                <div className="dashboard">
                    <div className="left">
                        <div className="statwrap">
                            <div className="statbx">
                                <div className="icon"><span><img src={dash1} /></span> <p>Total<br />
                                    Quotes</p></div>
                                <div className="num">870</div>
                            </div>
                            <div className="statbx">
                                <div className="icon"><span><img src={dash2} /></span> <p>Total<br />
                                    Claims</p></div>
                                <div className="num">258</div>
                            </div>
                            <div className="statbx">
                                <div className="icon"><span><img src={dash3} /></span> <p>Total<br />
                                    Policies</p></div>
                                <div className="num">170</div>
                            </div>
                        </div>
                        <TabsTable />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
