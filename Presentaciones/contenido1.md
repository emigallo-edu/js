# Javascript

## Fundamentos de la Programación

### Objetivos del módulo

- Comprender qué es la programación y por qué es importante.
- Conocer los elementos básicos que componen un programa.
- Familiarizarse con la sintaxis mínima de JavaScript.
- Comenzar a pensar de forma lógica y secuencial.

### 1. ¿Qué es programar?

- Darle instrucciones claras y precisas a una computadora para que realice tareas.

### 2. Instrucciones secuenciales

- Concepto de secuencia: ejecutar instrucciones una tras otra
- Ejemplo cotidiano (hacer un café, preparar una mochila)
- Primer programa en JavaScript:

```javascript
console.log("Hola, mundo");
```

### 3. Variables y tipos de datos

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

#### Buenas prácticas para nombrar variables

- Usar nombres descriptivos.
- Escribir en *camelCase* (por ejemplo: `miNombre`, `numeroUsuario`).
- No usar acentos ni caracteres especiales.

### 4. Operaciones básicas

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

### 5. Entrada y salida

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

### 6. Pensamiento lógico

#### ¿Qué es el pensamiento computacional?

Es la capacidad de:

- **Abstraer**: separar lo importante de lo irrelevante.
- **Descomponer**: dividir un problema grande en partes pequeñas.
- **Reconocer patrones**: identificar estructuras que se repiten.
- **Diseñar algoritmos**: crear pasos ordenados para resolver un problema.

> 💡 Todo programa sigue una estructura lógica: primero se define qué se quiere hacer, luego se divide en pasos, y finalmente se transforma en código.

### 7. Actividades sugeridas

1. Crear un programa que:
   - Pida el nombre del usuario con `prompt`.
   - Muestre un saludo personalizado con `alert`.

2. Crear un programa que:
   - Pida dos números con `prompt`.
   - Calcule su suma.
   - Muestre el resultado en la consola.

3. Crear un programa que:
   - Pida la edad del usuario.
   - Muestre en consola un mensaje del tipo: `"Tenés X años"`.

### Recursos complementarios

- [MDN - Primeros pasos con JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps)
- [JavaScript.info - Fundamentos](https://es.javascript.info/)
- [W3Schools - JS Introduction](https://www.w3schools.com/js/js_intro.asp)





