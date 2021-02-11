import React,{Component} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from "./components/header"
import TxtInput from './components/input'
import SubmitBtn from './components/button'
import TodoList from './components/todo/todoList';
import TabBar from './components/tabbar'

let todoIndex = 0

class Main extends Component{

    constructor(){
        super()
        this.state = {
            todos : [],
            inputValue : '',
            type : 'All'
        }
        this.submitTodo = this.submitTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
    }


    setType(type){
        this.setState({type})
    }

    onInputChange(inputValue){
        console.log('Input Value: ', inputValue);
        this.setState({inputValue})
    }

    submitTodo(){
        console.log('in submit');
        if(this.state.inputValue.match(/^\s*$/)){
            return
        }
        const todo = {
            title:this.state.inputValue,
            todoIndex,
            isComplete:false
        }
        todoIndex++
        const todos = [...this.state.todos,todo]
        this.setState({todos,inputValue:''}, () => {
            console.log('State : ',this.state);
        })
    }

    toggleComplete(todoIndex){
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.isComplete = !todo.isComplete
            }
        })
        this.setState({todos})
    }

    deleteTodo(todoIndex){
        let {todos} = this.state
        todos = todos.filter((todo) => todo.todoIndex!== todoIndex)
        this.setState({todos})
    }

    render(){
        const {inputValue , todos, type} = this.state
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                           style={styles.content}>
                 <Header/>
                 <TxtInput
                     inputValue = {inputValue}
                     inputChange = {(text) => this.onInputChange(text)}
                 />
                 <TodoList 
                    todos={todos}
                    type={type}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                    />
                 <SubmitBtn submitTodo={this.submitTodo}/>
               </ScrollView>
               <TabBar type={type} setType={this.setType} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    } 
})
export default Main