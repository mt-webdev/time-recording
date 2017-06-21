import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

class AppNavState {
    showNav: boolean;
}

export default class AppNav extends React.Component<{}, AppNavState> {

    constructor() {
        super();

        this.state = {
            showNav: true
        };
    }

    render() {
        return (
            <div className="nav">
                <div className="nav-button" onClick={() =>
                    this.setState({ showNav: !this.state.showNav })}>
                    <Glyphicon glyph={'nav'} />
                    Menu {this.state.showNav}
                </div>
            </div>
        );
    }

}

