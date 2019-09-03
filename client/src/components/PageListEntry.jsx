import React from 'react';

class PageListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoToPage = this.handleGoToPage.bind(this);

  }

  handleGoToPage() {
    this.props.goToPage(this.props.page);
  }

  render () {
    // console.log(this.props)
    return(
      <div className="pages">
        <span onClick={this.handleGoToPage}> {this.props.page}
        </span>
      </div>
    );
  }
}


export default PageListEntry;