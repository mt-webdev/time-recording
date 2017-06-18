import * as React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

class ClickCounterState {
    counter: number;
}

export class ClickCounter extends React.Component<{}, ClickCounterState> {

    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    resetCounter() {
        // this.setState({ counter: 0 });
    }

    render() {
        return (
            <div className="click-counter">
                <Row>
                    <Col xs={6}>
                        <ButtonGroup>
                            <Button onClick={() => this.resetCounter()}>Reset</Button>
                            <Button onClick={() => this.incrementCounter()}>Count on</Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs={6}>
                        {this.state.counter}
                    </Col>
                </Row>

            </ div>
        );
    }
}