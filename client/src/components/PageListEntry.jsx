import React from 'react';

class PageListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoToPage = this.handleGoToPage.bind(this);

  }

  handleGoToPage() {
    this.props.goToPage(this.props.page);
    this.props.handleScroll();
  }

  render () {
    // console.log(this.props.currentPage)
    let pageNum;
    if (this.props.currentPage === this.props.page) {
      pageNum = <div className="activePage"> <span>{this.props.page} </span></div>;
    } else {
      pageNum = <div className="pages">
        <span onClick={this.handleGoToPage}> {this.props.page}
        </span>
      </div>;
    }
    return (
      <div>
        {pageNum}
      </div>
    );
  }
}

export default PageListEntry;