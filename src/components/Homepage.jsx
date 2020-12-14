import React from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
import "./Homepage.css";

const KEY = "AIzaSyCARwCbt1GPPn8bGQwFGZELZ_WCFV3AWhA";

const loadClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    order: "relevance",
    maxResults: 6,
    key: KEY,
  },
});

class Homepage extends React.Component {
  state = {
    videos: {},
    selectedVideo: null,
    reachLastPage: false,
    query: "",
    nextToken: "",
    prevToken: "",
    On: true,
    Off: false,
    prev: false,
  };

  /** first results */
  /**----------------------------------------------------------------------------------------------- */

  handleSubmit = async (termFromSearchForm, token) => {
    const cancelTokenSource = axios.CancelToken.source();
    if (!termFromSearchForm.trim()) {
      console.log("Empty query");
      cancelTokenSource.cancel();
    } else {
      this.setState({ query: termFromSearchForm, prev: !this.state.On });
    }
    const response = await loadClient.get("/search", {
      params: {
        q: termFromSearchForm,
        pageToken: token,
      },
      cancelToken: cancelTokenSource.token,
    });

    this.setState({ nextToken: response.data.nextPageToken });
    this.setState({ prevToken: response.data.prevPageToken });
    console.log(response);

    if (response.data.nextPageToken) {
      this.setState({
        videos: response.data.items,
      });
      console.log("go to nextToken 2 : " + response.data.nextPageToken);
    } else {
      this.setState({
        videos: response.data.items,
      });
      console.log("go to prevToken 2 : " + response.data.prevPageToken);
    }
  };
  /**----------------------------------------------------------------------------------------------- */
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  /**----------------------------------------------------------------------------------------------- */

  buttonHandler(query, token) {
    console.log("The term is " + query + " and the nextToken is " + token);
    const { reachLastPage } = this.state;
    if (!reachLastPage) {
      return <div>{this.handleSubmit(token, query)};</div>;
    } else {
      console.log("we already have reached last page!");
    }
  }
  /**----------------------------------------------------------------------------------------------- */

  handleClicked = (object) => {
    this.setState({ Off: this.state.On });
    this.handleVideoSelect(object);
  };
  handleClick_Next_Prev = (query, token) => {
    if (this.buttonHandler(query, token)) {
      this.setState({ prev: this.state.On });
    }
  };

  /**----------------------------------------------------------------------------------------------- */
  rendersearchVid = () => {
    const { videos } = this.state;
    const { nextToken } = this.state;
    const { prevToken } = this.state;
    const { query } = this.state;

    if (Object.keys(videos).length && videos.length) {
      return (
        <div>
          <div onClick={() => this.handleClick_Next_Prev(nextToken, query)}>
            <button className="ui right floated right labeled  button ">
              <i className="right arrow "></i>
              Next
            </button>
          </div>
          <div
            className={this.state.prev ? "enablePrev" : "disablePrev"}
            onClick={() => this.handleClick_Next_Prev(prevToken, query)}
          >
            <button className="ui right floated left labeled button  ">
              <i className="left arrow "></i>
              Prev
            </button>
          </div>

          <div className="ui grid ui center aligned container">
            {videos.map((object) => {
              return (
                <div
                  className={
                    this.state.Off
                      ? "ui row eleven wide column leftScale"
                      : "ui row five wide column "
                  }
                  onClick={() => this.handleClicked(object)}
                >
                  <a key={object.id.videoId} href={object.snippet.tumbnails}>
                    <img
                      className="ui image  imgRef"
                      src={object.snippet.thumbnails.medium.url}
                      alt={object.snippet.description}
                    />
                    <div className="content">
                      <div style={{ width: "250px", textAlign: "center" }}>
                        {object.snippet.title}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };
  /**----------------------------------------------------------------------------------------------- */
  renderSelection = () => {
    const { selectedVideo } = this.state;

    const BASE_EMBED_URL = "https://www.youtube.com/embed/";
    if (selectedVideo) {
      return (
        <div>
          <iframe
            style={{
              width: "600px",
              height: "400px",
              position: "absolute",
              top: "400px",
            }}
            src={`${BASE_EMBED_URL}${selectedVideo.id.videoId}`}
            allowFullScreen
            title="Video player"
          />
          <div
            className="ui segment"
            style={{
              position: "absolute",
              top: "800px",
              width: "600px",
              height: "auto",
            }}
          >
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        </div>
      );
    }
  };

  /**----------------------------------------------------------------------------------------------- */

  render() {
    return (
      <div>
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>Homepage</h2>
        </Jumbotron>
        <div className="ui container" style={{ paddingBottom: "11em" }}>
          <div className="heading " style={{ marginBottom: "50px" }}>
            <SearchForm handleFormSubmit={this.handleSubmit} />
          </div>

          {this.rendersearchVid()}

          {this.renderSelection()}
        </div>
      </div>
    );
  }
}
export default Homepage;
