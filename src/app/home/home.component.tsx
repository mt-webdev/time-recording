import * as React from 'react';
import {} from 'react-bootstrap';
import { Router } from 'react-router';

export default class Home extends React.Component<{}, null> {

    render() {
        console.log('router', Router);
        return (
            <h1>Home</h1>
        );
    }
}
