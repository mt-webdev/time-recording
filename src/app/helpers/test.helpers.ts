import * as renderer from 'react-test-renderer';
import * as React from 'react';

export function getComponentFromRenderer(renderer: renderer.Renderer): React.Component<any, any> {
    return renderer['_component']['_renderedComponent']['_instance'];
}

