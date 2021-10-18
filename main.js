// Для того, чтобы узнать имя класса DOM-узла, вспомним, что обычно у объекта есть свойство constructor.
// Оно ссылается на конструктор класса, и в свойстве constructor.name содержится его имя:


console.log(document.body.constructor.name);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Text);



// console.dir(elem) и console.log(elem)
// Большинство браузеров поддерживают в инструментах разработчика две команды: console.log и console.dir. 
// Они выводят свои аргументы в консоль. Для JavaScript-объектов эти команды обычно выводят одно и то же.
// Но для DOM-элементов они работают по-разному:
// console.log(elem) выводит элемент в виде DOM-дерева.
// console.dir(elem) выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.
console.log(document.body);
console.dir(document.body);


// Свойство «nodeType»
// Свойство nodeType предоставляет ещё один, «старомодный» способ узнать «тип» DOM-узла.
// Его значением является цифра:
// elem.nodeType == 1 для узлов-элементов,
// elem.nodeType == 3 для текстовых узлов,
// elem.nodeType == 9 для объектов документа,
console.log(document.body.nodeType);
console.log(document.head.nodeType);



// свойство tagName есть только у узлов-элементов (поскольку они происходят от класса Element), 
// а nodeName может что-то сказать о других типах узлов.
let param = document.body.firstChild;
console.log(param.nodeName);
console.log(document.body.nodeName);
console.log(param.tagName);
console.log(document.body.tagName);




// innerHTML: содержимое элемента
// Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
// Мы также можем изменять его. Это один из самых мощных способов менять содержимое на странице.
let h1 = document.body.firstChild.nextSibling;
console.log(h1.innerHTML);
// h1.innerHTML = "Test";

// h1.innerHTML += "Test"; 
// Будьте внимательны: «innerHTML+=» осуществляет перезапись
// Другими словами, innerHTML+= делает следующее:
// Старое содержимое удаляется.



// outerHTML: HTML элемента целиком
// Свойство outerHTML содержит HTML элемента целиком. Это как innerHTML плюс сам элемент.
// let h1 = document.body.firstChild.nextSibling;
// h1.outerHTML = "<h2>New Title</h2>";
// console.dir(h1);

// использование outerHTML не изменяет DOM-элемент, 
// а удаляет его из внешнего контекста и вставляет вместо него новый HTML-код.


// nodeValue/data: содержимое текстового узла
// Свойство innerHTML есть только у узлов-элементов.

// У других типов узлов, в частности, у текстовых, есть свои аналоги: 
// свойства nodeValue и data. Эти свойства очень похожи при использовании,
// есть лишь небольшие различия в спецификации.



