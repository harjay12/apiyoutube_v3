import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  state = {
    term: "",
  };
  /** The function update the term as the user input query.
   */
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  /** The function take the properties of the handleChange(event)
   * to pass it through the search form tag.
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    /** The updated query */
    const { term } = this.state;

    return (
      <div className=" container">
        <h2 className="header">Live: Youtube's Video Search</h2>

        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field ">
            <label htmlFor="video-search">
              <input
                style={{ height: "40px" }}
                onChange={this.handleChange}
                name="video-search"
                type="text"
                value={term}
                placeholder="Search"
              />
            </label>
          </div>

          <button className="ui button icon-box ">
            <i className="fas fa-search " style={{ color: "red" }} />
          </button>
        </form>
      </div>
    );
  }
}
export default SearchForm;
