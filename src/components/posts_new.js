import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input}//includes all the event handlers in on line

                    //replaces 
                    //onChange={field.input.onChange}
                    //onFocus={field.input.onFocus}
                    //...
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

//similar to connect helper , allows us to talk to the redux store
//allows the form to talk to the reduce
export default reduxForm({//reduxForm is like the connect, ability to communicate from the form to the reduer
    form: 'PostsNewForm'//string must be unique, then not to share its state with other forms
})(PostsNew);