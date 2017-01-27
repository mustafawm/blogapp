import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { reduxForm, Field } from 'redux-form'

import Spiner from 'react-icons/lib/fa/spinner'

const renderInputField = ({ input, label, type, className, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label>{label}</label>
      <input {...input} type={type} className={className}/>
      { touched && (error && <span className="text-danger">{error}</span>) }
  </div>
)

const renderTextarea = ({ input, label, className, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label>{label}</label>
      <textarea {...input}  className={className} />
      { touched && (error && <span className="text-danger">{error}</span>) }
  </div>
)

class NewPost extends React.Component {

  submit = (fields) => {
    this.props.createPost(fields)
        .then( () => this.props.router.push('/'))
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form 
        onSubmit={handleSubmit(this.submit)}
        className='col-md-6 col-md-offset-3'
      >
        <h3>
          <span className="glyphicon glyphicon-pencil"></span> &nbsp;
          New Post
        </h3>
        <hr />
        
        <Field  
          component={renderInputField} 
          name="title" type="text" label="Title" className="form-control"
        />
        
        <Field  
          component={renderInputField} 
          name="categories" type="text" label="Categories" className="form-control"
        />

        <Field  
          component={renderTextarea} 
          name="content" type="text" label="Content" className="form-control"
        />

        <button 
          type='submit' disabled={submitting}
          className='btn btn-info'
        > 
          {
            !submitting ? 
              <span><span className="glyphicon glyphicon-send"></span> Submit</span>
            : <span><Spiner /> Submitting</span>
          }  
        </button>

        <Link to='/' className='btn btn-danger pull-right'> 
          <span className="glyphicon glyphicon-remove"></span> Cancel 
        </Link>
        
      </form>
    )
  }
}

const validate = values => {
  let errors = {}
  
  if (!values.title) errors.title = 'Required'
  if (!values.categories) errors.categories = 'Required'
  if (!values.content || values.content.length < 15 ) errors.content = 'Must be >14 chars long'
  
  return errors
}

const form = reduxForm({ form: 'NewPost', validate })(NewPost)

export default connect(null, { createPost })(form)