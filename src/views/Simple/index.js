// module 依赖
import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

// components 依赖
import Parallax from "@/components/Parallax/Parallax"
import GridItem from "@/components/Grid/GridItem"
import GridContainer from "@/components/Grid/GridContainer"

// viewLoyouts 依赖
import Footer from "@/views/Layouts/footer";
import Header from "@/views/Layouts/Header.js";
import HeaderLinks from "@/views/Layouts/HeaderLinks.js";
import {mainRoute} from "@/views/routes"

import bd_jpg from "@/assets/img/bd.jpg"

import {mainStyle} from "@/views/simpleStyle.js"

const useStyles = makeStyles(mainStyle);

export default function Simple(props) {
    const classes = useStyles();

    const { ...rest } = props;
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };
    console.log(handleChange)

    return (
        <>
            <Header
                brand="Simple"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />

            <Parallax image={bd_jpg}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Simple</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material-UI Kit based on Material Design.
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {mainRoute.map(value => (
                            <Grid key={value.name} item>
                                <Link to={value.path}><Paper className={classes.paper}>{value.name}</Paper> </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>

            <Footer />
        </ >
    )

}
