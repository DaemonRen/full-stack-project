import "./DeityList.scss";
import Deity from "../Deity/Deity";

const DeityList = (props) => {
  return (
    <>
      <h2 className="heading">All The Deities In The World...</h2>
      <div className="container">
        {props.deities && props.deities.map(deity => <Deity key={deity.id} deity={deity} />)}
      </div>
    </>
  )
}

export default DeityList