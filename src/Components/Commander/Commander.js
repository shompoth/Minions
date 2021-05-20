// Librairies
import React from "react";
import classes from "./Commander.module.css";
import actionsTypes from "../../store/actions/actionsTypes";
import * as actionCreators from "../../store/actions/index";

// Redux
import { connect } from "react-redux";

function Commander(props) {
  return (
    <div className={classes.Commander}>
      <button onClick={props.createMinion}>Créer un minion</button>
      <button onClick={props.destroyMinion}>Détruire un minion</button>
      <button onClick={() => props.createTeam(5)}>Créer une équipe de 5 minions</button>
      <button onClick={() => props.destroyTeam(5)}>Détruire une équipe de 5 minions</button>
      <button onClick={() => props.save(props.minions)}>Stocker le nombre d'infiltrés</button>
    </div>
  );
}

// Abonnement au state
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
  };
};

// Récupérer les actions
const mapDispatchToProps = (dispatch) => {
  return {
    createMinion: () => dispatch(actionCreators.createMinion()),
    destroyMinion: () => dispatch(actionCreators.destroyMinion()),
    createTeam: (value) => dispatch(actionCreators.createTeam(value)),
    destroyTeam: (value) => dispatch(actionCreators.destroyTeam(value)),
    save: (value) => dispatch(actionCreators.save(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commander);
