// content.js — Contenido de la app SPD Estudio
// RESUMEN: contenido teórico estructurado por unidad, con imágenes embebidas.
// QUIZ: banco de preguntas basado en el análisis de parciales viejos.

const RESUMEN = [
  {
    id: 'u1-2',
    titulo: 'Unidades 1 y 2 — Electrónica e Historia (resumen rápido)',
    html: `
      <p>Antes de la arquitectura de computadoras, dos temas de contexto:</p>
      <h3>Electrónica básica</h3>
      <ul>
        <li>Los materiales se clasifican en <b>conductores</b>, <b>aislantes</b> y
        <b>semiconductores</b> (como el silicio), según cuántos electrones libres tienen.</li>
        <li>Evolución de componentes: <b>válvulas de vacío</b> → <b>transistores</b> →
        <b>circuitos integrados</b> (miles/millones de transistores en una pastilla).</li>
      </ul>
      <h3>Historia — línea de tiempo esencial</h3>
      <ul>
        <li><b>1946 — ENIAC:</b> primera computadora de propósito general, se programaba
        cableando físicamente los circuitos.</li>
        <li><b>Antes, 1939-1944 — Harvard Mark I:</b> electromecánica, a relés.</li>
        <li><b>1947 — Transistor:</b> reemplaza a las válvulas de vacío.</li>
        <li><b>1959 — Circuito integrado</b> (Jack Kilby).</li>
        <li><b>1968 — se funda Intel.</b></li>
        <li><b>1971 — Intel 4004:</b> primer microprocesador de la historia en un solo chip.</li>
        <li><b>1975 — Altair 8800</b>, <b>1976 — Apple I.</b></li>
        <li><b>1981 — IBM PC</b>, basada en el <b>Intel 8088</b> (hermano económico del 8086).</li>
        <li><b>Ley de Moore (1965):</b> la cantidad de transistores por chip se duplica
        aproximadamente cada 18-24 meses.</li>
      </ul>
      <div class="img-row">
        <figure><img src="./assets/img/hist_harvard.png"><figcaption>Harvard Mark I (1939-1944)</figcaption></figure>
        <figure><img src="./assets/img/hist_eniac.png"><figcaption>ENIAC (1946)</figcaption></figure>
      </div>
      <div class="img-row">
        <figure><img src="./assets/img/hist_intel4004.png"><figcaption>Die del Intel 4004 (1971)</figcaption></figure>
        <figure><img src="./assets/img/hist_ibmpc.png"><figcaption>IBM PC (1981), con Intel 8088</figcaption></figure>
      </div>
    `
  },
  {
    id: 'u3a',
    titulo: 'Unidad 3-A — Sistemas numéricos',
    html: `
      <h3>La idea de "base"</h3>
      <p>Cada dígito vale según el símbolo y su posición (peso = base elevada a la posición).
      La computadora trabaja en <b>binario</b> (base 2); el <b>hexadecimal</b> (base 16) es
      una forma cómoda de escribir binario para los humanos (1 dígito hex = 4 bits).</p>
      <table>
        <tr><th>Binario → Decimal</th><td><code>1101b = 1·8+1·4+0·2+1·1 = 13d</code></td></tr>
        <tr><th>Decimal → Binario</th><td>Divisiones sucesivas por 2, leyendo los restos de abajo hacia arriba</td></tr>
        <tr><th>Binario ↔ Hex</th><td>Agrupar de a 4 bits: <code>1000 1010 = 8A h</code></td></tr>
      </table>
      <h3>Números con signo</h3>
      <p>El bit más significativo indica el signo. Formas de representarlo:</p>
      <ul>
        <li><b>Signo y magnitud:</b> problema — existen +0 y -0.</li>
        <li><b>Complemento a 1:</b> invertir todos los bits. Mismo problema del doble cero.</li>
        <li><b>Complemento a 2 (la que usan las computadoras reales):</b> invertir todos los
        bits y sumar 1. Rango con n bits: <b>(-2ⁿ⁻¹ ; +2ⁿ⁻¹-1)</b>.</li>
      </ul>
      <h3>Códigos de caracteres y paridad</h3>
      <p><b>ASCII</b> (7 bits, 128 códigos) y <b>ASCII extendido</b> (8 bits, 256 códigos).
      El <b>bit de paridad</b> es un bit extra para que la cantidad total de "unos" sea
      siempre par o siempre impar, y así detectar errores de transmisión.</p>
      <div class="img-row">
        <figure><img src="./assets/img/ascii7.png"><figcaption>Tabla ASCII de 7 bits</figcaption></figure>
        <figure><img src="./assets/img/asciiext.png"><figcaption>Tabla ASCII extendida (8 bits)</figcaption></figure>
      </div>
    `
  },
  {
    id: 'u3b',
    titulo: 'Unidad 3-B — Álgebra de Boole, compuertas y transcodificadores',
    html: `
      <h3>Álgebra de Boole</h3>
      <p>Solo dos valores: 0 (falso) y 1 (verdadero). Operaciones: <b>OR</b> (suma lógica),
      <b>AND</b> (producto lógico), <b>NOT</b> (negación), <b>XOR</b> (da 1 si las entradas
      son distintas). Las <b>leyes de De Morgan</b> permiten transformar una negación de una
      suma/producto en otra operación equivalente.</p>
      <h3>Buffer de 3 estados (tri-state)</h3>
      <p>Además de 0 y 1, la <b>salida</b> puede quedar en <b>alta impedancia (HZ)</b>,
      controlada por una señal de control — muy usado para compartir un bus entre varios
      dispositivos.</p>
      <div class="img-row">
        <figure><img src="./assets/img/buffer3estados.png"><figcaption>Buffer de 3 estados</figcaption></figure>
      </div>
      <h3>Multiplexores y demultiplexores</h3>
      <p><b>Multiplexor (MUX):</b> 2ⁿ entradas y 1 sola salida, elegida por un código de
      selección. <b>Demultiplexor (DEMUX):</b> al revés, 1 entrada y 2ⁿ salidas posibles.</p>
      <div class="img-row">
        <figure><img src="./assets/img/muxdemux.png"><figcaption>Multiplexor / Demultiplexor</figcaption></figure>
      </div>
      <h3>Codificadores y transcodificadores</h3>
      <p><b>Codificador:</b> convierte una señal en un código binario. <b>Decodificador:</b>
      hace lo inverso. <b>Conversor de código:</b> convierte de un código a otro (ej: BCD a
      7 segmentos).</p>
    `
  },
  {
    id: 'u4',
    titulo: 'Unidad 4 — El Computador: arquitectura, organización y estructura',
    html: `
      <h3>Tres conceptos que se confunden</h3>
      <ul>
        <li><b>Arquitectura:</b> lo que ve el programador (registros, set de instrucciones).</li>
        <li><b>Organización:</b> cómo están conectadas por dentro las unidades funcionales.</li>
        <li><b>Estructura:</b> los bloques generales: <b>CPU, Memoria Principal, E/S y
        Buses.</b></li>
      </ul>
      <div class="img-row">
        <figure><img src="./assets/img/estructura_pc.png"><figcaption>Estructura de un computador</figcaption></figure>
      </div>
      <h3>Registros del 8086/8088</h3>
      <p>4 generales (AX, BX, CX, DX), 4 de segmento (DS, CS, ES, SS), 3 punteros (SP, BP,
      <b>IP</b>), 2 índices (DI, SI) y el registro de <b>Flags</b>. Palabra de <b>16 bits</b>.
      La diferencia 8086 vs 8088 es el ancho del bus de datos externo (16 bits vs 8 bits).</p>
      <h3>Clasificación de Flynn</h3>
      <table>
        <tr><th>SISD</th><td>Un flujo de instrucciones, un flujo de datos — procesador clásico</td></tr>
        <tr><th>SIMD</th><td>Una instrucción, muchos datos — placas de video (GPU)</td></tr>
        <tr><th>MISD</th><td>Muchas instrucciones, un dato — poco común</td></tr>
        <tr><th>MIMD</th><td>Muchas instrucciones, muchos datos — multiprocesamiento actual</td></tr>
      </table>
      <h3>Von Neumann vs. Harvard</h3>
      <p><b>Von Neumann:</b> instrucciones y datos comparten un único espacio de memoria (es
      el modelo que ve nuestro procesador hacia afuera). <b>Harvard:</b> memorias físicamente
      separadas para instrucciones y datos, acceso simultáneo a ambas.</p>
      <div class="img-row">
        <figure><img src="./assets/img/vonneumann.png"><figcaption>Arquitectura Von Neumann</figcaption></figure>
        <figure><img src="./assets/img/harvard.png"><figcaption>Arquitectura Harvard</figcaption></figure>
      </div>
    `
  },
  {
    id: 'u5',
    titulo: 'Unidad 5 — ALU: aritmética, overflow y punto flotante',
    html: `
      <h3>Overflow (desborde)</h3>
      <p>La interpretación depende de si el número es con o sin signo:</p>
      <ul>
        <li><b>Sin signo:</b> hay overflow si hay acarreo (carry) fuera del último bit.
        Bandera: <b>CF</b>.</li>
        <li><b>Con signo:</b> positivo+positivo=negativo → <b>overflow</b>.
        negativo+negativo=positivo → <b>overflow</b>. Signos distintos → <b>nunca</b> hay
        overflow. Bandera: <b>OF</b>.</li>
      </ul>
      <p>La resta se implementa sumando el <b>complemento a 2</b> del sustraendo — así un
      mismo circuito sirve para sumar y restar.</p>
      <h3>Punto flotante — IEEE 754 (precisión simple, 32 bits)</h3>
      <div class="img-row">
        <figure><img src="./assets/img/ieee754mask.png"><figcaption>Máscara IEEE 754 precisión simple</figcaption></figure>
      </div>
      <p>1 bit de signo + 8 bits de exponente (sesgo 127) + 23 bits de mantisa. Casos
      especiales: <b>cero</b> (+0/-0), <b>infinito</b> (exponente todo en 1, mantisa en 0) y
      <b>NaN</b> (exponente todo en 1, mantisa distinta de 0).</p>
      <div class="img-row">
        <figure><img src="./assets/img/ieee754recta.png"><figcaption>Rangos de representación en IEEE 754</figcaption></figure>
      </div>
    `
  },
  {
    id: 'u6',
    titulo: 'Unidad 6 — Memorias',
    html: `
      <h3>Jerarquía y Little/Big Endian</h3>
      <p>De más rápida/cara a más lenta/barata: <b>registros → caché → RAM → disco.</b>
      Nuestro procesador (Intel) es <b>Little Endian</b>: guarda primero el byte menos
      significativo.</p>
      <h3>Tipos de memoria</h3>
      <p><b>Volátiles:</b> SRAM (rápida y cara, se usa en caché), DRAM (más barata, necesita
      refresco), SDRAM/DDR (sincronizadas con el reloj). <b>No volátiles:</b> ROM → PROM (se
      graba una sola vez) → EPROM (se borra con luz UV) → EEPROM (se borra eléctricamente) →
      FLASH (se borra en bloques, la usan pendrives y SSD).</p>
      <h3>Memoria caché</h3>
      <p>Funciona por <b>localidad de referencia</b>: si accedemos a una dirección, es
      probable que enseguida accedamos a una cercana.</p>
      <div class="img-row">
        <figure><img src="./assets/img/cache_directo.png"><figcaption>Organización: Mapeo Directo</figcaption></figure>
        <figure><img src="./assets/img/cache_asoc.png"><figcaption>Organización: Asociativa</figcaption></figure>
      </div>
      <div class="img-row">
        <figure><img src="./assets/img/cache_niveles.png"><figcaption>Niveles de caché (L1/L2/L3)</figcaption></figure>
      </div>
      <h3>Memoria virtual</h3>
      <p>Divide la memoria en <b>páginas</b>. La <b>TLB</b> guarda las últimas traducciones
      de página virtual → página física. Si la página buscada no está en la RAM, ocurre un
      <b>Page Fault</b> (si está, es un <b>Page Hit</b>). El intercambio de páginas entre RAM
      y disco se llama <b>Swapping</b>.</p>
    `
  },
  {
    id: 'u7',
    titulo: 'Unidad 7 — Unidad de Control, pipelines, RISC y CISC',
    html: `
      <h3>Ciclo de instrucción</h3>
      <p><b>1. Búsqueda (Fetch) → 2. Decodificación (Decode) → 3. Búsqueda de operandos
      (Operand Fetch) → 4. Ejecución (Execution).</b></p>
      <h3>Modos del Contador de Programa (PC / IP)</h3>
      <ul>
        <li><b>Habitual:</b> instrucción normal (ej: <code>MOV AL,7Fh</code>)</li>
        <li><b>Salto:</b> salto directo (ej: <code>JMP 120h</code>)</li>
        <li><b>Indirección:</b> acceso a un dato en otra dirección (ej: <code>MOV AX,[0120]</code>)</li>
      </ul>
      <h3>Pipeline y hazards</h3>
      <p>Un <b>pipeline</b> permite que varias instrucciones avancen en simultáneo por
      distintas etapas. Problemas (<b>hazards</b>):</p>
      <ul>
        <li><b>RAW:</b> una instrucción necesita leer un dato que otra todavía no escribió.</li>
        <li><b>WAR:</b> una instrucción lee algo que otra va a escribir después.</li>
        <li><b>WAW:</b> dos instrucciones escriben el mismo destino.</li>
      </ul>
      <h3>RISC vs. CISC</h3>
      <div class="img-row">
        <figure><img src="./assets/img/risc_cisc.png"><figcaption>Comparación RISC vs CISC</figcaption></figure>
      </div>
      <p>La familia Intel x86 (nuestro 8086/88) es <b>CISC</b>.</p>
    `
  },
  {
    id: 'u8',
    titulo: 'Unidad 8 — Entrada/Salida, interrupciones y DMA',
    html: `
      <h3>Comunicación con periféricos</h3>
      <p>Cada dispositivo tiene 3 tipos de puerto: <b>Control</b> (se escribe), <b>Estado</b>
      (se lee) y <b>Datos</b> (se lee y escribe). Nuestro procesador usa <b>Mapeo Aislado</b>:
      1M de direcciones de memoria (20 bits) y 64K de direcciones de E/S (16 bits), con las
      instrucciones <b>IN</b> y <b>OUT</b>.</p>
      <h3>Polling vs. Interrupciones</h3>
      <p><b>Polling:</b> la CPU pregunta de a uno, dentro del programa principal, sin poder
      anidar. <b>Interrupciones:</b> el dispositivo avisa, mucho más eficiente.</p>
      <h3>Ciclo de interrupción</h3>
      <p><b>1. Solicitud → 2. Reconocimiento → 3. Atención → 4. Retorno.</b> En la Atención:
      se pone <b>IF=0</b>, se guardan CS/IP/Flags en la pila, y se calcula la dirección base
      en la IVT como <b>Tipo × 4</b>.</p>
      <div class="img-row">
        <figure><img src="./assets/img/ivt_base.png"><figcaption>Cálculo de la dirección base en la IVT</figcaption></figure>
      </div>
      <p>La <b>IVT</b> tiene 256 vectores de 4 bytes cada uno: <b>00h-04h Dedicadas</b>,
      <b>05h-1Eh Reservadas</b>, <b>1Fh-FFh Disponibles</b>.</p>
      <div class="img-row">
        <figure><img src="./assets/img/ivt_clasif.png"><figcaption>Clasificación de tipos en la IVT</figcaption></figure>
      </div>
      <p>La <b>NMI</b> no depende de IF (siempre se atiende). Para anidar interrupciones
      dentro de una ISR hay que ejecutar <b>STI</b>. El <b>PIC 8259A</b> maneja 8 IRs por
      chip, expandible en cascada.</p>
      <h3>DMA</h3>
      <p>El periférico transfiere datos directo a memoria, sin pasar por la CPU. Señales:
      <b>HOLD/HOLDA</b> (CPU cede el bus) y <b>DREQ/DACK</b> (petición/aceptación del
      periférico). Chip controlador: <b>Intel 8237A</b>, con 4 canales.</p>
      <div class="img-row">
        <figure><img src="./assets/img/dma_senales.png"><figcaption>Señales de una transferencia DMA</figcaption></figure>
      </div>
    `
  }
];

// QUIZ: cada pregunta tiene tema (para filtrar), parcial (1 o 2), opciones y el índice correcto.
const QUIZ = [
  // ---------- PARCIAL 1 ----------
  { parcial: 1, tema: 'Numérico', p: '¿Cuál es el rango correcto de complemento a 2 con "n" bits?', o: ['(0 ; 2ⁿ-1)', '(-2ⁿ⁻¹ ; +2ⁿ⁻¹-1)', '(-2ⁿ ; +2ⁿ)', '(-2ⁿ⁻¹ ; +2ⁿ⁻¹)'], c: 1, e: 'Con n bits en complemento a 2 se puede representar un negativo más que positivos: de -2ⁿ⁻¹ a +2ⁿ⁻¹-1.' },
  { parcial: 1, tema: 'Numérico', p: '¿Por qué Signo y Magnitud y Complemento a 1 no sirven para que la ALU haga cuentas directamente?', o: ['Porque ocupan más bits', 'Porque representan al cero con dos combinaciones distintas (+0 y -0)', 'Porque no pueden representar números negativos', 'Porque no existen en el 8086'], c: 1, e: 'El doble cero rompe la aritmética binaria simple; por eso se usa Complemento a 2.' },
  { parcial: 1, tema: 'Numérico', p: 'Los pesos de las posiciones fraccionarias en binario son...', o: ['2, 4, 8, 16...', '1/2, 1/4, 1/8, 1/16...', '-1/2, -1/4, -1/8...', '10, 100, 1000...'], c: 1, e: 'Cada posición a la derecha de la coma vale la mitad de la anterior.' },
  { parcial: 1, tema: 'Numérico', p: 'Para multiplicar una cifra hexadecimal por su base (16), hay que...', o: ['Sumarle 16', 'Inyectar un "0" por la derecha (shift a la izquierda)', 'Invertir todos los bits', 'Dividir por 2'], c: 1, e: 'Multiplicar por la base equivale a correr un dígito hacia la izquierda, igual que en decimal.' },
  { parcial: 1, tema: 'Overflow', p: 'Sumando dos números CON signo, positivo + positivo dio como resultado un número negativo. ¿Qué ocurrió?', o: ['Nada raro, es un resultado válido', 'Hubo overflow (desborde)', 'Hubo acarreo sin importancia', 'El resultado está en complemento a 1'], c: 1, e: 'positivo + positivo siempre debería dar positivo; si da negativo, es señal inequívoca de overflow.' },
  { parcial: 1, tema: 'Overflow', p: '¿Qué bandera se usa para detectar overflow en una operación CON signo?', o: ['CF (Carry Flag)', 'ZF (Zero Flag)', 'OF (Overflow Flag)', 'SF (Sign Flag)'], c: 2, e: 'CF se usa para overflow SIN signo; OF es la correcta para operaciones CON signo.' },
  { parcial: 1, tema: 'Overflow', p: 'Sumando dos números con signos DISTINTOS (uno positivo y uno negativo), ¿puede haber overflow?', o: ['Sí, siempre', 'Nunca', 'Solo si son iguales en magnitud', 'Solo si el resultado es cero'], c: 1, e: 'Sumar signos distintos jamás puede desbordar el rango representable.' },
  { parcial: 1, tema: 'Boole', p: 'En un buffer de 3 estados, la señal de control actúa sobre...', o: ['La entrada, dejándola en alta impedancia', 'La salida, dejándola en alta impedancia', 'El reloj del sistema', 'La fuente de alimentación'], c: 1, e: 'La señal de control determina si la salida transmite el dato o queda en alta impedancia (desconectada).' },
  { parcial: 1, tema: 'Boole', p: 'Un dispositivo con 2ⁿ entradas y 1 sola salida, seleccionada por un código de "n" bits, se llama...', o: ['Demultiplexor', 'Codificador', 'Multiplexor', 'Decodificador'], c: 2, e: 'Multiplexor: "muchas entradas, una salida". Ojo con confundirlo con el demultiplexor (al revés).' },
  { parcial: 1, tema: 'Boole', p: 'Un dispositivo con 1 sola entrada y 2ⁿ salidas posibles se llama...', o: ['Multiplexor', 'Demultiplexor', 'Buffer', 'Flip-Flop'], c: 1, e: 'Demultiplexor: "una entrada, muchas salidas posibles".' },
  { parcial: 1, tema: 'Boole', p: 'Poner un negador (NOT) en las dos entradas de una compuerta OR equivale a una compuerta...', o: ['AND', 'NAND', 'XOR', 'NOR'], c: 1, e: 'Por De Morgan: NOT(A) OR NOT(B) = NOT(A AND B), que es justamente una NAND.' },
  { parcial: 1, tema: 'Boole', p: 'Las señales D y CLK de un flip-flop se usan para operarlo de forma...', o: ['Asincrónica', 'Sincrónica', 'Aleatoria', 'Analógica'], c: 1, e: 'D y CLK dependen del reloj (sincrónicas); SET y CLR son las asincrónicas.' },
  { parcial: 1, tema: 'Arquitectura', p: 'La estructura de un ORDENADOR está formada, sin usar abreviaturas, por...', o: ['Procesador, disco, mouse y teclado', 'Unidad Central de Proceso, Memoria Principal, Unidades de Entrada/Salida y Buses', 'ALU, Unidad de Control y Registros', 'RAM, ROM y caché'], c: 1, e: 'Es la respuesta textual que piden los parciales: CPU + Memoria Principal + E/S + Buses.' },
  { parcial: 1, tema: 'Arquitectura', p: 'La estructura de la CPU está formada por...', o: ['Registros, ALU, Unidad de Control e Interconexión interna', 'Memoria Principal y Memoria Caché', 'Teclado, mouse y monitor', 'DMA, PIC e IVT'], c: 0, e: 'Estos son los 4 bloques internos que arman la CPU.' },
  { parcial: 1, tema: 'Arquitectura', p: 'Según la clasificación de Flynn, un procesador con un único flujo de instrucciones y un único flujo de datos es...', o: ['SIMD', 'MISD', 'SISD', 'MIMD'], c: 2, e: 'Nuestro procesador de estudio (8086/88) es un ejemplo clásico de SISD.' },
  { parcial: 1, tema: 'Arquitectura', p: 'Las placas de video (GPU) se clasifican, según Flynn, como...', o: ['SISD', 'SIMD', 'MISD', 'Ninguna de las anteriores'], c: 1, e: 'Aplican la misma instrucción a muchísimos datos en paralelo (píxeles, vértices).' },
  { parcial: 1, tema: 'Arquitectura', p: '¿La familia Intel x86 (8086/8088 en adelante) es RISC o CISC?', o: ['RISC', 'CISC', 'Ninguna de las dos', 'Ambas por igual'], c: 1, e: 'Intel x86 es la arquitectura CISC de referencia en la materia.' },
  { parcial: 1, tema: 'Memorias', p: '¿Cuál de estas memorias es NO volátil?', o: ['DRAM', 'SRAM', 'EEPROM', 'DDR4'], c: 2, e: 'EEPROM conserva los datos sin alimentación; las otras tres son volátiles.' },
  { parcial: 1, tema: 'Memorias', p: '¿Qué tipo de memoria ROM se borra exponiéndola a luz ultravioleta?', o: ['PROM', 'EPROM', 'EEPROM', 'FLASH'], c: 1, e: 'La "U" de EPROM viene justamente de "ultravioleta".' },
  { parcial: 1, tema: 'Memorias', p: '¿Qué tipo de memoria ROM se programa una única vez, quemando fusibles internos?', o: ['PROM', 'EPROM', 'EEPROM', 'ROM de fábrica'], c: 0, e: 'PROM = Programmable ROM, se graba una sola vez con un equipo programador.' },
  { parcial: 1, tema: 'Memorias', p: 'Los tiempos característicos de una memoria ASINCRÓNICA son...', o: ['RAS Time y CAS Time', 'Access Time solamente', 'Read Time, Write Time y Cycle Time', 'Clock Time y Bus Time'], c: 2, e: 'Las memorias sincronizadas con tableros (SDRAM/DDR) usan en cambio RAS/CAS/Access Time.' },
  { parcial: 1, tema: 'Memorias', p: 'Si cada bloque de la memoria principal solo puede copiarse en UN ÚNICO renglón posible de la caché, la organización es...', o: ['Asociativa', 'Mapeo Directo', 'Asociativa por conjuntos', 'Virtual'], c: 1, e: 'Mapeo Directo: cada bloque tiene un único lugar posible en la caché.' },
  { parcial: 1, tema: 'Memorias', p: 'Si un bloque de memoria puede copiarse en CUALQUIER renglón de la caché, la organización es...', o: ['Mapeo Directo', 'Asociativa', 'Segmentada', 'Paginada'], c: 1, e: 'Asociativa: más flexible, pero necesita más circuitería para buscar.' },
  { parcial: 1, tema: 'Memorias', p: 'La TLB guarda las últimas traducciones de...', o: ['Nombre de archivo a dirección de disco', 'Número de página virtual a número de página física', 'Bloque de caché a renglón de caché', 'Dirección de E/S a número de puerto'], c: 1, e: 'La TLB acelera justamente la traducción de direcciones virtuales a físicas.' },
  { parcial: 1, tema: 'Memorias', p: 'Si la página que se busca NO está en la Memoria Principal, ocurre un...', o: ['Page Hit', 'Cache Miss', 'Page Fault', 'Segmentation Fault'], c: 2, e: 'Page Fault: la página no está en RAM y hay que traerla del disco.' },
  { parcial: 1, tema: 'Memorias', p: 'El intercambio de páginas entre la Memoria Principal y el disco (memoria virtual) se llama...', o: ['Swapping', 'Polling', 'Interleaving', 'Pipelining'], c: 0, e: 'Swapping es el proceso de "intercambio" de páginas entre RAM y disco.' },
  { parcial: 1, tema: 'Memorias', p: 'Nuestro procesador de estudio (Intel 8086/88) ordena los bytes en memoria usando...', o: ['Big Endian', 'Little Endian', 'Middle Endian', 'No usa ningún orden fijo'], c: 1, e: 'Little Endian: el byte menos significativo se guarda primero. Es propio de Intel.' },
  { parcial: 1, tema: 'Unidad de Control', p: 'Las etapas del ciclo de instrucción, en orden, son...', o: ['Decode, Fetch, Execution, Operand Fetch', 'Instruction Fetch, Instruction Decode, Operand Fetch, Execution', 'Fetch, Execution, Decode, Operand Fetch', 'Operand Fetch, Fetch, Decode, Execution'], c: 1, e: 'Primero se busca la instrucción, se decodifica, se buscan sus operandos, y recién ahí se ejecuta.' },
  { parcial: 1, tema: 'Unidad de Control', p: 'Ante la instrucción MOV AX,[0120h], el Contador de Programa (PC/IP) trabaja en modo...', o: ['Habitual', 'Salto', 'Indirección', 'Interrupción'], c: 2, e: 'Se accede a un dato ubicado en otra dirección de memoria: modo Indirección.' },
  { parcial: 1, tema: 'Unidad de Control', p: 'Ante un salto directo como JMP 120h, el PC trabaja en modo...', o: ['Habitual', 'Salto', 'Indirección', 'Excepción'], c: 1, e: 'Es un salto directo a una dirección de instrucción: modo Salto.' },
  { parcial: 1, tema: 'Unidad de Control', p: 'Cuando una instrucción necesita LEER un dato que la instrucción anterior todavía no terminó de ESCRIBIR, el hazard de pipeline es de tipo...', o: ['WAR', 'WAW', 'RAW', 'Estructural'], c: 2, e: 'RAW = Read After Write: hay que leer algo que se está escribiendo antes.' },

  // ---------- PARCIAL 2 ----------
  { parcial: 2, tema: 'IEEE754', p: 'En precisión simple de IEEE 754, ¿cuántos bits ocupa el exponente?', o: ['23 bits', '8 bits', '1 bit', '16 bits'], c: 1, e: 'La máscara es: 1 bit de signo + 8 bits de exponente + 23 bits de mantisa.' },
  { parcial: 2, tema: 'IEEE754', p: 'En precisión simple de IEEE 754, el exponente se representa con un sesgo (exceso) de...', o: ['128', '127', '255', '0'], c: 1, e: 'Aunque el sesgo teórico sería 2⁷=128, IEEE 754 usa 127 para dejar espacio a casos especiales.' },
  { parcial: 2, tema: 'IEEE754', p: 'En precisión simple de IEEE 754, ¿cuántos bits ocupa la mantisa?', o: ['8 bits', '24 bits', '23 bits', '32 bits'], c: 2, e: '23 bits de mantisa + 8 de exponente + 1 de signo = 32 bits totales.' },
  { parcial: 2, tema: 'IEEE754', p: 'Un número IEEE 754 con el exponente en todo unos y la mantisa en todo ceros representa...', o: ['Cero', 'Infinito', 'NaN', 'Un número desnormalizado'], c: 1, e: 'Exponente máximo + mantisa nula = infinito (con el signo correspondiente).' },
  { parcial: 2, tema: 'IEEE754', p: 'Un número IEEE 754 con el exponente en todo unos y la mantisa DISTINTA de cero representa...', o: ['Un número normalizado muy grande', 'NaN (Not a Number)', 'Cero', 'Un número desnormalizado'], c: 1, e: 'Exponente máximo + mantisa no nula = NaN, un resultado matemáticamente inválido.' },
  { parcial: 2, tema: 'E/S', p: 'Nuestro procesador usa un espacio de direcciones de E/S separado del de la memoria. ¿Cómo se llama este esquema?', o: ['Mapeo en Memoria (Memory Mapped I/O)', 'Mapeo Aislado (Isolated I/O)', 'DMA directo', 'Polling extendido'], c: 1, e: 'Isolated I/O: 1M de direcciones para memoria y 64K aparte para E/S.' },
  { parcial: 2, tema: 'E/S', p: 'Las instrucciones que usa el 8086/88 para leer y escribir un puerto de E/S son...', o: ['MOV y CMP', 'PUSH y POP', 'IN y OUT', 'LOAD y STORE'], c: 2, e: 'IN lee de un puerto, OUT escribe a un puerto.' },
  { parcial: 2, tema: 'E/S', p: 'En el esquema de Polling (encuestas), ¿se puede anidar la atención a distintos periféricos?', o: ['Sí, siempre', 'No', 'Solo si tienen la misma prioridad', 'Solo con hardware adicional'], c: 1, e: 'Polling ejecuta las consultas dentro del programa principal, una por una, sin anidamiento.' },
  { parcial: 2, tema: 'Interrupciones', p: 'Las etapas del ciclo de interrupción, en orden, son...', o: ['Atención, Solicitud, Retorno, Reconocimiento', 'Solicitud, Reconocimiento, Atención, Retorno', 'Reconocimiento, Atención, Solicitud, Retorno', 'Retorno, Solicitud, Atención, Reconocimiento'], c: 1, e: 'Primero se pide (Solicitud), se acepta (Reconocimiento), se ejecuta la ISR (Atención) y se vuelve (Retorno).' },
  { parcial: 2, tema: 'Interrupciones', p: 'En la etapa de Atención de una interrupción, la dirección BASE dentro de la IVT se calcula como...', o: ['Tipo + 4', 'Tipo × 4', 'Tipo / 4', 'Tipo × 256'], c: 1, e: 'Cada vector ocupa 4 bytes, así que Tipo × 4 da el desplazamiento correcto dentro de la IVT.' },
  { parcial: 2, tema: 'Interrupciones', p: 'La IVT (Tabla de Vectores de Interrupción) contiene...', o: ['64 vectores de 2 bytes', '256 vectores de 4 bytes', '128 vectores de 8 bytes', '16 vectores de 4 bytes'], c: 1, e: '256 tipos posibles (00h-FFh), cada uno con un vector de 4 bytes (2 para IP, 2 para CS).' },
  { parcial: 2, tema: 'Interrupciones', p: 'Los tipos 00h a 04h de la IVT son...', o: ['Reservados', 'Disponibles', 'Dedicados', 'Inexistentes'], c: 2, e: 'Son 5 tipos fijos dedicados a funciones específicas del procesador (ej: división por cero).' },
  { parcial: 2, tema: 'Interrupciones', p: 'Una interrupción NMI (No enmascarable)...', o: ['Depende del flag IF para ser atendida', 'No depende del flag IF, siempre se atiende', 'Solo se usa para depurar programas', 'Es generada exclusivamente por software'], c: 1, e: 'Se reserva para emergencias graves y se atiende sí o sí, sin importar el estado de IF.' },
  { parcial: 2, tema: 'Interrupciones', p: 'Para permitir el anidamiento de interrupciones dentro de una ISR, hay que ejecutar...', o: ['CLI', 'STI', 'HLT', 'NOP'], c: 1, e: 'STI vuelve a poner IF=1, permitiendo que otra interrupción de mayor prioridad interrumpa a la ISR actual.' },
  { parcial: 2, tema: 'Interrupciones', p: '¿Cuántas líneas de interrupción (IR) puede manejar un solo chip PIC Intel 8259A?', o: ['4', '8', '16', '256'], c: 1, e: 'Cada 8259A maneja 8 IRs (IR0 a IR7); se pueden poner varios en cascada para más.' },
  { parcial: 2, tema: 'DMA', p: 'Durante una transferencia DMA, ¿quién controla los buses del sistema?', o: ['La CPU, todo el tiempo', 'El controlador de DMA (DMAC)', 'La memoria principal', 'El sistema operativo por software'], c: 1, e: 'La CPU cede el control de los buses (HOLD/HOLDA) y el DMAC pasa a ser el "bus master".' },
  { parcial: 2, tema: 'DMA', p: '¿Cuál es el chip controlador de DMA de la familia Intel?', o: ['8259A', '8237A', '8253', '8255'], c: 1, e: 'El 8237A es el controlador de DMA; el 8259A es el de interrupciones (PIC).' },
  { parcial: 2, tema: 'DMA', p: 'Las señales HOLD y HOLDA sirven para...', o: ['Que un periférico pida datos a la CPU', 'Que la CPU ceda y confirme la cesión del control del bus', 'Sincronizar la memoria caché', 'Generar la interrupción NMI'], c: 1, e: 'HOLD = pedido de control del bus; HOLDA = la CPU lo concede.' },
];

if (typeof module !== 'undefined') { module.exports = { RESUMEN, QUIZ }; }
