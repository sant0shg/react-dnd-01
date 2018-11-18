import React from 'react';
import { DragSource } from 'react-dnd';
import './source.css';

const components = [
    'input',
    'checkbox',
    'select',
    'button'
]
class Source extends React.Component{
    render(){
        return(
            <div className="source">
            <ul>
            {
                components.map(component=>{
                    return <ListItem component={component}/>
                })
            }
            </ul>
            </div>
        )
    }
}

const spec = {
    beginDrag(props, monitor, component) {
        // { component: 'input' }
        const item = { ...props};
        return item;
    }
};

const collect = (connect, monitor)=>{
  return {
    connectDragSource: connect.dragSource()
  };
}


const ListItem = DragSource("form-elements",spec,collect)(props=>{
    const { connectDragSource, component } = props;
    return connectDragSource(<li>{component}</li>)
});


export default Source