import { useNavigate, Link } from 'react-router-dom';
import * as C from "./styles"
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            history('/step3');  
        } else {
            alert("Preencha o campo corretamente!")
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3 - {state.currentStep}</p>
                <h1>Certo, {state.name}. Qual seu nível de desenvolvedor?</h1>
                <p>Selecione abaixo entre as opções:</p>

                <hr/>

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de dois anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo há dois anos ou mais"
                    icon="👨‍💻"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className='link' to='/'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}