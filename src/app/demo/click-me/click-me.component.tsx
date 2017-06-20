import * as React from 'react';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line
export function ClickMe(props: any) {
    return (
        <Button onClick={props.onClick} bsStyle="primary">{props.name}</Button>
    );
}