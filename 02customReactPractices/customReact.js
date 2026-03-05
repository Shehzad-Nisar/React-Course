

 function customRender(reactElement, container){

    const domElement = document.createElement(reactElement.typeof);
    domElement.innerHTML = reactElement.Children

    for(const key in reactElement.props){
        if (key === 'children') continue ;
        domElement.setAttribute(key, reactElement.props[key])
    }

    container.appendChild(domElement);
    

  
}

const reactElement = {
    typeof : 'a',
    props: {
        href : 'https://pureziaorganics.com',
        target : '_blank'
    },
    Children : 'click me to visit pureziaorganics'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer)




// Now we practice how btn elements will be rendered by REACT:

const btnElement = {
    typeof: 'button',
    props:{
        id : "btnID",
        class : "btnClass"
    },
    Children : "click me!"
}

customRender(btnElement,mainContainer)