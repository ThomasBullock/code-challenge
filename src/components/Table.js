import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { sortData } from '../modules/data';
import { setPaginationPage, setPerPage } from '../modules/ui';
import Paginator from './Paginator';
import './Table.css';

class Table extends Component {
  createTableRows(start_offset) {
    return this.props.data.map((item, i) => {
      if(i >= start_offset && i < start_offset + this.props.per_page) {
        return (<tr key={i}>
          <td>{item.get('id')}</td>
          <td>{item.get('title')}</td>
          <td>{item.get('description')}</td>
          <td>{item.get('year')}</td>  
        </tr>)
      }
    })
  }

  render() {
    // pagination
    const pages = Math.ceil(this.props.data.size / this.props.per_page);
    const current_page = this.props.page;
    const start_offset = (current_page - 1) * this.props.per_page;

    return (
      <Fragment>
        <div className="control">
          <Paginator 
            page={this.props.page} 
            pages={pages}
            per_page={this.props.per_page}
            setPaginationPage={this.props.setPaginationPage}
            setPerPage={this.props.setPerPage}
          />
          <input className="disabled form-control" placeholder="filter" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <button className="btn btn-light" onClick={() => this.props.sortData('id')}>Id</button>
              </th>
              <th>
                <button className="btn btn-light" onClick={() => this.props.sortData('title')}>Title</button>
              </th>
              <th>
                <button className="btn btn-light disabled" onClick={() => this.props.sortData('description')}>Description</button>
              </th>              
              <th>
                <button className="btn btn-light" onClick={() => this.props.sortData('year')}>Year</button>
              </th>
            </tr>             
          </thead>
          <tbody>
            {this.createTableRows(start_offset)}
          </tbody>
        </table>
      </Fragment>
    )
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortData: (category) => dispatch(sortData(category)),
    setPaginationPage: (category) => dispatch(setPaginationPage(category)),
    setPerPage: (perPage) => dispatch(setPerPage(perPage))    
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.get('ui'))
	return {
    data: state.get('data'),
    page: state.getIn(['ui', 'page']),
    per_page: state.getIn(['ui', 'per_page'])
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Table);