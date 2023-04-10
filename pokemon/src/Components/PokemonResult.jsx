import React from "react";
import Pokemon from "./Pokemon";
import Masonry from "react-masonry-css";
import { Alert, Spinner } from "reactstrap";

const PokemonResult = ({ pokemonResult, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {(pokemonResult.data || []).map((item, idx) => (
            <Pokemon
              key={idx}
              data={item}
              setBarData={setBarData}
              toggleBar={toggleBar}
            />
          ))}
        </Masonry>
        {!pokemonResult.resExist && (
          <Alert color="danger">No Matched Pokemon Found</Alert>
        )}
        {pokemonResult.loading && <Spinner color="primary">Loading...</Spinner>}
      </div>
    </React.Fragment>
  );
};

export default PokemonResult;
