import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'


const mapStateToProps = state => ({
  post: state.posts.post
})

class ShowPost extends React.Component {

  deleteIt = () => {
    this.props.deletePost(this.props.params.id)
    this.props.router.push('/')
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  render() {
    if (!this.props.post) return <div>Loading...</div>
    
    const { title, content, categories } = this.props.post
    
    return (
      <div>
        <Link to='/' className='pull-left'>   
          <span className="glyphicon glyphicon-chevron-left"></span> 
          Home
        </Link>

        <button className='btn btn-danger pull-right'
          onClick={ this.deleteIt }>
          <span className="glyphicon glyphicon-trash"></span> &nbsp;&nbsp;
          Delete Post
        </button>

        <div className="col-md-10 col-md-offset-1">
          <h4> {title} </h4>
          <strong> {categories} </strong>
          <p> {content} </p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(ShowPost)