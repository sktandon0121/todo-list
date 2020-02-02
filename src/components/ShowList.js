import React,{Component} from 'react';


class ShowList extends Component{
    constructor(props){
        super(props);
    }

    getList=()=>{
        let {list} = this.props;
        console.log('list ',list);
        if(list && list.length){
            return list.map((item,index)=>{
                return (
                    <div key={'_'+index}>
                        <p key={item+'_'+index}>{item.name} <button onClick={this.props.removeList}>Remove List</button></p>
                    </div>
                )
            })
        }


    };


    render(){
        return (
            <div>
                {this.getList()}
            </div>
        )
    }
}

export  default ShowList;