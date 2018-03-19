import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Input from '@salesforce/design-system-react/components/forms/input';

import ContactList from './ContactList';

class ContactSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        this.props.service.findAll(data => this.setState({ contacts: data }));
    }

    searchKeyChange = (event) => {
        this.props.service.findByName(event.target.value, data => this.setState({ contacts: data }));
    }

    render() {
        return (
            <div>
                <Input id="base-id" placeholder="Enter persons name..." onChange={this.searchKeyChange} />
                <ContactList contacts={this.state.contacts} navigateToSObject={this.props.service.navigateToSObject} />
            </div>
        );
    }
}

export default hot(module)(ContactSearch);
