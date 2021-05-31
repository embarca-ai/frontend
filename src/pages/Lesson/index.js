import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import { Star, StarHalf, StarBorder } from '@material-ui/icons';


import Header from '../../components/Header';

import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    },
    paper: {
        padding: 10,
        marginBottom: 4,
        display: 'flex', 
        alignItems: 'center',
        flexFlow: 'column'
    }
  }));

export default function Lesson() {
    const classes = useStyles();

    return (
        <>
        <Header />
        <div className={classes.root}>
        <Typography variant='h5' 
                style={{ fontSize: 18, display: 'block', paddingBottom: 8 }}>
                    Língua Portuguesa
        </Typography>
        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>PROCEDIMENTOS DE LEITURA</Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>IMPLICAÇÕES DO SUPORTE, DO GÊNERO E/OU DO ENUNCIADOR NA COMPREENSÃO DO TEXTO</Typography>
        </Paper>
        
        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>RELAÇÃO ENTRE TEXTOS</Typography>
        </Paper>
        
        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>COERÊNCIA E COESÃO NO PROCESSAMENTO DO TEXTO</Typography>
        </Paper>

        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>RELAÇÕES ENTRE RECURSOS EXPRESSIVOS E EFEITOS DE SENTIDO</Typography>
        </Paper>
        
        <Paper variant="outlined" className={classes.paper}>
            <div>
                <Star style={{ fontSize: 16, marginRight: 4 }} />
                <StarHalf style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
                <StarBorder style={{ fontSize: 16, marginRight: 4 }} />
            </div>
            <Typography style={{ textAlign: 'center' }}>VARIAÇÃO LINGUÍSTICA</Typography>
        </Paper>

        </div>
        </>
    );
}