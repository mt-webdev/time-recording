import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class AppNav extends React.Component<{}, null> {

    render() {
        return (
            <div className="nav">
                <div className="nav-button">
                    <Glyphicon glyph={'nav'}  />
                    Menu
                </div>
            </div>
        );
    }

}

