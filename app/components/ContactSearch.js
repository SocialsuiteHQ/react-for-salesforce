import React, { Component } from 'react';
import Input from '@salesforce/design-system-react/components/forms/input';
import Button from '@salesforce/design-system-react/components/button';

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

    onButtonPress = () => {
        this.props.actions.testAction('New Placeholder Text');
    }

    searchKeyChange = (event) => {
        this.props.service.findByName(event.target.value, data => this.setState({ contacts: data }));
    }

    render() {
        return (
            <div>
                <Button label="Check Placeholder Text" variant="brand" onClick={this.onButtonPress} />
                <Input id="base-id" placeholder={this.props.message} onChange={this.searchKeyChange} />
                <ContactList contacts={this.state.contacts} navigateToSObject={this.props.service.navigateToSObject} />
            </div>
        );
    }
}

export default ContactSearch;
