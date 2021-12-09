import './style.css'
import {LinkedList} from "@/struct/linkedList/LinkedList";

const app = document.querySelector<HTMLDivElement>('#app')!

const list = new LinkedList<string>();
list
    .addLast('one')
    .addLast('two')
    .addLast('three')
    .addFist('zero')
    .addFist('-1')
    .addLast('100')

list.print();

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
