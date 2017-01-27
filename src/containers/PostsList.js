import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


// const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch)

const mapStateToProps = state => ({
  posts: state.posts.all
})

class PostsList extends React.Component {

  renderPosts = posts => 
    posts.map( ({ id, title, categories, content }) => 
      <li className='list-group-item' key={id}>
        <Link to={`posts/${id}`}>
          <span className='pull-right'> {categories} </span>
          <strong>{title}</strong>
        </Link>
      </li>
    )
  

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {

    return (
      <div>
        <div className='pull-right'>
          <Link to='/posts/new' className='btn btn-default'>
            Add new post
          </Link>
        </div>
        <hr /> <br />
        <ul className='list-group'>
          {this.renderPosts(this.props.posts)}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsList)