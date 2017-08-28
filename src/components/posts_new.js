import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input}//including all the event handlers
                />
            </div>
        )
    }
    render() {
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({//reduxForm is like the connect, ability to communicate from the form to the reduer
    form: 'PostsNewForm'//string must be unique, then not to share its state with other forms
})(PostsNew);