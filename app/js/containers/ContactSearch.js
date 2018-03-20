import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '~/actions';
import ContactSearch from '~/js/components/ContactSearch';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    };
}

const mapStateToProps = state => ({
    message: state.test.message
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(ContactSearch));
