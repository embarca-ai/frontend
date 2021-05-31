import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Divider, Paper } from '@material-ui/core';

import { Timer, Room, DirectionsBus, Whatshot } from '@material-ui/icons';

import Header from '../../components/Header';

import './styles.css';
import profileImg from '../../assets/person.png';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    profileContainer: {
        display: 'flex',
        padding: 20,
        justifyContent: 'space-between'
    },
    infoContainer: {
        padding: 20,
    }, 
    paper: {
        padding: 10,
        marginBottom: 4,
        display: 'flex', 
        alignItems: 'center'
    }
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <>
        <Header />
        <div className={classes.profileContainer}>
            <div>
                <Typography variant='h5' style={{ fontSize: 22, display: 'block', paddingBottom: 8 }}>Flavia ofthe Tire</Typography>
                <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}>
                    <Timer style={{ fontSize: 12, marginRight: 6 }} />
                    Entrou em Março de 2021
                </Typography>
                <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}>
                    <Room style={{ fontSize: 12, marginRight: 6 }} />
                    Sobral, Ceará
                </Typography>
            </div>
            <Avatar alt="Flavia ofthe Tire" src={profileImg} className={classes.large} />
        </div>
        <Divider />
        <div className={classes.infoContainer}>
            <Typography variant='h5' 
                style={{ fontSize: 18, display: 'block', paddingBottom: 8 }}>Estatísticas</Typography>
            <div>
                <Paper variant="outlined" className={classes.paper}>
                    <Whatshot style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>79%</b> de Progresso geral</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <DirectionsBus style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>99%</b> de Estrelas em MAT</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <DirectionsBus style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>75%</b> de Estrelas em POR</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <DirectionsBus style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>21</b> dias Acelerando...</Typography>
                </Paper>
            </div>
        </div>
        </>
    );
}