import React,{Component} from 'react'
import ShowList from "./ShowList";


class AddList extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            listName:'',
            list:[]
        }

    }

    changeHandler=(e)=>{
        console.log('list name',e.target.value);
        this.setState({listName:e.target.value});

    };

    submitHandler=()=>{
        this.inputRef.current.value = "";

        let oldList = this.state.list;
        oldList.push({name:this.state.listName});
        this.setState({list:oldList});


        console.log('thiss state',this.state,this.inputRef);
    };

    deleteListHandler=()=>{
        console.log('deleted call ')
    }
    render(){

        return (
            <div>
                <input type={'text'} ref={this.inputRef}  name={'name'} onChange={this.changeHandler}/>
                <input type={'button'} value={'Add List'} onClick={this.submitHandler}/>

                {/*list component*/}
                <ShowList list={this.state.list} removeList={this.deleteListHandler}/>

            </div>
        )
    }
}

export  default  AddList;