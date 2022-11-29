import { connect } from "react-redux";

function DisplayCounter(props) {
    return(
        <>
        <h1>Display Counter</h1>
        <h2>{props.ctr}</h2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter);