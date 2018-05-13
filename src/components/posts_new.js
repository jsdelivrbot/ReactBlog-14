import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    //replaces 
                    //onChange={field.input.onChange}
                    //onFocus={field.input.onFocus}
                    //...
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        // this.props.createPost(values, () => {
        //   this.props.history.push('/');
        // });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            // handleSubmit is reduxForm related, once that validated then we move to our onSubmit callback
            //bind this since we pass a callback executed out of the context, move to arrow better ?
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        );
    }
}

//all the entered values in the form
function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {//title is same as field name above "title"
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

//similar to connect helper , allows us to talk to the redux store
//allows the form to talk to the reduce
export default reduxForm({//reduxForm is like the connect, ability to communicate from the form to the reduer
    validate,
    form: 'PostsNewForm'//string must be unique, then not to share its state with other forms
})(PostsNew);