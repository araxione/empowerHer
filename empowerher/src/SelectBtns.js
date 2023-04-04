import React from "react";
import styled from "styled-components";




class SelectBtns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    buttonSelected = selected => ev => {
        this.setState({ selected })
    }



    render() {
        return (
            <Button className={key === this.state.selected ? 'selected' : ''}>
                {this.props}
            </Button>
        );
    }
}