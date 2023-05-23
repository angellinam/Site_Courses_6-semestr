import { connect } from 'react-redux'
import { authActions } from '../../../redux/action/auth'
import Signup from './Signup'

const mapDispatchToProps = (dispatch) => ({
	signup: (data, callback) => {
		dispatch(authActions.signupAsync(data, callback))
	},
})

export default connect(null, mapDispatchToProps)(Signup)
