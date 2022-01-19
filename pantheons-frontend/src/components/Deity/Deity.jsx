import "./Deity.scss";

const Deity = (props) => {
  const {
    deityName,
    deityOf,
    deityPantheon,
    createdBy
  } = props.deity;

  return (
    <div className="deity">
      <h3>{deityName}</h3>
      <p>Deity of: {deityOf}</p>
      <p>Pantheon: {deityPantheon}</p>
      <p>Added by: {createdBy}</p>
    </div>
  )
}

export default Deity