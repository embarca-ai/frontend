import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Divider, Paper } from '@material-ui/core';

import { Timer, Room, DirectionsBus, Whatshot, Functions, Spellcheck } from '@material-ui/icons';

import Header from '../../components/Header';

import './styles.css';
import profileImg from '../../assets/person.png';
import profile2Img from '../../assets/person2.png';
import profile3Img from '../../assets/person3.png';
import profile4Img from '../../assets/person4.png';

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
    normal: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 10
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
                    <Typography><b>80%</b> de Progresso geral</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <Functions style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>85%</b> de Estrelas em Matemática</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <Spellcheck style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>75%</b> de Estrelas em Português</Typography>
                </Paper>

                <Paper variant="outlined" className={classes.paper}>
                    <DirectionsBus style={{ fontSize: 22, marginRight: 6 }} /> 
                    <Typography><b>21</b> dias Acelerando...</Typography>
                </Paper>
            </div>
        </div>
        <div className={classes.infoContainer}>
            <Typography variant='h5' 
                style={{ fontSize: 18, display: 'block', paddingBottom: 8 }}>Amigos</Typography>
            <div>
                <Paper variant="outlined" className={classes.paper}>
                    <Avatar alt="Shaolin Pigs Killer" src={profile2Img} className={classes.normal} />
                    <Typography>Shaolin Pigs Killer</Typography>
                </Paper>
                <Paper variant="outlined" className={classes.paper}>
                    <Avatar alt="Marilena da Silva" src={profile3Img} className={classes.normal} />
                    <Typography>Marilena da Silva</Typography>
                </Paper>
                <Paper variant="outlined" className={classes.paper}>
                    <Avatar alt="Johnathan Piaba" src={profile4Img} className={classes.normal} />
                    <Typography>Johnathan Piaba</Typography>
                </Paper>
            </div>
        </div>
        </>
    );
}