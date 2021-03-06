import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import Usuarios from './Tablas/Usuarios';
import Conjuntos from './Tablas/Conjuntos';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function MainContent() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route path="/usuarios">
                    <Usuarios/>
                </Route>
                <Route path="/conjuntos">
                    <Conjuntos/>
                </Route>
                <Route path="/casa">
                    <h2>casas</h2>
                </Route>
                <Route path="/salir">
                    <h2>salir</h2>
                </Route>
                <Route path="/">
                    <h2>dasboard</h2>
                </Route>
            </Switch>
        </main>
    );
}

MainContent.propTypes = {
    children: PropTypes.node,
};