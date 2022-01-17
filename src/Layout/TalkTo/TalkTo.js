import Button from '../../Components/Button/Button'
import Icon from '../../Components/Icon/Icon'
const TalkTo = () => {
    return (
        <div className="form-group me-5" style={{ float: "right", position: "fixed", bottom: "0", right: "0", zIndex:'999' }}>
            <Button className='talkto'>
                <Icon className="fa fa-comment" /> Let's Chat
            </Button>
        </div>
    )
}
export default TalkTo
