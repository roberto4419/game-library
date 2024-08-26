import React from "react";
import { useFetch } from "../utils/useFetch";
import { Layout } from "../components/Layout";
import { GameCardList } from "../components/GameCardList";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from "react-toastify";

export const GameLibrary = () => {
	const apiKey = "49b22289e63f4ea5afede186d6b3acc1"
	const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=20`;
	const { dataGames, loadingState, errorState } = useFetch(url, true);

	if (loadingState) {
		return (
			<div className="loader">
				<div className="animated-loader"></div>
			</div>
		);
	}

	if (errorState) {
		return <div className="error-message">oops, it seems that the API is not responding. Please try again.</div>;
	}

	return (
		<Layout>
			<Container className="gamegrid">
				<SearchBar className="searchbar" />
				<GameCardList gameList={dataGames.results} />
			</Container>
			<ToastContainer
				position="top-center"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</Layout>
	);
};