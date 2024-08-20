import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center"><img src="/infinty_loader.gif" height={this.props.height} width={this.props.width} /></div>
        )
    }
}
