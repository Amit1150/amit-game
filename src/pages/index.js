import React, { useState } from "react"

import "../styles/styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  
  const [isHangmanVisible, setHangmanVisible] = useState(false)

  const [isTicTacToeVisible, setTicTacToeVisible] = useState(false)

  const showHangManHandler = () => {
    setTicTacToeVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setHangmanVisible(() => {
      return true
    });
  }

  const showTicTacToeHandler = () => {
    setHangmanVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setTicTacToeVisible(() => {
      return true
    });
  }

  const resetLoader = () => {
    setIsLoading(() => {
      return false;
    })
  };

  return (
    <Layout>
      <Seo title="Home" />
      <div className="container-fluid">
        <div className="row">
          <button
            type="button"
            className="btn btn-primary mr-15"
            onClick={showHangManHandler}
          >
            Show Hangman
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={showTicTacToeHandler}
          >
            Show Tic Tac Toe
          </button>
        </div>
        <div className="row mt-20">
          {isLoading && <div className="alert alert-success">Game Is Loading........</div>}
          {isHangmanVisible && (
            <iframe
              title="Hangman Game"
              src="https://amit-hangman-game.netlify.app/"
              onLoad={resetLoader}
              className="conatiner__game"
            ></iframe>
          )}
          {isTicTacToeVisible &&  <iframe
              title="TicTacToe Game"
              src="https://amit-tictactoe-game.netlify.app/"
              onLoad={resetLoader}
              className="conatiner__game"
            ></iframe>}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
