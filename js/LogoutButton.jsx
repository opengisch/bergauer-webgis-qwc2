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

class LogoutButton extends React.Component {
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
            <button className="map-button" onClick={this.doLogout} style={{bottom: (5 + 4 * this.props.position) + 'em'}} title="Logout" >
                {/*FIXME: logout icon is the same as login. For now let's use dock that looks like a logout action <Icon icon="login" title="Logout" />*/}
                <Icon icon="dock" title="Logout" />
            </button>
        );
    }
    doLogout = () => {
        open("/admin/logout");
    }
}

export default connect((state) => ({
    currentTheme: state.theme.current
}))(LogoutButton);
