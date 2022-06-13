const persons = [
  {
    id: 1,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Sakura-Kinomoto.png",
    name: "Sakura Kinomoto",
    title: "木之本 さくら",
    details:
      'Sakura es un personaje extremadamente enérgico, lindo, hermoso, dulce, alegre y muy amable. Ella es muy atlética, es miembro del escuadrón de porristas de su escuela y es una excelente corredora, un rasgo que heredó de su padre. Su "hechizo invencible", "seguramente todo estará bien". ("Zettai daijōbu da yo."), La ha llevado a través de innumerables pruebas y obstáculos mientras ella domina sus habilidades mágicas. Su frase es "¡Hoe!" (generalmente alargada "hoeeee"), que la usa cada vez que ella está conmocionada o asustada, incluso por lo más mínimo. También grita con frecuencia "KERO, NO!!!", al regañar a Kero.',
  },
  {
    id: 2,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Syaoran-Li.png",
    name: "Syaoran Li",
    title: "李 小狼",
    details:
      "Como miembro del famoso clan Li de hechiceros de Hong Kong, de la cual la propia madre de Clow Reed también era miembro, Syaoran había creído firmemente que debería ser él quien capturara y heredara las Cartas Clow, no Sakura Kinomoto.",
  },
  {
    id: 3,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Tomoyo.png",
    name: "Tomoyo Daidouji",
    title: "大道寺 知世",
    details:
      "Tomoyo es la mejor amiga de la serie heroína, Sakura Kinomoto. Cuando descubre que Sakura se ha convertido en Cardcaptor, se convierte en la asistente principal de Sakura diseñando trajes de batalla (similar a otro personaje de CLAMP, Hokuto Sumeragi, que diseña trajes extravagantes para ella y su hermana gemela Subaru) y filma todo su mágico (y esfuerzos no mágicos). (La grabación de video, sin embargo, parece ser más para beneficio y disfrute personal de Tomoyo que para Sakura). Tomoyo mantiene fielmente el secreto de la nueva identidad de Sakura y a menudo la cubre en tiempos de necesidad.",
  },
  {
    id: 4,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Kero.png",
    name: "Kero / Kerberos",
    title: "ケ ル ベ ロ ス",
    details:
      "Por naturaleza, Kerberos es mandón, exigente y glotón, pero también se preocupa genuinamente por Sakura y cree que ella se convertirá en la próxima Maestra del Clow, ya que él actúa como su guía para reunir las Cartas. Él es el responsable de darle a Sakura la Vara de Sellado, habiéndola designado para que sea ella quien recupere las Cartas que, sin saberlo, lanzó. ",
  },
  {
    id: 5,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Yue.png",
    name: "Yue",
    title: "月",
    details:
      "En el exterior, actúa frío, distante, y es mucho más serio e intimidante que su homólogo Kerberos. Sin embargo, se reveló que todavía tiene un corazón amable. Compartió un vínculo especial con Clow Reed que le dificultó aceptar a Sakura Kinomoto como un reemplazo para su creador durante el Juicio Final. Aunque, Sakura logra abrirse camino en su corazón como un querido amigo. Yue estaba en una relación íntima bastante fuerte y cercana con Clow Reed. Clow Reed había esperado que Yue se enamorara de Sakura y viceversa, pero pronto vio que estaba equivocado en su suposición, ya que Sakura ama a Syaoran Li, y Yukito está enamorado de Toya.",
  },
  {
    id: 6,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Yuna-Kaito.png",
    name: "Yuna D. Kaito",
    title: "",
    details:
      "Yuna es alto, de cabello oscuro y viste un uniforme formal completo, incluido un inusual reloj de bolsillo que aprecia mucho.A partir del Capítulo 15 en el arco de Clear Card, Yuna parece ser bastante cortés y casi un poco despistado. Sin embargo, su nombre según comenta Eriol lleva una D. la cual sirve para indicar que se trata de un mago muy poderoso. Con la ayuda de su reloj de bolsillo y un hechizo, Yuna puede retrasar el paso del tiempo, afectando a cualquier persona dentro del área sobre la que desee volver el tiempo. Las personas afectadas se olvidarán de todo lo que Yuna haya dicho o hecho en esos pocos minutos, lo que permitirá a Yuna reescribir el presente.",
  },
  {
    id: 7,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Akiho.png",
    name: "Akiho Shinomoto",
    title: "詩 之 本 秋 穂",
    details:
      "Akiho es tímida, al principio no mostró ser muy sociable, pero cuando Sakura se hizo su amiga, se volvió más abierta a relacionarse con otros. Al igual que Sakura, ella se muestra muy alegre y amistosa, como se aprecia durante el almuerzo con los amigos de Sakura. Finalmente, ella se convierte rápidamente en amiga de Sakura el mismo día de conocerla. Además, también puede ser bastante crédula, ya que creía en las mentiras de Takashi Yamazaki, para irritación de Chiharu, señalando cómo las mentiras ya no tenían sentido.",
  },
  {
    id: 8,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Touya-Kinomoto.png",
    name: "Touya Kinomoto",
    title: "木 之 本 桃 矢",
    details:
      "A menudo está trabajando, y en un momento de la serie Sakura y Yukito Tsukishiro se encuentran con él mientras está en el trabajo, lo que realmente puede suceder prácticamente en cualquier lugar (dado que tiene muchos trabajos diferentes a lo largo del anime). Más tarde se descubre que la razón de sus muchos trabajos es que para poder pagar la universidad por su cuenta. También se da a entender que la razón por la que se encontraba contra Sakura todo el tiempo no era solo una mera coincidencia, sino que a veces pudo haber sido de forma deliberada. Él es similar a su padre, que también es bueno en la cocina, amable, atlético y ayuda con el trabajo doméstico. Al igual que Yukito, también es muy popular entre las chicas. En el episodio 14, las chicas de secundaria se preguntan por qué no tiene novia y rechazan a las chicas que se les confiesan.",
  },
  {
    id: 9,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Yukito-Tsukishiro.png",
    name: "Yukito Tsukishiro",
    title: "月 城 雪 兎",
    details:
      "Yukito es el mejor amigo e interés amoroso de Touya Kinomoto y, en un principio, es objeto de afecto de Sakura Kinomoto. Syaoran Li se enamora de él por un tiempo, que se basa en su atracción subconsciente a la magia de Yue. La sonrisa casi omnipresente de Yukito es evidencia de su naturaleza amable y gentil. Yukito también ama la comida y tiene un apetito enorme. Sin embargo, en la tercera temporada se menciona que la verdadera forma de Yukito, Yue, es incapaz de comer. Esto sugiere que la razón por la cual Yukito tiene un apetito tan grande es porque está comiendo por dos. Cerca del final de la serie, se muestra que Yue está perdiendo su poder y hay una gran posibilidad de que desaparezca, por lo que Yukito tiene que comer cinco veces más de lo normal. Yukito dijo como, como y como y como, pero nunca estoy lleno y se siente muy frágil, lo cual es una gran preocupación para la supervivencia no solo de Yue sino del propio Yukito.",
  },
  {
    id: 10,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Momo.png",
    name: "Momo",
    title: "",
    details:
      "Momo es una coneja blanca con una bufanda azul claro alrededor del cuello. Sus ojos son completos como Takashi Yamazaki. Tiene un lunar debajo del ojo izquierdo y lleva una joya dorada como una corona o un reloj en su oreja derecha.Hasta ahora, la única ocasión en que se ha visto a Momo hablar y moverse libremente deja entrever apenas unos pocos rasgos de su personalidad. Se sabe, por ejemplo, que tiene una actitud refinada y elegante para comportarse y hablar en casi todo momento; también que, por lo visto, es bastante sensible incluso en su falsa identidad, porque, pese a estar acostumbrada a fingir ser un muñeco común y corriente en público, cuando llega el momento en que se encuentra sola, o únicamente en compañía de individuos de confianza para ella, se queja abiertamente de lo mucho que le cansa verse obligada constantemente a hacer el papel de muñeco común y corriente.",
  },
  {
    id: 11,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Meilin-Li.png",
    name: "Meilin Li",
    title: "李 苺 鈴",
    details:
      "Meiling es bien intencionada a pesar de su inmadurez, y devoto a pesar de su actitud temeraria. Su visión de Sakura cambia de rival a apreciada amiga a medida que avanza la serie. Cuando vuelve brevemente a Tomoeda, reconoce a Sakura como la persona que ama a Syaoran Li. Meiling pasa la noche en la casa de Tomoyo Daidōji después de que cancelaron su compromiso de liberar toda su tristeza a través de muchos gritos y lágrimas sin agobiar a Syaoran. Este momento muestra no solo cuánto ha madurado Meiling, sino también cuánto se preocupa por él, ya que ella renuncia a lo que ha amado la mayor parte de su vida para que sea feliz. Aunque Meiling tiene el corazón roto, ella apoya y ayuda a progresar en la relación de Sakura y Syaoran, por amor a sus dos queridos amigos.",
  },
  {
    id: 12,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Eriol-Hiiragizawa-1.png",
    name: "Eriol Hiiragizawa",
    title: "柊 沢 エ エ オ オ",
    details:
      "A pesar de su apariencia, Eriol no es realmente un niño. Él ha detenido su envejecimiento para acercarse a Sakura. Su edad real es desconocida, excepto que tiene más o menos la edad del padre de Sakura. La experiencia de la vida de Eriol, con su acceso a los recuerdos de Clow Reed, significa que él es significativamente más informado y más maduro que todos sus compañeros de clase. Él es experto en baloncesto, cocina, académicos, piano y arte. Él es más alfabetizado en la escritura japonesa de lo que es Syaoran, a pesar de venir de un país que usa un sistema de escritura completamente diferente",
  },
  {
    id: 13,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Eriol-Hiiragizawa-1.png",
    name: "Eriol Hiiragizawa",
    title: "柊 沢 エ エ オ オ",
    details:
      "A pesar de su apariencia, Eriol no es realmente un niño. Él ha detenido su envejecimiento para acercarse a Sakura. Su edad real es desconocida, excepto que tiene más o menos la edad del padre de Sakura. La experiencia de la vida de Eriol, con su acceso a los recuerdos de Clow Reed, significa que él es significativamente más informado y más maduro que todos sus compañeros de clase. Él es experto en baloncesto, cocina, académicos, piano y arte. Él es más alfabetizado en la escritura japonesa de lo que es Syaoran, a pesar de venir de un país que usa un sistema de escritura completamente diferente",
  },
  {
    id: 14,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/Fujitaka-Kinomoto-1.png",
    name: "Fujitaka Kinomoto",
    title: "木 之 本 藤 隆",
    details:
      "Fujitaka es el padre de Sakura Kinomoto (Sakura Avalon en Cardcaptors) y Toya Kinomoto (Tori Avalon). A pesar de su trabajo muy ocupado como profesor universitario de arqueología en la Universidad de Towa, todavía encuentra tiempo para sus hijos cada vez que puede. Él es etiquetado como un hombre perfecto; cocina y cose muy bien, lo que Toya a veces también hace. Él también hizo el cheongsam de Sakura. Sus hijos lo aman mucho y tratan de ayudarlo tanto como pueden, a menudo rotando deberes en casa. Él es retratado como un hombre extremadamente amable y afectuoso, que nunca se ha visto enojado o molesto por nada en absoluto. Incluso cuando Sakura destruyó su computadora portátil que tenía su trabajo almacenado mientras intentaba capturar la tarjeta Sleep.",
  },
  {
    id: 15,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/04/Spinel-Sun.png",
    name: "Spinel Sun",
    title: "ス ピ サ サ · サ サ",
    details:
      "Spinel es uno de los guardianes de Eriol Hiiragizawa, diseñado para ser la contraparte de Cerberus, pero son completamente diferentes. Mientras que Cerberus tiende a ser activo, enérgico y pasa los días jugando videojuegos, Spinel es tranquilo y refinado, pasando gran parte de su tiempo leyendo mientras odia los ruidos fuertes. Aunque tienden a discutir mucho, su vínculo es el de los amigos.",
  },
  {
    id: 16,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/03/864864868.png",
    name: "Kaho Mizuki",
    title: "観 月 歌 帆",
    details:
      "Mizuki es Amable, cálida, serena y madura, es paciente, educada, calmada, equilibrada y elegante. En sus primeras apariciones, se le apareció como misteriosa y enigmática, aunque genuinamente alegre y amable, y aparentemente albergando una motivación desconocida, alimentando el escepticismo inicial y la desconfianza de Syaoran Li hacia ella.",
  },
  {
    id: 17,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/04/Clow-Reed.png",
    name: "Clow Reed",
    title: "ク ロ リ · リ ー リ",
    details:
      "Se sabía muy poco sobre Clow Reed y su pasado. Nació de una madre china y un padre inglés, ambos eran magos extremadamente poderosos y, debido a la mezcla de magia oriental y occidental que recibió en su sangre, Clow creció hasta convertirse en el mago más grande y poderoso del mundo. conocido. En el manga, Kerberos reveló que Clow Reed había vivido durante cientos de años sin que su poder se debilitara.",
  },
  {
    id: 18,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/05/personajes-sakura.png",
    name: "Nadeshiko Kinomoto",
    title: "木之本 撫子",
    details:
      "Nadeshiko era una mujer de renombrada belleza, la cual le permitió trabajar como modelo desde muy joven. Ella era de estatura promedio, tenía la piel blanca como la nieve y cabello largo y plateado. Nadeshiko aparece como un espíritu con un vestido blanco que fluye luciendo en ocasiones un par de alas blancas.",
  },
  {
    id: 19,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/04/Nakuru-Akizuki_Ruby-Moon.png",
    name: "Nakuru Akizuki / Ruby Moon",
    title: "ル ビ ム · ム ー ム",
    details:
      "Cuando Eriol Hiiragizawa se transfiere a la Primaria Tomoeda, Ruby Moon adopta la forma de Nakuru Akizuki y se matricula en Seijou High School en la misma clase que Toya Kinomoto y Yukito Tsukishiro . Una vez allí, se convierte en una molestia general, abrazar a Toya constantemente e interrumpir las conversaciones de Toya y Yukito. También se burla de Yukito cuando Toya no está presente y comenta que los modelos más antiguos nunca pueden competir con los nuevos. Es una saltadora muy hábil, ya que salta por todos lados y puede saltar desde edificios altos y largas distancias.",
  },
  {
    id: 20,
    image:
      "https://cardcaptorsakurafans.com/wp-content/uploads/2018/05/Masaki-Amamiya-personaje.png",
    name: "Masaki Amamiya",
    title: "雨 宮 真 嬉",
    details:
      "Masaki Amamiya es el bisabuelo de Sakura Kinomoto por parte de su madre. Inicialmente se opuso al matrimonio de Nadeshiko con Fujitaka Kinomoto, se hizo más conciliador al conocer a Sakura y más tarde recibir un regalo de ella como una forma de paz entre los miembros de la familia.",
  },
];

export default persons;
