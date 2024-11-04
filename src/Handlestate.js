
export const initialState={name:'',surname:'',email:''};


export const reducer=(state,action)=>{
    switch(action.type){
        case 'name':
            return{...state, name: action.payload};
        case 'surname':
            return{...state, surname: action.payload};
            case 'email':
                return{...state, email: action.payload};
            case 'reset':
                return initialState;
                      default:
            break;    
                
           
       
    }
}