import React, { Component } from 'react';


class Paginator extends Component {
  renderPageButtons = (pages) => {
      return pages.map( (page, i) => {
        if(i === this.props.page || (i > this.props.page && i <= this.props.page + 9) ) {
          return(
            <li className="page-item" key={i}><a className="page-link" href="#" onClick={() => this.handlePage(i + 1)}>{i}</a></li>
          )
        }
      }) 
  }
  handlePrevious() {
    if(this.props.page > 1) {
      this.props.setPaginationPage(this.props.page - 1)
    }
  }

  handleNext() {
    if(this.props.page < this.props.pages) {
      this.props.setPaginationPage(this.props.page + 1)
    }
  }

  handlePage(page) {
    this.props.setPaginationPage(page)
  }

  render() {
    const pagesArray = Array.apply(null, { length: this.props.pages });
    return(
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => this.handlePrevious()}>Previous</a>
          </li>
          {this.renderPageButtons(pagesArray)}
          <li className="page-item">
            <a className="page-link" onClick={() => this.handleNext()}>Next</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Paginator;