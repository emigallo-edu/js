# Introducción a JavaScript


## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación o de secuencias de comandos que permite implementar funciones más complejas en páginas web. Es quien le da **comportamiento** a nuestros sitios web.

### ¿Qué es un programa JavaScript?

Es una **lista de instrucciones** o **declaraciones** que el navegador ejecuta. Un programa JS puede escribirse directamente en el HTML.

## Lenguajes compilados e interpretados

Ambos convierten el código en lenguaje de máquina (el que entienden los procesadores).

### Diferencias:

- **Compilado:** el código se transforma completamente a lenguaje de máquina antes de ejecutarse.
- **Interpretado:** el código se traduce mientras se ejecuta.

![](./compilado-interpretado.png)

### Ejemplos:

- **Compilados:** C, C++, C#, Java  
- **Interpretados:** JavaScript, Python, Ruby

### Ventajas de los lenguajes interpretados

- Ciclo de desarrollo más rápido (no requiere compilación).
- No necesita ejecutables por sistema operativo.
- Simplifica la tarea del programador.

### Ventajas de los lenguajes compilados

- Más rápido en tiempo de ejecución (runtime).
- No requiere intérprete en el equipo del usuario.
- Código optimizado para la ejecución (mayor carga para el desarrollador).

## Expresión vs Declaración

- **Expresión**: produce un valor.

```javascript
3 + 4
nombre + " " + apellido
```

- **Declaración**: realiza una acción.

```javascript
let x = 5;
alert("Hola");
```

## Punto y coma `;`

- Separa las declaraciones.
- Permite escribir varias en la misma línea.

```javascript
let x = 5; let y = 10; alert(x + y);
```

## Espacios en blanco

JavaScript ignora múltiples espacios.  
Se recomienda usarlos para mejorar la legibilidad.

```javascript
let x = 5;
let y = 6;
```

## Palabras clave (keywords)

| Palabra clave | Uso |
|---------------|-----|
| `break`       | Termina un bucle o switch |
| `continue`    | Salta a la siguiente iteración de un bucle |
| `debugger`    | Detiene la ejecución y activa el depurador |
| `do...while`  | Ejecuta el bloque al menos una vez |
| `for`         | Bucle con contador |
| `function`    | Define una función |
| `if...else`   | Condición lógica |
| `return`      | Devuelve un valor en una función |
| `switch`      | Estructura de selección múltiple |
| `try...catch` | Manejo de errores |
| `var`         | Declara una variable (obsoleto, preferir `let` o `const`) |

## Identificadores en JavaScript

- Son los **nombres** que usamos para variables, funciones, etc.
- Deben comenzar con **letra**, **guion bajo `_`** o **signo `$`**.
- No pueden comenzar con números.
- Son **case sensitive** (sensible a mayúsculas/minúsculas).

```javascript
let nombre;
let Nombre; // es diferente a "nombre"
```

## Notación camelCase

Diferentes formas de escribir nombres compuestos:

- `first-name` → ❌ (guión medio)
- `first_name` → ✔️ (guión bajo)
- `FirstName`  → ✔️ (camelCase mayúscula, más común en C#)
- `firstName`  → ✔️ (camelCase minúscula, preferida en JavaScript)

> En JS se recomienda usar **camelCase minúscula**.

## Variables y tipos de datos

#### ¿Qué es una variable?

Una **variable** es un espacio en memoria donde podemos guardar un valor para usarlo más adelante en el programa.

#### Declaración y asignación

En JavaScript usamos palabras clave como `let` y `const` para declarar variables:

```javascript
let nombre = "Ana";
const edad = 25;
```

- `let`: permite reasignar el valor más adelante.
- `const`: no permite cambiar el valor una vez asignado.

#### Tipos de datos primitivos

- **Números** (`number`): `10`, `3.14`, `-5`
- **Cadenas de texto** (`string`): `"Hola"`, `'Mundo'`
- **Booleanos** (`boolean`): `true`, `false`

#### Operaciones matemáticas

```javascript
let suma = 10 + 5;      // 15
let resta = 20 - 3;     // 17
let producto = 4 * 6;   // 24
let division = 8 / 2;   // 4
let resto = 9 % 2;      // 1
```

#### Concatenación de textos

Podemos unir textos (strings) usando el operador `+`:

```javascript
let nombre = "Juan";
let saludo = "Hola, " + nombre;
console.log(saludo); // "Hola, Juan"
```

#### Mostrar información en pantalla

- `console.log()`: muestra en la consola del navegador.
- `alert()`: muestra una ventana emergente (popup).

```javascript
console.log("Mensaje en consola");
alert("Mensaje para el usuario");
```

#### Pedir información al usuario

- `prompt()`: muestra un cuadro para que el usuario escriba algo.

```javascript
let nombre = prompt("¿Cómo te llamás?");
alert("Hola, " + nombre);
```

## Ejemplos de métodos de salida

### innerHTML

```javascript
document.getElementById("demo").innerHTML = "Hola mundo";
```

### document.write()

```javascript
document.write("Texto directo en la página");
```

### window.alert()

```javascript
alert("Esto es un mensaje");
```

### console.log()

```javascript
console.log("Mensaje en consola");
```

### window.print()

JavaScript no tiene acceso directo a dispositivos de impresión.  
Se puede usar:

```javascript
window.print();
```

> Imprime el contenido actual de la ventana del navegador.

## Ejemplos generales

```javascript
let nombreUsuario = "Ana";
let edadUsuario = 30;

console.log("Nombre: " + nombreUsuario);
console.log("Edad: " + edadUsuario);
```

## Características de un algoritmo

![](./algoritmo.png)

- Secuencia de pasos lógicos.
- Claros y finitos.
- Resuelven un problema o tarea específica.

## Formas de incluir JavaScript en HTML

### 1. En el `<head>`

```html
<head>
  <script>
    // Código JS
  </script>
</head>
```

### 2. En el `<body>`

```html
<body>
  <script>
    // Código JS
  </script>
</body>
```

### 3. En archivo externo

```html
<script src="app.js"></script>
```
### Ventajas de usar archivos JS externos

- Separa HTML del código JavaScript.
- Mejora la legibilidad y mantenimiento.
- Acelera la carga (se puede usar caché).
- Se pueden incluir múltiples archivos JS.

## Variables en JavaScript

Las variables son **contenedores para almacenar datos o valores**.

```javascript
var x = 5;
var y = 10;
var z = x + y;
```

> En este ejemplo: `x`, `y` y `z` son variables.

## `let` vs `var`

### Alcance (`scope`)

- `var`: su alcance es la **función** que la contiene. Está disponible desde el inicio de la función.
- `let`: su alcance es el **bloque `{}`** donde se define. No está disponible antes de declararse.

```javascript
function testVar() {
  if (true) {
    var x = 5;
  }
  console.log(x); // 5
}

function testLet() {
  if (true) {
    let y = 10;
  }
  console.log(y); // ReferenceError
}
```

## Tipos de datos

En JavaScript, las variables pueden contener distintos tipos de datos:

- Números
- Cadenas de texto
- Objetos
- Booleanos
- Arreglos (arrays)
- `null`, `undefined`

## Operando con tipos de datos

### Ejemplo 1:

```javascript
var x = 16 + "Volvo"; // "16Volvo"
```

### Ejemplo 2:

```javascript
var x = "16" + "Volvo"; // "16Volvo"
```

> Cuando se suma un número con una cadena, JavaScript convierte todo a **string**.

## Orden de evaluación

```javascript
var x = 16 + 4 + "Volvo"; // "20Volvo"
var x = "Volvo" + 16 + 4; // "Volvo164"
```

> JS evalúa las expresiones **de izquierda a derecha**.

## Tipado dinámico

JavaScript tiene **tipado dinámico**, es decir, una variable puede cambiar de tipo:

```javascript
var x;         // x es undefined
x = 5;         // ahora es number
x = "John";    // ahora es string
```

## Cadenas de texto (strings)

Las cadenas son texto rodeado de comillas:

```javascript
var text1 = "Hola! Bienvenidos al curso de JS";
var text2 = "Hola! Bienvenidos al curso de 'JS'";
var text3 = 'Hola! Bienvenidos al curso de "JS"';
```

> Se puede usar comillas simples o dobles.

## Números

Solo hay un tipo de dato numérico en JS, con o sin decimales:

```javascript
var x1 = 34.00;  // con decimal
var x2 = 34;     // sin decimal
```

## Booleanos

Solo dos valores posibles: `true` o `false`.

```javascript
var x = 5;
var y = 5;
var z = 6;

(x == y); // true
(x == z); // false
```

## Arreglos (arrays)

Los arreglos se definen entre corchetes `[]`:

```javascript
var cars = ["Fiat", "Ford", "BMW"];
```

> Los índices comienzan desde `0`.

```javascript
cars[0]; // "Fiat"
cars[1]; // "Ford"
cars[2]; // "BMW"
```

## Objetos en JavaScript

Los objetos se escriben entre llaves `{}`. Cada propiedad es un par `clave: valor`.

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

## Null

- `null` representa **nada** intencionalmente.
- El tipo de `null` es considerado un **object**, lo cual es una peculiaridad de JS.

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

person = null; // El objeto ahora vale null
```

## Teoría del Lenguaje en JavaScript

### ¿Qué es la teoría del lenguaje de programación?

La teoría del lenguaje estudia cómo están construidos los lenguajes de programación y cómo procesan las instrucciones que les damos.

Todo lenguaje (como JavaScript) pasa por una serie de etapas de análisis para transformar el código que escribimos en acciones que la computadora pueda ejecutar.

### Etapas del análisis del código

Las etapas fundamentales por las que pasa un programa JavaScript son:

1. Análisis léxico
2. Análisis sintáctico
3. Análisis semántico

### 1. Análisis léxico

El análisis léxico consiste en leer el código fuente y dividirlo en unidades mínimas llamadas *tokens*.

Ejemplos de tokens:

- Palabras clave: let, function, if
- Identificadores: nombre, contador
- Operadores: =, +, *
- Números: 10, 3.14
- Símbolos de puntuación: ;, {, }

Ejemplo:

let edad = 25;

Tokens generados:

- let → palabra clave
- edad → identificador
- = → operador de asignación
- 25 → número
- ; → punto y coma

### 2. Análisis sintáctico

El análisis sintáctico verifica que la estructura gramatical del código sea válida.

Se forma un árbol sintáctico (AST – Abstract Syntax Tree) que representa la estructura jerárquica del código.

Errores sintácticos comunes:

- Paréntesis mal cerrados
- Llaves faltantes
- Punto y coma faltante
- Orden incorrecto de palabras

Ejemplo válido:

```js
if (edad > 18) {
  console.log("Mayor de edad");
}
```

### 3. Análisis semántico

El análisis semántico verifica que las instrucciones tengan sentido lógico.

Verifica cosas como:

- Variables usadas sin declarar
- Tipos de datos incompatibles
- Operaciones sin sentido

Ejemplo de error semántico:

```js
let edad = "veinte";
if (edad > 18) {
  console.log("Mayor");
}
```

### Resumen

Etapa | ¿Qué hace? | ¿Errores que detecta?
------|------------|-----------------------
Análisis léxico | Divide el código en tokens | Caracteres no válidos
Análisis sintáctico | Verifica estructura gramatical | Errores de sintaxis
Análisis semántico | Verifica el significado lógico del código | Errores de tipo o de contexto

### Aplicación práctica

Comprender estas etapas ayuda a:

- Interpretar mejor los mensajes de error de JavaScript
- Escribir código más limpio y predecible
- Comprender cómo funcionan los motores de JavaScript (como V8 en Chrome)

## Tipado en JavaScript

El tipado se refiere a la forma en que un lenguaje de programación maneja los tipos de datos (como números, strings, booleanos, etc.).

### Características del tipado en JavaScript

#### 1. Tipado dinámico

JavaScript es un lenguaje de **tipado dinámico**, lo que significa que:

- No es necesario declarar el tipo de una variable al crearla.
- El tipo de una variable puede cambiar en tiempo de ejecución.

##### Ejemplo:

```js
let x = 5;       // x es un número
x = "hola";      // ahora x es un string
```

#### 2. Tipado débil

JavaScript tiene un **tipado débil**, lo que significa que:

- El lenguaje convierte automáticamente entre tipos en ciertas operaciones.
- Esto se conoce como *type coercion* (coerción de tipos), y puede generar resultados inesperados.

##### Ejemplo:

```js
let resultado = "5" + 1;   // resultado = "51" (concatena)
let suma = "5" - 1;        // suma = 4 (convierte "5" a número)
```

### Tipos de datos primitivos en JavaScript

JavaScript tiene los siguientes tipos primitivos:

- `string` → texto  
- `number` → números (enteros y decimales)  
- `boolean` → verdadero o falso  
- `undefined` → variable declarada pero sin valor  
- `null` → ausencia intencional de valor  
- `symbol` → identificador único (ES6)  
- `bigint` → números enteros muy grandes (ES2020)

### Tipos de datos complejos

- `object` → estructuras con propiedades y métodos
- `array` → lista indexada de valores
- `function` → bloques de código que se pueden invocar

### Verificar el tipo de una variable

Usamos el operador `typeof`:

```js
typeof "hola";     // "string"
typeof 42;         // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (peculiaridad histórica)
typeof {};         // "object"
typeof [];         // "object"
typeof function() {}; // "function"
```

### Resumen

- JavaScript es un lenguaje **débilmente tipado** y **dinámico**.
- Los tipos pueden cambiar y se pueden mezclar en operaciones.
- Esto da flexibilidad, pero también puede llevar a errores difíciles de detectar.

## Pasaje por Valor y por Referencia

En JavaScript, las variables pueden contener datos **primitivos** o **referencias a objetos**. Esto afecta la forma en que los valores se copian y se pasan entre funciones.

### 📌 Tipos de datos en JavaScript

#### 1. Tipos primitivos (se pasan por **valor**):
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

#### 2. Tipos por referencia:
- `object`
- `array`
- `function`

### 🔁 Pasaje por valor

Cuando se asigna o se pasa un **tipo primitivo**, se copia el valor.

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

El valor de `a` no cambia porque `b` recibió una **copia** del valor.

``` lua 
+--------+       +--------+
|   a    | --->  |   10   |
+--------+       +--------+

+--------+       +--------+
|   b    | --->  |   20   |
+--------+       +--------+
```


### 📦 Pasaje por referencia

Cuando se asigna o se pasa un **objeto**, se copia la **referencia en memoria**, no el objeto.

```js
let obj1 = { nombre: "Ana" };
let obj2 = obj1;

obj2.nombre = "Luis";

console.log(obj1.nombre); // "Luis"
console.log(obj2.nombre); // "Luis"
```

Ambas variables apuntan al **mismo objeto en memoria**.

``` lua 
+--------+       +-------------------+
| obj1   | ---+--> { nombre: "Luis" }|
+--------+    |  +-------------------+
              |
+--------+    |
| obj2   | ---+
+--------+
```

### 🧪 Pasaje en funciones

#### Por valor:

```js
function cambiarNumero(x) {
  x = 100;
}

let numero = 5;
cambiarNumero(numero);
console.log(numero); // 5
```

#### Por referencia:

```js
function cambiarNombre(obj) {
  obj.nombre = "Nuevo";
}

let persona = { nombre: "Original" };
cambiarNombre(persona);
console.log(persona.nombre); // "Nuevo"
```

### 🧠 Resumen

| Tipo de dato       | Se pasa por     | Se copia el...         |
|--------------------|-----------------|-------------------------|
| Primitivo          | Valor           | Valor directamente      |
| Objeto/Array       | Referencia      | Apuntador en memoria    |

### ✅ Consejos prácticos

- Para copiar un objeto sin compartir referencia, usá `Object.assign` o el operador spread (`{ ...obj }`).
- Para copiar un array sin referencia, usá `slice()`, `concat()`, o spread (`[ ...arr ]`).

## Manejo de Memoria en JavaScript: Pasaje por Valor y por Referencia

JavaScript utiliza dos áreas principales de memoria: el stack (pila) y el heap (montículo). Cómo se almacena un valor depende del tipo de dato.

### 📌 Áreas de memoria

#### 1. Stack (pila)
- Espacio de memoria pequeño y rápido.
- Almacena tipos **primitivos** (`number`, `string`, `boolean`, etc.).
- Las variables se almacenan directamente con su valor.

#### 2. Heap (montículo)
- Espacio más grande, menos estructurado.
- Almacena **objetos, arrays y funciones**.
- Las variables guardan **referencias** al contenido que está en el heap.

### ✅ Pasaje por Valor (tipos primitivos)

Cuando se asigna o pasa una variable primitiva, se copia el valor.

```js
let a = 5;
let b = a;
b = 10;
```

#### Memoria:

```lua
Stack:

+------+     +------+
|  a   | --> |  5   |
+------+     +------+

+------+     +------+
|  b   | --> | 10   |
+------+     +------+
```

### ✅ Pasaje por Referencia (objetos, arrays, funciones)

Cuando se asigna o pasa un objeto, se copia la **referencia**, no el contenido.

```js
let obj1 = { saludo: "Hola" };
let obj2 = obj1;
obj2.saludo = "Chau";
```

#### Memoria:
```lua
Stack:                     Heap:

+-------+                 +-------------------+
| obj1  | ---+           | { saludo: "Chau" } |
+-------+    |           +-------------------+
             |
+-------+    |
| obj2  | ---+
+-------+
```

### 🧹 Garbage Collection

JavaScript gestiona automáticamente la memoria con un **garbage collector**. Este libera memoria en el heap cuando detecta que **ninguna variable hace referencia** a ese objeto.

### 🧠 Resumen

| Tipo de dato | Dónde vive  | Cómo se pasa      | Independencia |
|--------------|-------------|-------------------|---------------|
| Primitivo    | Stack       | Por valor         | ✅            |
| Objeto/Array | Heap        | Por referencia    | ❌            |