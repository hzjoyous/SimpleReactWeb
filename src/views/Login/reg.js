import React, { useState } from 'react'
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import People from "@material-ui/icons/People";
import InputAdornment from "@material-ui/core/InputAdornment";

import Footer from "@/views/Layouts/footer.js";
import Header from "@/views/Layouts/Header.js";
import HeaderLinks from "@/views/Layouts/HeaderLinks.js";

import GridItem from "@/components/Grid/GridItem.js"
import GridContainer from "@/components/Grid/GridContainer.js"

import Button from "@/components/CustomButtons/Button.js";
import Card from "@/components/Card/Card.js";
import CardBody from "@/components/Card/CardBody.js";
import CardHeader from "@/components/Card/CardHeader.js";
import CardFooter from "@/components/Card/CardFooter.js";
import CustomInput from "@/components/CustomInput/CustomInput.js";

import image from "@/assets/img/bg7.jpg"

import { signupPageStyle } from "@/views/simpleStyle.js"
import { reg } from 'src/requests/request';

const useStyles = makeStyles(signupPageStyle)

export default function Login(props) {
    const [cardAnimaton, setCardAnimation] = useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 500);
    const [username, setuUsername] = useState('');
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const classes = useStyles();
    const { ...rest } = props;
    let submitLogin = (e) => {
        e.preventDefault();
        if (password !== repassword) {
            alert('两次输入密码不一致')
        }
        reg(username, password).then((response) => { window.localStorage.setItem('accessToken',response.data.accessToken)})
    }
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
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form} onSubmit={submitLogin}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>reg</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <CustomInput
                                            labelText="First Name..."
                                            id="first"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                value: username,
                                                onChange: (e) => { setuUsername(e.target.value) }
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                                value: password,
                                                onChange: (e) => { setPassword(e.target.value) }
                                            }}
                                        />
                                        <CustomInput
                                            labelText="rePassword"
                                            id="pass2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                                value: repassword,
                                                onChange: (e) => { setRepassword(e.target.value) }
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg" type="submit">
                                            Get started
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>


        </>
    )
}
