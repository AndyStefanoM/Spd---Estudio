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
        <li><b>Exceso a 2ⁿ⁻¹ ("Exceso K"):</b> se suma el sesgo 2ⁿ⁻¹ al número y se expresa en
        binario puro. Atajo de examen: <b>es igual al Complemento a 2 pero con el bit de signo
        invertido.</b> No se usa para sumar en la ALU, pero es la misma idea que usa el
        <b>exponente de IEEE 754</b>.</li>
      </ul>
      <table>
        <tr><th>Sistema</th><th>-39d en 1 byte (hex)</th></tr>
        <tr><td>Signo y Magnitud</td><td><code>A7h</code></td></tr>
        <tr><td>Complemento a 1</td><td><code>D8h</code></td></tr>
        <tr><td>Complemento a 2</td><td><code>D9h</code></td></tr>
        <tr><td>Exceso a 2⁷ (128)</td><td><code>59h</code> (Ca2 con el signo invertido)</td></tr>
      </table>
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
      <p><b>Distractor típico de examen:</b> una compuerta de <b>3 estados / Open Collector</b>
      es la que puede dejar su <b>salida en alta impedancia</b>. Una compuerta
      <b>"grounded"</b> es otra cosa: tiene su <b>salida conectada a masa</b>.</p>
      <p>Otro circuito que suele pedirse como ejercicio: el <b>negador controlado</b> — con
      control en 1, la salida es la negación del dato; con control en 0, repite el dato sin
      invertir.</p>
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
      mismo circuito sirve para sumar y restar. <b>Por eso la misma regla de overflow aplica a
      la resta:</b> conviene convertirla mentalmente en una suma antes de evaluar si hay
      desborde.</p>
      <h3>Números reales — Punto Fijo</h3>
      <p>Cuando los dígitos fraccionarios disponibles ("m") no alcanzan para el número exacto
      ("n" dígitos, n&gt;m), hay dos formas de aproximar:</p>
      <ul>
        <li><b>Truncamiento:</b> se descartan los dígitos que sobran. Error máximo: <b>1 bit</b>
        (2⁻ᵐ).</li>
        <li><b>Redondeo:</b> se descartan los dígitos que sobran, pero si el primero descartado
        es 1, se suma 1 al bit menos significativo que queda. Error máximo: <b>½ bit</b> — por
        eso <b>redondear da menor error</b> que truncar solamente.</li>
        <li>Para números negativos en <b>Ca2</b>: primero truncar/redondear la versión
        <b>positiva</b>, y recién después calcular el complemento a 2.</li>
      </ul>
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
      <h3>Cómo descomponer una dirección para la caché (ejercicio típico)</h3>
      <ol>
        <li><b>Offset:</b> si un bloque tiene "b" palabras de "p" bytes, se necesitan
        <code>log₂(b·p)</code> bits — son los bits <b>menos significativos.</b></li>
        <li>Con los bits restantes: en <b>Mapeo Directo</b> se separan en <b>#renglón</b>
        (<code>log₂(cant. de renglones)</code> bits) + <b>etiqueta</b> (el resto). En
        <b>Asociativa</b>, todos forman directamente el <b>#bloque</b> (no hay "renglón fijo").</li>
      </ol>
      <p><i>Ejemplo: bloques de 32 palabras de 2 bytes (offset = 6 bits), caché de 64 renglones
      (6 bits de renglón), bus de 20 bits → quedan 8 bits de etiqueta.</i></p>
      <h3>Cómo armar un banco de memoria (ejercicio típico)</h3>
      <ul>
        <li><b>Columnas</b> (chips en paralelo) = ancho de palabra del bus de Data ÷ ancho de
        palabra de cada chip.</li>
        <li><b>Filas</b> (profundidad) = capacidad total necesaria ÷ capacidad de cada fila.</li>
        <li><b>Entrelazado (interleaving):</b> los bits <b>menos significativos</b> de la
        dirección eligen el banco (permite superponer accesos y ganar velocidad).
        <b>Continuo:</b> lo eligen los bits <b>más significativos.</b></li>
      </ul>
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
      <p><b>Predicción de saltos:</b> <b>estática</b> (siempre igual, ej: "nunca salta" o "si es
      hacia atrás, siempre salta") o <b>dinámica</b> (aprende del historial reciente de ese
      salto). Las <b>tablas de reserva</b> muestran qué etapa ocupa cada instrucción en cada
      ciclo, para anticipar <b>hazards estructurales</b>. La <b>segmentación</b> es cuando cada
      etapa del pipeline se especializa en una única tarea.</p>
      <h3>RISC vs. CISC</h3>
      <div class="img-row">
        <figure><img src="./assets/img/risc_cisc.png"><figcaption>Comparación RISC vs CISC</figcaption></figure>
      </div>
      <p>La familia Intel x86 (nuestro 8086/88) es <b>CISC</b>.</p>
      <p><b>Dos datos que se prestan a confusión:</b> a RISC se lo conoce como arquitectura
      <b>"Load-Store"</b> (solo esas 2 instrucciones acceden a memoria), y su Unidad de Control
      es de <b>lógica cableada (hardwired)</b>, <b>no</b> microprogramada — el control
      microprogramado es característica de <b>CISC</b>.</p>
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
      <ul>
        <li>A cada <b>puerto</b> le corresponde una única dirección de E/S, pero una misma
        <b>unidad</b> de E/S puede tener varios puertos (uno de cada tipo).</li>
        <li><b>Falso</b> que programar E/S sea idéntico a programar memoria: usan
        instrucciones (<code>IN</code>/<code>OUT</code> vs <code>MOV</code>) y espacios de
        direcciones distintos.</li>
        <li>Las funciones de una unidad de E/S son exactamente 5: <b>comunicación con la CPU,
        comunicación con el dispositivo, control y temporización, almacenamiento temporal, y
        detección de errores.</b> ("Interrogar al periférico" u "otorgar los buses" son
        distractores, no forman parte de esta lista.)</li>
      </ul>
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
      <p>La <b>IVT</b> tiene 256 vectores de 4 bytes cada uno: <b>00h-04h Dedicadas</b> (5),
      <b>05h-1Fh Reservadas</b> (27), <b>20h-FFh Disponibles</b> (224).</p>
      <div class="img-row">
        <figure><img src="./assets/img/ivt_clasif.png"><figcaption>Clasificación de tipos en la IVT</figcaption></figure>
      </div>
      <p>La <b>NMI</b> no depende de IF (siempre se atiende). Para anidar interrupciones
      dentro de una ISR hay que ejecutar <b>STI</b>. El <b>PIC 8259A</b> maneja 8 IRs por
      chip, expandible en cascada (hasta 8 esclavos + 1 maestro = 64 IRs). Con prioridad fija,
      <b>IR0 es la más prioritaria</b>; si llegan 2 pedidos juntos, le hace <b>contención</b>
      (deja esperando) al de menor prioridad.</p>
      <h3>DMA</h3>
      <p>El periférico transfiere datos directo a memoria; <b>la CPU nunca interviene</b>
      durante la transferencia en sí. Señales: <b>HOLD/HOLDA</b> (CPU cede el bus) y
      <b>DREQ/DACK</b> (petición/aceptación del periférico). Chip controlador: <b>Intel
      8237A</b>, con 4 canales, prioridad fija o rotativa.</p>
      <ul>
        <li><b>Trampa de examen:</b> la CPU cede el bus al terminar el <b>ciclo de bus</b> en
        curso, <b>no</b> al terminar toda la instrucción.</li>
        <li>Modos: <b>Simple</b> (un dato por vez), <b>En Bloque</b> (hasta que el <b>Terminal
        Count (TC)</b> llega a cero), <b>A Demanda</b> (sigue mientras el periférico mantenga
        activa su señal DREQ).</li>
      </ul>
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

  // ---------- AMPLIACIÓN (2da pasada sobre el compilado) ----------
  { parcial: 1, tema: 'Numérico', p: 'La representación en Exceso a 2ⁿ⁻¹ de un número es igual, bit a bit, a...', o: ['Signo y Magnitud', 'Complemento a 1', 'Complemento a 2 con el bit de signo invertido', 'ASCII de ese número'], c: 2, e: 'Es el atajo más rápido para resolverlo en un parcial: se calcula el Ca2 y se invierte solo el bit de signo.' },
  { parcial: 1, tema: 'Numérico', p: 'Para lograr el MENOR error de representación al aproximar un número real en punto fijo, conviene...', o: ['Truncar solamente', 'Redondear (y truncar)', 'No truncar', 'Usar signo y magnitud'], c: 1, e: 'Truncar solo tiene un error máximo de 1 bit; redondeando el error máximo baja a ½ bit.' },
  { parcial: 1, tema: 'Overflow', p: 'Al restar dos números CON signo, ¿aplica la misma regla de overflow que en la suma?', o: ['No, la resta nunca tiene overflow', 'Sí, porque restar es sumar el complemento a 2 del sustraendo', 'Solo si el resultado es cero', 'Solo en números sin signo'], c: 1, e: 'Como el hardware convierte toda resta en una suma, la regla de positivo+positivo=negativo (y viceversa) sigue aplicando.' },
  { parcial: 1, tema: 'Boole', p: 'Una compuerta "grounded" se caracteriza por...', o: ['Su salida puede estar en alta impedancia', 'Su salida está conectada a masa', 'Sus entradas están en alta impedancia', 'No tener salida'], c: 1, e: 'No confundir con el buffer de 3 estados: "grounded" implica salida atada a masa, no alta impedancia.' },
  { parcial: 1, tema: 'Arquitectura', p: 'A un procesador RISC también se lo conoce como arquitectura...', o: ['CISC-compatible', 'Load-Store', 'Microprogramada', 'Von Neumann pura'], c: 1, e: 'Porque de todo su set de instrucciones, solo Load y Store acceden a la memoria.' },
  { parcial: 1, tema: 'Arquitectura', p: 'La Unidad de Control de un procesador RISC es de tipo...', o: ['Microprogramada', 'Cableada (hardwired)', 'Asociativa', 'Virtual'], c: 1, e: 'Es una confusión típica: el control microprogramado es justamente una característica de CISC, no de RISC.' },
  { parcial: 1, tema: 'Unidad de Control', p: 'Un predictor de saltos del tipo "nunca salta" es de tipo...', o: ['Dinámico', 'Estático', 'Adaptativo', 'Estructural'], c: 1, e: 'Siempre predice lo mismo sin importar el historial: por eso es estático.' },
  { parcial: 1, tema: 'Memorias', p: 'En un banco de memoria con direccionamiento ENTRELAZADO (interleaving), ¿qué bits de la dirección eligen el banco?', o: ['Los más significativos', 'Los menos significativos', 'El bit de paridad', 'No depende de la dirección'], c: 1, e: 'Los bits menos significativos reparten direcciones consecutivas entre distintos bancos, permitiendo superponer accesos.' },
  { parcial: 2, tema: 'E/S', p: '¿Cuál de estas NO es una función genérica de una unidad de E/S?', o: ['Detección de errores', 'Control y temporización', 'Interrogar al periférico', 'Almacenamiento temporal'], c: 2, e: 'Las 5 funciones son: comunicación con la CPU, comunicación con el dispositivo, control/temporización, almacenamiento temporal y detección de errores. "Interrogar al periférico" es un distractor.' },
  { parcial: 2, tema: 'Interrupciones', p: 'Los tipos 05h a 1Fh de la IVT son...', o: ['Dedicados', 'Disponibles', 'Reservados', 'Inexistentes'], c: 2, e: 'Son 27 tipos reservados (05h a 1Fh); recién de 20h a FFh (224 tipos) quedan disponibles para el programador.' },
  { parcial: 2, tema: 'Interrupciones', p: 'Si el PIC 8259A recibe un pedido por IR4 y por IR5 al mismo tiempo (prioridad fija), ¿qué hace?', o: ['Atiende IR5 primero', 'Atiende IR4 primero y le hace contención a IR5', 'Ignora ambos', 'Atiende ambos en simultáneo'], c: 1, e: 'Con prioridad fija, el número de IR más bajo gana; el otro queda "recordado" (contención) hasta ser atendido.' },
  { parcial: 2, tema: 'DMA', p: '¿En qué momento exacto la CPU cede el control del bus a un DMAC que lo solicitó?', o: ['Al terminar la instrucción completa', 'Al terminar el ciclo de bus en curso', 'Inmediatamente, sin esperar nada', 'Al terminar el programa'], c: 1, e: 'No hace falta esperar toda la instrucción — alcanza con que termine el ciclo de bus que está en curso en ese momento.' },

  // ---------- SELECCIÓN MÚLTIPLE (formato "marcar todas las que correspondan") ----------
  { parcial: 1, tema: 'Overflow', multi: true, p: 'Considerando palabras de 3 bits en Complemento a 2, marcá todas las sumas que arrojarán overflow:', o: ['110 + 110', '010 + 101', '011 + 011', '110 + 011', '100 + 100', '001 + 000'], c: [2, 4], e: '011+011 (+3+3) da como resultado binario -2 (se "sale" del rango -4..+3): overflow. 100+100 (-4-4) da como resultado 0: overflow. Las demás combinan signos distintos o dan un resultado que sigue entrando en el rango de 3 bits, así que no desbordan.' },
  { parcial: 1, tema: 'Numérico', multi: true, p: 'A la combinación binaria 010111010b (9 bits, con 5 unos) le faltan 3 bits. Marcá todas las ternas que se le podrían agregar para que el conjunto final tenga paridad PAR:', o: ['000', '001', '010', '011', '100', '101', '110', '111'], c: [1, 2, 4, 7], e: 'Ya hay 5 unos (cantidad impar). Para que el total sea par, la terna agregada debe aportar una cantidad IMPAR de unos: eso pasa con 001, 010 y 100 (un solo 1) y con 111 (tres unos).' },
  { parcial: 1, tema: 'Boole', multi: true, p: 'Marcá todas las afirmaciones correctas sobre los Flip-Flops:', o: ['Operando de forma asincrónica, para poner Q=1 hay que poner SET=1 y CLR=0', 'Operando de forma sincrónica, para poner CLR=1 hay que poner SET=1 y un pulso ascendente en D', 'Operando de forma sincrónica, para poner Q=1 hay que poner D=1 y un pulso ascendente en CLK', 'Operando de forma sincrónica, para poner D=1 hay que poner Q=1 y un pulso ascendente en SET', 'Operando de forma asincrónica, para poner Q=1 hay que poner CLR=1 y SET=0'], c: [0, 2], e: 'SET/CLR son las entradas asincrónicas (actúan directo, sin reloj); D/CLK son las sincrónicas (necesitan el pulso de reloj). Las opciones b, d y e mezclan las señales de forma incorrecta o al revés.' },
  { parcial: 1, tema: 'Memorias', multi: true, p: 'Marcá todas las afirmaciones correctas sobre la memoria Caché:', o: ['Los bloques de la memoria principal pueden tener cualquier longitud', 'El bit de validez indica si el renglón tiene un dato cargado, no si fue modificado', 'La etiqueta resuelve el número de renglón en la organización asociativa', 'En el Mapeo Directo, a cada bloque le corresponde un único número de renglón posible', 'En la organización Asociativa se puede agregar una memoria asociativa para recordar las últimas traducciones #bloque↔#renglón', 'En un renglón de caché puedo colocar cualquier bloque de memoria principal si la organización es Asociativa'], c: [1, 3, 4, 5], e: 'Los bloques tienen longitud fija (no "cualquiera"). El bit de validez indica presencia de dato válido, no modificación (eso es el bit de "dirty"). En la organización asociativa no hay un "número de renglón" fijo que resolver: por eso se necesitan algoritmos de búsqueda más sofisticados.' },
  { parcial: 1, tema: 'Arquitectura', multi: true, p: 'Marcá todas las afirmaciones correctas sobre las arquitecturas RISC:', o: ['Se las suele conocer como arquitecturas Load-Store', 'Poseen control microprogramado', 'Sus instrucciones demandan varios ciclos de reloj para ejecutarse', 'Se basan en el modelo de Harvard', 'Poseen varios formatos de instrucción distintos', 'Tienen muy pocos modos de direccionamiento', 'Sus registros son todos de propósito general'], c: [0, 3, 5, 6], e: 'RISC es Load-Store, de control cableado (no microprogramado), la mayoría de instrucciones toma 1 ciclo de reloj (no varios), se basa en Harvard, tiene formato de instrucción mayormente fijo (no "varios formatos"), pocos modos de direccionamiento y registros de propósito general.' },
  { parcial: 1, tema: 'Unidad de Control', multi: true, p: 'Marcá todas las afirmaciones correctas sobre los pipelines de instrucciones:', o: ['Las instrucciones MOV AX,5 y ADD BX,CX presentan un problema de datos si se paralelizan', 'Un predictor de saltos dinámico es del tipo "si es un salto hacia atrás, siempre salta"', 'Un predictor de saltos del tipo "nunca salta" es de tipo estático', 'Las tablas de reserva sirven para saber qué etapa ocupa cada instrucción y detectar si se pueden paralelizar', 'En la segmentación de instrucciones, cada etapa de la cadena está especializada en una tarea específica'], c: [2, 3, 4], e: 'MOV AX,5 y ADD BX,CX no comparten ningún registro, así que NO hay hazard de datos entre ellas (opción trampa). "Si es salto hacia atrás, siempre salta" es una heurística ESTÁTICA, no dinámica (otra trampa clásica). Las otras tres son correctas.' },

  // ---------- AMPLIACIÓN (parcialitos de la cursada) ----------
  { parcial: 1, tema: 'Numérico', multi: true, p: 'Marcá las afirmaciones correctas:', o: ['Al realizar sumas en hexadecimal, el llevarse "unos" significa llevarse potencias de 16', 'Para multiplicar una cifra hexadecimal por la base debo inyectar un cero por izquierda y desplazar los dígitos hacia la derecha', 'El sistema binario es basado y posicional', 'Los pesos del sistema binario desde el dígito cero hasta el enésimo son 1, 2, 4, 8, 16, … 2 a la n', 'La base de un sistema numérico no define la cantidad de símbolos que posee'], c: [0, 2, 3], e: 'Multiplicar por la base es inyectar un CERO POR DERECHA y desplazar hacia la IZQUIERDA (la opción b lo dice al revés). La base sí define la cantidad de símbolos posibles (en binario: 2; en hexadecimal: 16), así que la opción e es falsa.' },
  { parcial: 1, tema: 'Numérico', multi: true, p: '¿Qué sistemas de numeración binaria entera con signo permiten tener el siguiente rango de representación: {-(2ⁿ⁻¹) ; +(2ⁿ⁻¹-1)}?', o: ['Signo y Complemento (no existe como tal)', 'Exceso a 2', 'Exceso 2 a la (n-1)', 'Signo y Magnitud', 'Complemento a 1', 'Complemento a 2'], c: [2, 5], e: 'Signo y Magnitud y Complemento a 1 tienen rango simétrico (-(2ⁿ⁻¹-1) a +(2ⁿ⁻¹-1)) por el problema del doble cero. Solo Complemento a 2 y Exceso 2 a la (n-1) llegan a ese rango asimétrico (un negativo más que positivos) — tiene sentido, porque son la misma representación con el bit de signo invertido.' },
  { parcial: 1, tema: 'Numérico', p: '¿Qué máquina inventó Charles Babbage, considerada el primer concepto de los ordenadores modernos?', o: ['UNIVAC', 'Máquina Analítica', 'ENIAC', 'Colossus'], c: 1, e: 'La Máquina Analítica (Analytical Engine) de Babbage, diseñada en el siglo XIX, es considerada el primer diseño conceptual de una computadora de propósito general (aunque nunca se terminó de construir en su época).' },
  { parcial: 1, tema: 'Numérico', p: 'Ordenando cronológicamente las tecnologías con que se construyeron los ordenadores, ¿cuál es la secuencia correcta?', o: ['Engranajes → Relés → Tubos de vacío → Transistores → Circuitos integrados → Moleculares', 'Tubos de vacío → Engranajes → Transistores → Relés → Circuitos integrados → Moleculares', 'Transistores → Circuitos integrados → Tubos de vacío → Relés → Engranajes → Moleculares', 'Engranajes → Tubos de vacío → Relés → Circuitos integrados → Transistores → Moleculares'], c: 0, e: 'El orden histórico real es: Engranajes (máquinas mecánicas) → Relés electromecánicos → Tubos de vacío → Transistores → Circuitos integrados → (hoy en día se investiga la electrónica molecular como posible próxima etapa).' },
  { parcial: 1, tema: 'Numérico', p: 'Con 8 bits, ¿cuántas cifras decimales distintas podrán representarse?', o: ['256', '128', '1024', '8'], c: 0, e: 'Con "n" bits se pueden representar 2ⁿ combinaciones distintas: 2⁸ = 256.' },
  { parcial: 1, tema: 'Numérico', multi: true, p: 'Trabajando en Complemento a 2 de 1 byte, marcá todos los valores hexadecimales que representan un número NEGATIVO:', o: ['61h', '7Fh', 'ACh', '4Ah', 'FFh', '8Bh', 'E0h', '00h'], c: [2, 4, 5, 6], e: 'En Ca2 de 1 byte, un valor es negativo cuando su bit más significativo es 1 — es decir, cuando el valor es 80h o mayor. Eso pasa con ACh, FFh, 8Bh y E0h. Los demás (61h, 7Fh, 4Ah, 00h) son menores a 80h, así que son positivos o cero.' },
  { parcial: 1, tema: 'Numérico', multi: true, p: 'Marcá todas las afirmaciones correctas:', o: ['Si inyecto un cero por izquierda y desplazo los dígitos una posición a la derecha (descartando el menos significativo), estoy dividiendo por la base', 'Al restar cifras binarias, pido prestado de a 2, no de a 10', 'Al sumar cifras binarias, me llevo potencias de 2, no de 10', 'Si inyecto un cero por derecha y desplazo los dígitos una posición a la izquierda, estoy sumando'], c: [0, 1, 2], e: 'Desplazar a la izquierda inyectando un cero por derecha es MULTIPLICAR por la base (no sumar) — la opción d está mal. Las otras tres son correctas: desplazar a la derecha es dividir, y las operaciones de acarreo/préstamo en binario funcionan en base 2, no en base 10.' },
  { parcial: 1, tema: 'Numérico', p: '¿Qué sistema de representación con signo se arma así: se parte de la cifra positiva, se deja el bit más significativo como signo, se invierten todos los demás bits (unos por ceros y viceversa) y finalmente se suma una unidad en la posición menos significativa?', o: ['Signo y Magnitud', 'Complemento a 1', 'Complemento a 2', 'Exceso a 2ⁿ⁻¹'], c: 2, e: 'Esa descripción es exactamente el procedimiento de Complemento a 2: invertir los bits de la versión positiva y sumar 1.' },
  { parcial: 1, tema: 'Numérico', multi: true, p: 'Marcá todas las afirmaciones correctas sobre la representación binaria en computadoras:', o: ['El computador trabaja con la representación binaria', 'Una cifra binaria tiene un único significado, que es el que se obtiene al pasar su valor al sistema decimal', 'Un mismo valor binario puede ser usado para representar información diferente', 'En la ALU del computador siempre se operan cifras binarias que representan cantidades', 'La longitud de las cifras binarias en un computador depende de la cantidad de memoria principal que posea', 'La información en computadoras se representa con una cantidad fija de bits'], c: [0, 2, 5], e: 'Un mismo patrón de bits puede significar un número, un carácter ASCII, una instrucción, etc. según el contexto (por eso la opción b es falsa). La longitud de las cifras (byte, word, etc.) depende de la arquitectura del procesador, no de cuánta memoria tenga instalada (opción e falsa). Las correctas: se trabaja en binario, un mismo valor puede representar cosas distintas, y la información usa una cantidad fija de bits.' },
  { parcial: 1, tema: 'Numérico', p: '¿Cuántos bits usa el código UTF-32?', o: ['32 bits', '16 bits', '8 bits', '7 bits'], c: 0, e: 'UTF-32 usa una cantidad fija de 32 bits por carácter (a diferencia de ASCII estándar con 7 bits y ASCII extendido con 8 bits).' },
  { parcial: 1, tema: 'Arquitectura', multi: true, p: 'Indicá la estructura interna de una CPU (marcá todas las que correspondan):', o: ['Entrada/Salida', 'Memoria Principal', 'Buses', 'Unidad de Control de Registros y Decodificadores', 'Registros', 'Unidad de Control', 'Interconexión interna de la CPU', 'Lógica Secuencial', 'Unidad Aritmético-Lógica'], c: [4, 5, 6, 8], e: 'La CPU se compone de Registros, Unidad de Control, Interconexión interna y ALU. Entrada/Salida, Memoria Principal y Buses son parte de la ESTRUCTURA DEL ORDENADOR completo, no de la CPU en particular — y "Unidad de Control de Registros y Decodificadores" junto con "Lógica Secuencial" son en realidad partes INTERNAS de la Unidad de Control, un nivel más profundo.' },
  { parcial: 1, tema: 'Arquitectura', multi: true, p: 'Indicá los elementos estructurales de un ordenador o computador (marcá todos los que correspondan):', o: ['Memoria Principal', 'Entrada/Salida', 'CPU', 'Memoria de Control', 'Registros', 'Unidad de Control', 'Unidad Aritmético-Lógica', 'Buses'], c: [0, 1, 2, 7], e: 'La estructura del ORDENADOR completo es: CPU, Memoria Principal, Entrada/Salida y Buses. Memoria de Control, Registros, Unidad de Control y ALU son partes INTERNAS de la CPU, no bloques del ordenador en sí — es la confusión típica que buscan estas preguntas.' },
  { parcial: 1, tema: 'Arquitectura', multi: true, p: 'Según la clasificación de Flynn vista en la materia, marcá todas las asociaciones correctas:', o: ['CPU común → SISD', 'CPU vectorial → MISD', 'Procesadores multinúcleo → MISD', 'Sistemas distribuidos → SISD', 'CPU vectorial → SIMD', 'Sistemas distribuidos → MIMD'], c: [0, 2, 4, 5], e: 'Según la clasificación vista en la cátedra: CPU común = SISD, CPU vectorial = SIMD, Procesadores multinúcleo = MISD, y Sistemas distribuidos = MIMD.' },
  { parcial: 1, tema: 'Arquitectura', p: '¿Cuál de los siguientes atributos, visible al programador, tiene impacto directo en la ejecución de un programa?', o: ['Arquitectura', 'Organización', 'Estructura', 'Codificación'], c: 0, e: 'La Arquitectura es justamente lo que "ve" el programador (registros, set de instrucciones) y por eso afecta directamente cómo se ejecuta el programa. Organización y Estructura son transparentes para el programador.' },
  { parcial: 1, tema: 'Memorias', p: 'El modelo de Harvard Mejorada está implementado en los procesadores Intel en sus niveles de caché. ¿En qué nivel se separan los datos de las instrucciones?', o: ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'], c: 0, e: 'La separación entre caché de instrucciones y caché de datos (el modelo Harvard Mejorada) ocurre específicamente en el nivel 1 (L1) de la jerarquía de caché.' },
  { parcial: 1, tema: 'Arquitectura', multi: true, p: 'Indicá las funciones principales de un computador:', o: ['Decodificar', 'Codificar', 'Procesar', 'Almacenar', 'Multiplexar', 'Transportar', 'Controlar', 'Mover'], c: [2, 3, 6, 7], e: 'Las 4 funciones básicas de cualquier computador son: Mover (datos entre sus partes), Almacenar, Procesar y Controlar. "Transportar" es un distractor que suena parecido a "Mover" pero no es el término correcto.' },
  { parcial: 1, tema: 'Unidad de Control', multi: true, p: 'Indicá la estructura INTERNA de la Unidad de Control (no de toda la CPU):', o: ['Unidad Aritmético-Lógica', 'Interconexión interna de la CPU', 'Memoria de control', 'Entrada/Salida', 'Registros', 'Buses', 'Lógica secuencial', 'Unidad de Control de Registros y Decodificadores'], c: [2, 6, 7], e: 'La Unidad de Control, vista por dentro, se compone de: Memoria de Control, Lógica Secuencial y Unidad de Control de Registros y Decodificadores. Los Registros y la ALU son parte de la CPU en general, pero no de la Unidad de Control específicamente.' },
  { parcial: 1, tema: 'Arquitectura', p: 'En la máquina de Von Neumann, la memoria principal contiene tanto instrucciones como datos en el mismo espacio. En la máquina de Harvard, en cambio...', o: ['También hay un único espacio de memoria compartido', 'Existen dos espacios de memoria separados: uno para instrucciones y otro para datos', 'No existe memoria principal', 'Las instrucciones se guardan solo en registros'], c: 1, e: 'Harvard separa físicamente la memoria de instrucciones y la de datos, a diferencia de Von Neumann que los mezcla en un único espacio. La Harvard Mejorada combina ambos: hacia afuera se ve como Von Neumann, pero internamente trabaja como Harvard.' },
  { parcial: 1, tema: 'Boole', multi: true, p: 'Marcá todas las equivalencias correctas entre compuertas:', o: ['Un buffer con un NOT en la salida equivale a una compuerta NOT', 'Una compuerta NOR con un NOT en cada entrada equivale a una compuerta AND', 'Para implementar una compuerta EXOR alcanza con combinar compuertas AND, OR y NOT', 'Una compuerta NAND con un NOT en cada entrada equivale a una compuerta AND', 'Una compuerta AND con un NOT en cada entrada equivale a una compuerta NAND'], c: [0, 1, 2], e: 'Verificado por tabla de verdad: NAND con NOT en cada entrada da OR (no AND), y AND con NOT en cada entrada da NOR (no NAND) — las opciones 4 y 5 están mal. Las primeras tres sí son correctas.' },
];

if (typeof module !== 'undefined') { module.exports = { RESUMEN, QUIZ }; }

// ============================================================
// GENERADORES DE PREGUNTAS DINÁMICAS
// Cada uno arma una pregunta nueva, con números al azar, cada vez que se llama.
// Así la práctica no se siente siempre igual, aunque el banco fijo (QUIZ) sea el mismo.
// ============================================================

function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
function hex2(v){ return v.toString(16).toUpperCase().padStart(2, '0') + 'h'; }
function shuffleConIndice(arr, correctIdx){
  const order = arr.map((_, i) => i).sort(() => Math.random() - 0.5);
  return { arr: order.map(i => arr[i]), correct: order.indexOf(correctIdx) };
}

// 1) Conversión con signo: SyM / Ca1 / Ca2 / Exceso a 2^7, con un número al azar
function genConversionSigno(){
  const n = randInt(1, 127);
  const bin7 = n.toString(2).padStart(7, '0');
  const sym = parseInt('1' + bin7, 2);
  const ca1 = (~n) & 0xFF;
  const ca2 = (ca1 + 1) & 0xFF;
  const exceso = ca2 ^ 0x80;
  const sistemas = [
    { nombre: 'Signo y Magnitud', val: sym },
    { nombre: 'Complemento a 1', val: ca1 },
    { nombre: 'Complemento a 2', val: ca2 },
    { nombre: 'Exceso a 2⁷ (128)', val: exceso },
  ];
  const targetIdx = randInt(0, 3);
  const target = sistemas[targetIdx];
  const opts = sistemas.map(s => hex2(s.val));
  const { arr, correct } = shuffleConIndice(opts, targetIdx);
  return {
    parcial: 1, tema: 'Numérico',
    p: `Representando -${n}d en 1 byte con ${target.nombre}, ¿cuál es el valor correcto en hexadecimal?`,
    o: arr, c: correct,
    e: `+${n}d = ${bin7}b (7 bits de magnitud). SyM=${hex2(sym)} · Ca1=${hex2(ca1)} · Ca2=${hex2(ca2)} · Exceso a 2⁷=${hex2(exceso)} (Ca2 con el bit de signo invertido).`
  };
}

// 2) Overflow: dos operandos al azar en Ca2 de 4 bits, ¿da overflow o no?
function genOverflow(){
  const w = 4, min = -(2 ** (w - 1)), max = 2 ** (w - 1) - 1;
  let a = randInt(min, max), b = randInt(min, max);
  if (Math.random() < 0.5) { const s = Math.random() < 0.5 ? 1 : -1; a = s * randInt(1, max); b = s * randInt(1, max - 1 >= 1 ? max : 1); }
  a = Math.max(min, Math.min(max, a)); b = Math.max(min, Math.min(max, b));
  const sum = a + b;
  const overflow = sum > max || sum < min;
  const toBin = v => ((v < 0 ? (1 << w) + v : v) & ((1 << w) - 1)).toString(2).padStart(w, '0');
  const opts = ['Sí, da overflow', 'No, no da overflow'];
  const correct = overflow ? 0 : 1;
  return {
    parcial: 1, tema: 'Overflow',
    p: `Trabajando en Complemento a 2 de ${w} bits: ${toBin(a)}b (${a}d) + ${toBin(b)}b (${b}d). ¿Da overflow?`,
    o: opts, c: correct,
    e: `${a} + ${b} = ${sum}. El rango representable en ${w} bits es [${min} ; ${max}]. ${overflow ? `Como ${sum} queda fuera de ese rango, sí hay overflow.` : `Como ${sum} entra en ese rango, no hay overflow.`}`
  };
}

// 3) Paridad: un byte al azar, ¿qué bit agregar para lograr paridad par o impar?
function genParidad(){
  const val = randInt(0, 255);
  const bin = val.toString(2).padStart(8, '0');
  const ones = bin.split('').filter(c => c === '1').length;
  const targetParity = Math.random() < 0.5 ? 'par' : 'impar';
  const neededBit = targetParity === 'par' ? (ones % 2 === 0 ? 0 : 1) : (ones % 2 === 0 ? 1 : 0);
  return {
    parcial: 1, tema: 'Numérico',
    p: `Se transmite la combinación ${bin}b. ¿Qué bit hay que agregar para que el conjunto tenga paridad ${targetParity}?`,
    o: ['0', '1'], c: neededBit,
    e: `${bin}b tiene ${ones} unos (cantidad ${ones % 2 === 0 ? 'par' : 'impar'}). Para lograr paridad ${targetParity} hay que agregar un ${neededBit}.`
  };
}

// 4) Caché de Mapeo Directo: dirección al azar, calcular el número de renglón
function genCache(){
  const offsetBits = 4, rowBits = 5, addrBits = 16;
  const tagBits = addrBits - offsetBits - rowBits;
  const addr = randInt(0, (1 << addrBits) - 1);
  const addrBin = addr.toString(2).padStart(addrBits, '0');
  const offsetBin = addrBin.slice(-offsetBits);
  const rowBin = addrBin.slice(-(offsetBits + rowBits), -offsetBits);
  const tagBin = addrBin.slice(0, tagBits);
  const rowNum = parseInt(rowBin, 2);
  const addrHex = addr.toString(16).toUpperCase().padStart(4, '0') + 'h';
  const distractores = new Set([rowNum]);
  while (distractores.size < 4) distractores.add(randInt(0, (1 << rowBits) - 1));
  const opts = [...distractores].sort(() => Math.random() - 0.5).map(String);
  const correct = opts.indexOf(String(rowNum));
  return {
    parcial: 1, tema: 'Memorias',
    p: `Caché de Mapeo Directo: bloques de 16 bytes (offset = 4 bits) y 32 renglones (5 bits), en un procesador con bus de Address de 16 bits. Para la dirección ${addrHex}, ¿a qué número de renglón corresponde?`,
    o: opts, c: correct,
    e: `${addrHex} = ${addrBin}b. Los últimos 4 bits (${offsetBin}) son el offset. Los siguientes 5 bits (${rowBin}) dan el número de renglón = ${rowNum}d. El resto (${tagBin}) es la etiqueta.`
  };
}

// 5) Conversión Hexadecimal → Binario, con un valor de 4 dígitos al azar
function genHexABinario(){
  const val = randInt(0, 0xFFFF);
  const hex = val.toString(16).toUpperCase().padStart(4, '0') + 'h';
  const bin = val.toString(2).padStart(16, '0');
  const opciones = new Set([bin]);
  while (opciones.size < 4) {
    const d = (val ^ (1 << randInt(0, 15))) >>> 0;
    opciones.add(d.toString(2).padStart(16, '0'));
  }
  const { arr, correct } = shuffleConIndice([...opciones], [...opciones].indexOf(bin));
  return {
    parcial: 1, tema: 'Numérico',
    p: `¿Cuál es el resultado correcto de convertir ${hex} a binario?`,
    o: arr.map(b => b + 'b'), c: correct,
    e: `Agrupando de a 4 bits por cada dígito hexadecimal, ${hex} = ${bin}b.`
  };
}

// 6) Identificar negativos en Ca2 directamente desde el valor hexadecimal (MSB = 1 <=> >= 80h)
function genNegativosCa2Hex(){
  const bytes = new Set();
  while (bytes.size < 6) bytes.add(randInt(0, 255));
  const arr = [...bytes];
  const correctIdxs = arr.map((v, i) => (v >= 0x80 ? i : -1)).filter(i => i !== -1);
  if (correctIdxs.length === 0 || correctIdxs.length === arr.length) return genNegativosCa2Hex();
  const opts = arr.map(v => v.toString(16).toUpperCase().padStart(2, '0') + 'h');
  return {
    parcial: 1, tema: 'Numérico', multi: true,
    p: `Trabajando en Complemento a 2 de 1 byte, marcá todos los valores hexadecimales que representan un número NEGATIVO:`,
    o: opts, c: correctIdxs,
    e: `Un valor es negativo en Ca2 de 1 byte cuando su bit más significativo es 1, o sea cuando el valor es 80h o mayor. Eso pasa con: ${correctIdxs.map(i => opts[i]).join(', ')}.`
  };
}

// Cada generador declara con qué tema/parcial se lo asocia, para que respete los filtros.
const GENERATORS = [
  { tema: 'Numérico', parcial: 1, fn: genConversionSigno },
  { tema: 'Overflow', parcial: 1, fn: genOverflow },
  { tema: 'Numérico', parcial: 1, fn: genParidad },
  { tema: 'Memorias', parcial: 1, fn: genCache },
  { tema: 'Numérico', parcial: 1, fn: genHexABinario },
  { tema: 'Numérico', parcial: 1, fn: genNegativosCa2Hex },
];

if (typeof module !== 'undefined') { module.exports.GENERATORS = GENERATORS; }
