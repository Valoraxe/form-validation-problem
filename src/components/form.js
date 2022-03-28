import React, { useState, useEffect } from "react";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [animalColour, setColour] = useState('');
    const [tigerType, setTigerType] = useState('');

    const [bearCheck, setBear] = useState(false);
    const [tigerCheck, setTiger] = useState(false);
    const [snakeCheck, setSnake] = useState(false);
    const [donkeyCheck, setDonkey] = useState(false);

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorAnimalCol, setErrorColour] = useState(false);
    const [errorAnimalType, setErrorType] = useState(false);
    const [errorTigerType, setErrorTiger] = useState(false);

    const checkEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email)
    }

    const checkTypes = () => {
        const myArray = [];

        bearCheck && myArray.push("bear");
        tigerCheck && myArray.push("tiger");
        snakeCheck && myArray.push("snake");
        donkeyCheck && myArray.push("donkey");

        return myArray.length > 1
    }
    
    const submitForm = e => {
        let userError = false;

        if (!checkEmail()) { setErrorEmail(true); userError = true;  }
        if (password.length < 9) { setErrorPassword(true); userError = true; }
        if (animalColour === '') { setErrorColour(true); userError = true; } 
        if (!checkTypes()) { setErrorType(true); userError = true; }
        if (tigerCheck && tigerType === "") { setErrorTiger(true); userError = true; }

        userError && e.preventDefault();
    }

    useEffect(() => {
        if (errorEmail === true && checkEmail()) {
            setErrorEmail(false)
        }
    }, [email]);

    useEffect(() => {
        if (errorPassword === true && password.length > 8) {
            setErrorPassword(false);
        }
    }, [password]);

    useEffect(() => {
        if (errorAnimalCol === true && animalColour !== "") {
            setErrorColour(false);
        }
    }, [animalColour]);

    useEffect(() => {
        if (errorAnimalType === true && checkTypes()) {
            setErrorType(false);
        }
    }, [bearCheck, tigerCheck, snakeCheck, donkeyCheck]);

    useEffect(() => {
        if (tigerCheck === false) {
            setTigerType('');
            setErrorTiger(false);
        } else if (tigerCheck === true && errorTigerType === true && tigerType !== "") {
            setErrorTiger(false);
        }
    }, [tigerCheck, tigerType]);

    return (
        <>
            <form method='post' action='' onSubmit={e => submitForm(e)}>
                <h1>Fill out this awesome form</h1>        
                
                <fieldset>
                    <h3>Your details</h3>
                    
                    <p className={errorEmail ? "error" : ""}>
                        <label className='label' htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                        {errorEmail && <span> Must be a valid e-mail</span>}
                    </p>
            
                    <p className={errorPassword ? "error" : ""}>
                        <label className='label' htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password'
                        value={password} onChange={e => setPassword(e.target.value)}/>
                        {errorPassword && <span> Password must contain more than 8 characters</span>}
                    </p>
                </fieldset>

                <fieldset>
                    <h3>Your animal</h3>
                    
                    <p className={errorAnimalCol ? "error" : ""}>
                        <label className='label' htmlFor='colour'>Colour</label>
                        <select name='colour' id='colour' 
                        value={animalColour} onChange={e => setColour(e.target.value)}>
                            <option value=''>Choose colour</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                            <option value='red'>Red</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                        </select>
                        {errorAnimalCol && <span> Please choose a colour</span>}
                    </p>
            
                    <p className={errorAnimalType ? "error" : ""}>
                        <span className="label">Animal</span>
                        
                        <input type='checkbox' name='animal' value='bear' id='bear'
                        checked={bearCheck} onChange={() => setBear(!bearCheck)}/>
                        <label htmlFor='bear'>Bear</label>

                        <input type='checkbox' name='animal' value='tiger' id='tiger'
                        checked={tigerCheck} onChange={() => setTiger(!tigerCheck)}/>
                        <label htmlFor='tiger'>Tiger</label>

                        <input type='checkbox' name='animal' value='snake' id='snake'
                        checked={snakeCheck} onChange={() => setSnake(!snakeCheck)}/>
                        <label htmlFor='snake'>Snake</label>

                        <input type='checkbox' name='animal' value='donkey' id='donkey'
                        checked={donkeyCheck} onChange={() => setDonkey(!donkeyCheck)}/>
                        <label htmlFor='donkey'>Donkey</label>
                        {errorAnimalType && <span> Please select at least 2 animals</span>}
                    </p>
            
                    <p className={errorTigerType ? "error" : ""}>
                        <label className='label' htmlFor='tiger_type'>Type of tiger</label>
                        <input type='text' name='tiger_type' id='tiger_type' disabled={!tigerCheck}
                        value={tigerType} onChange={e => setTigerType(e.target.value)}/>
                        {errorTigerType && <span> Please enter which type of Tiger</span>}
                    </p>
                </fieldset>
                
                <fieldset>
                    <p>
                        <input type='submit' value='Create account'/>
                    </p>
                </fieldset>
            </form>
        </>
    );
}

export default Form