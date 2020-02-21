import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createItem('Learn React'),
            this.createItem('Drink some tea'),
            this.createItem('Play guitar')
        ],
        term: '',
        filter: 'active'   // 3 possible states: active, done, all
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            key: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.key === id);
            const res = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

            return {
              todoData: res
            };
        });
    };

    addItem = (label) => {
        this.setState(({ todoData }) => {
            return { todoData: [...todoData, this.createItem(label)] };
        });
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.key === id);
        const newItem = { ...arr[index], [propName]: !arr[index][propName] };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchTextChanged = (term) => {
        this.setState({ term });
    };

    onFilterChanged = (filter) => {
        this.setState({ filter });
    };

    search(data, term) {
        if (term !== '')
            data = data.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1);

        return data;
    }

    filter(data, filter) {
        switch (filter) {
            case 'active':
                return data.filter((el) => el.done === false);
            case 'done':
                return data.filter((el) => el.done === true);
            default:
                return data;
        }
    }

    render() {
        const topPanelStyle = {
            marginBottom: 15
        };

        const { term, filter, todoData } = this.state;
        const done = todoData.filter(({ done }) => done).length;
        const todo = todoData.length - done;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        return (
            <div className='todo-app'>
                <AppHeader todo={todo} done={done}/>

                <div className="top-panel d-flex" style={topPanelStyle}>
                    <SearchPanel onSearchTextChanged={this.onSearchTextChanged}/>
                    <ItemStatusFilter filter={ filter } onFilterChanged={this.onFilterChanged}/>
                </div>

                <TodoList todos={visibleItems}
                          onDeletion={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}
