import {User} from './User'
import { getPremiumUsers } from './data';
import './styles/styles.css';

const user = new User('John Doe');
const app = document.querySelector('.app');
const container = () => {
    return (`
        <div class='container'>
            <div class='info'>
                ${user.sayHello()}
            </div>
        </div>
    `)
}

console.log(user.sayHello());
console.log(user.sayHelloTo('Mary Lou'));
console.log(getPremiumUsers());

app.innerHTML = container();