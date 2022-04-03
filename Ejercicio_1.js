let persona_1 = {nombre:'Pablo',edad:25, barba: true, pelo: true}

let persona_2 ={nombre:'Pablo',edad:25, barba: true, pelo: true}
    
comparar = (a,b) => {

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

  //  if (keysA.length !== keysB.length) {
 //     return false;
 //   }

    if (keysA.join(' ') !== keysB.join(' ')){
        alert("False");
        return false;
    }

    for(let i=0; i < keysA.length; i++) {
        if (a[keysA[i]] !== b[keysB[i]]) {
            alert("False");
            return false;
        }
    }
    alert("True");
    return true;

    
}

comparar(persona_1,persona_2);
