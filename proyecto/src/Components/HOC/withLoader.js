import React, { Component } from 'react';

const withLoader = (propValue) =>(WrappedComponent) => {
    return class WithLoeader extends Component {
        constructor(props){
            super(props)
        }

        render(){          
            return this.props[propValue].length === 0 
            ? <h1>Caragando...</h1>
            : <WrappedComponent {...this.props}/>
        }

    }
}

export default withLoader;