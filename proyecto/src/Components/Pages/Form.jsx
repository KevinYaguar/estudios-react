import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            mail:'',
            date: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }
    
    changeName(e){
        this.setState({name: e.target.value}) 
    }
    changeEmail(e){
        this.setState({mail: e.target.value})
    }
    changeDate(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className='ed-grid'>
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha Actual : {Math.ceil(this.state.date/1000)}</h4>
                <form>
                    <div className='ed-grid m-grid-2'>
                        <div className='form__item'>
                            <label>Nombre Completo</label>
                            <input type="text" onChange={this.changeName}/>
                        </div>
                        <div className='form__item'>
                            <label>Correo Electronico</label>
                            <input type="email" onChange={this.changeEmail}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo electronico es: ${this.state.mail}`}</span>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //acciones que quiero que sucedan luego de que se randerize el componente
        this.changeIntervalDate = setInterval(()=>{
            this.changeDate()
        } ,1000)
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps);
        //console.log(prevState);
    }
    componentWillUnmount(){
        //De esta manera deja de correr el intervalo cuando se desmonte el componente
        clearInterval(this.changeIntervalDate);
    }
}

export default Form;