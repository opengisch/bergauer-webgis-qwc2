/**
 * Copyright 2017-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LocaleUtils from '../qwc2/utils/LocaleUtils';
import Icon from '../qwc2/components/Icon';
import '../qwc2/plugins/style/Buttons.css';

class LoginButton extends React.Component {
    static propTypes = {
        currentTheme: PropTypes.object,
        position: PropTypes.number,
        zoomToExtent: PropTypes.func
    }
    static defaultProps = {
        position: 5
    }
    render() {
        return (
            <button className="map-button" onClick={this.doLogin} style={{bottom: (5 + 4 * this.props.position) + 'em'}} title="Login" >
                <Icon icon="login" title="Login" />
            </button>
        );
    }
    doLogin = () => {
        open("/admin/login");
    }
}

export default connect((state) => ({
    currentTheme: state.theme.current
}))(LoginButton);
