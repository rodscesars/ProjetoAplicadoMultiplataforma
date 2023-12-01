import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext(); //cria um context

  const Provider = ({ children }) => {
    //vai receber uma propriedade children
    const [state, dispatch] = useReducer(reducer, defaultValue);
    //o state vai receber como valor inicial o defaultValue passado
    //o dispatch é o que vai chamar o reducer
    //o reducer utilizado vai ser a função reducer passada

    const boundActions = {}; //declara que é um objeto vazio
    for (let key in actions) {
      //para cada ação das actions recebidas como parâmetro
      boundActions[key] = actions[key](dispatch);
      //cada key vai receber o dispatch do Provider e chamar o seu respectivo dispatch
      //ex: boundActions.startRecordig = (dispatch)=>{()=>dispatch({type:"start_recording"});
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    ); //Retorna um componente context data com provider passando para seus componentes filhos
    //os valores estabelecidos em values (o state e as actions)
  };

  return { Context, Provider };
};
//exporta uma função, recebendo um reducer, suas ações e o valor do state inicial.
//no fim retorna um context e um provider.
