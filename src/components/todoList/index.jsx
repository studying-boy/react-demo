import React from "react";
import './index.css';

export default class todoList extends React.Component {
    state = {
        list: [{ id: 1, text: '第一条todo' }],
    }
    addTodo = (e) => {
        let { list } = this.state;
        let newItem = { id: list.length + 1, text: e.target.value }
        this.setState({
            list: [...list, newItem]
        })
        e.target.value = '';
    }
    removeItem = (index) => {
        let { list } = this.state;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入todo" onBlur={(event) => this.addTodo(event)} />
                <ul>
                    { this.state.list.map((item, index) => {
                        return <li className="li-item" key={item.id}>{item.id}: {item.text} <button className="delete-btn" onClick={() => this.removeItem(index)}>删除</button></li>
                    }) }
                </ul>
            </div>
        )
    }
}