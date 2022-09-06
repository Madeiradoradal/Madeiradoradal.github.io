import { T, TF } from 'react-translator-component';

 const Translate = (object) => {
    debugger;
    var result = "";
    if(Array.isArray(object)){
        const format = "{0} {1}";
        result = T(object[0]);
        for(var i = 1; i < object.length; i++) {
            result = TF("{0} {1}", result, T(object[i]))
        }
    }
    else {
        result = T(object);
    }
    return result;
}

export default Translate;