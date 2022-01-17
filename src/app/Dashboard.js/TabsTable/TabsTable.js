import open_work_icon from '../../../assets/img/icons/open_work.svg';
import recent_view_icon from '../../../assets/img/icons/recent_view.svg';
import PerformenceStaticsTableOpenWork from "./OpenWork";
import PerformenceStaticsTableRecentList from "./RecentList";

const TabsTable = () => {

    return (
        <div className="demtable">
            <ul className="tabMenu">
                <li className="item"><a href="#" className="actv"><span><img src={open_work_icon} /></span> Open Work</a></li>
                <li className="item"><a href="#"><span><img src={recent_view_icon} /></span> Recently viewed</a></li>
            </ul>
            <PerformenceStaticsTableOpenWork/>
            <PerformenceStaticsTableRecentList/>
        </div>
    )
}
export default TabsTable;