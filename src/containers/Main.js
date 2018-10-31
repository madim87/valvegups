import { connect } from 'react-redux'
import * as AppActions from '../actions'
import { bindActionCreators } from 'redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    specData    : state.setSpecData,
    cylinderData: state.calculateGap,
    storeData   : state

})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AppActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)