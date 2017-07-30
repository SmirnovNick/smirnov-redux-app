import React from 'react';

export default function getList(array) {
   if (array != null){
   return array.map(function (item, index) {

     if (!Array.isArray(item.children)) {
       return <li key={index}>[{item.id}] {item.title} <span id={item.id.toString()} className="delete"  >&#10006;</span>

               </li>;
     } else {
       return <li key={index}>[{item.id}] {item.title} <span id={item.id.toString()} className="delete"  >&#10006;</span>
        <ul>{getList(item.children)}</ul></li>;
     }
   })}
   else {return <div className="Warning">Ошибка: Входной массив пуст или не имеет родителей.</div>}

 }
