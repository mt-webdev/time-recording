import * as React from 'react';
import { Button } from 'react-bootstrap';

export function ClickMe(props: React.ClassAttributes<{onClick: any, name: string}>) {
    return (
        <Button onClick={props.ref('')} bsStyle="primary">{props.name}</Button>
    );
}