import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
  renderError({ error, touched }){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    console.log("formProps: ", formProps);
    let errorClass = `field ${(formProps.meta.error && formProps.meta.touched)? 'error': ''}`;

    return(
      <div className={errorClass}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />      {/*<input onChange={formProps.input.onChange} value={formProps.input.value} />*/}
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    console.log("this.props: ", this.props);

    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

let validate = (formValues) => {
  let errors = {};

  if(!formValues.title){
    errors.title = 'You must enter a title';
  }

  if(!formValues.description){
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
