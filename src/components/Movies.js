import React from "react";
import { getMovies } from "../services/fakeMoviesService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    isLiked: false
  };
  handleDelete(item) {
    this.setState(prevState => {
      return {
        movies: prevState.movies.filter(m => m._id !== item._id)
      };
    });
  }
  handleLike(index) {
    console.log(`Liked ${index.title}`);
    this.setState(prevState => {
      return { isLiked: !this.state.isLiked };
    });
  }
  render() {
    const classes = "fa fa-heart  fa-heart-o";
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((item, index) => {
              return (
                <tr key={item._id} index={item.index}>
                  <td>{item.title}</td>
                  <td>{item.genre.name}</td>
                  <td>{item.numberInStock}</td>
                  <td>{item.dailyRentalRate}</td>
                  <td>
                    <i
                      onClick={() => this.handleLike(index + 1)}
                      className={
                        this.state.isLiked ? "fa fa-heart" : "fa fa-heart-o"
                      }
                    >
                      {" "}
                    </i>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(item)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
