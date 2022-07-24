import { useNavigate, Link } from 'react-router-dom';
import * as C from "./styles"
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state) ; 
        } else {
            alert("Preencha os campos corretamente!")
        }
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 - {state.currentStep}</p>
                <h1>Só mais um pouco!</h1>
                <p>Para completar seu cadastro precisamos de seu e-mail e GitHub!</p>

                <hr/>

                <label>
                    Qual o seu e-mail?
                    <input
                        type='email'
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub? (URL)
                    <input
                        type='url'
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>


                <Link className='link' to='/step2'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}