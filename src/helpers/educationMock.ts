import { IEducation } from '@/interfaces/api/education';

export const educationMock: IEducation[] = [
  {
    id: 1,
    institution: 'UNIASSELVI',
    title: {
      'pt-BR': 'Bacharelado em Engenharia de Software',
      'en-US': "Bachelor's Degree in Software Engineering",
    },
    startDate: '2023-03',
    finishDate: '2027-12',
    isCertificate: false,
    description: {
      'pt-BR':
        'Graduação focada nos ensinos de conceitos como: Algoritmos e Estruturas de Dados, Programação Orientada a Objetos, Banco de Dados, Engenharia de Requisitos, Testes e Garantia de Qualidade, Arquitetura de Software, Desenvolvimento Web e Mobile, DevOps e Integração Contínua, Segurança da Informação, Gerenciamento de Projetos de Software, além de disciplinas complementares de matemática, lógica, gestão e ética.',
      'en-US':
        "Bachelor's degree focused on core concepts such as Algorithms and Data Structures, Object-Oriented Programming, Databases, Requirements Engineering, Testing and Quality Assurance, Software Architecture, Web and Mobile Development, DevOps and Continuous Integration, Information Security, and Software Project Management. The program also includes complementary courses in mathematics, logic, management, and ethics.",
    },
  },
  {
    id: 2,
    institution: 'Instituto Federal de Mato Grosso do Sul',
    title: {
      'pt-BR': 'Curso Técnico em Informática integrado ao Ensino Médio',
      'en-US':
        'High School with an integrated Technical Course in Computer Science',
    },
    startDate: '2019-02',
    finishDate: '2022-12',
    isCertificate: false,
    description: {
      'pt-BR':
        'Curso técnico integrado ao ensino médio, que alia a formação geral à educação tecnológica. Durante o curso, estudei as disciplinas regulares do ensino médio, como Língua Portuguesa, Filosofia, Matemática, entre outras, integradas a uma formação técnica de qualidade na área de informática e desenvolvimento de software. Dentre as disciplinas técnicas, destaco Algoritmos, Desenvolvimento de Aplicações Mobile, Engenharia de Software, Linguagens de Programação, Sistemas Operacionais, Banco de Dados e Segurança da Informação. Ao longo desse período, também participei de atividades extracurriculares na área de Robótica, contribuindo para a construção de robôs utilizando o kit Lego Mindstorms EV3. Fui responsável, além da montagem, pelo desenvolvimento dos algoritmos de comportamento dos robôs, permitindo que realizassem percursos desafiadores de forma autônoma. Essas atividades tinham como objetivo preparar e representar o Instituto Federal de Mato Grosso do Sul (IFMS) na Olimpíada Brasileira de Robótica (OBR). Também realizei um curso de introdução à plataforma Arduino, utilizando sua IDE oficial, que emprega uma variante da linguagem C++. Nesse curso, desenvolvi circuitos eletrônicos e escrevi códigos para controlar sensores, atuadores e outros componentes, aprofundando meus conhecimentos em eletrônica aplicada e programação embarcada. Além disso, participei de ações voltadas à comunidade, ministrando aulas para crianças do ensino fundamental, com foco na introdução à lógica de programação, desenvolvimento de algoritmos e aplicação desses conceitos na robótica e eletrônica, utilizando Lego e Arduino, respectivamente.',
      'en-US':
        'Technical high school program that combines general education with technological training. During the course, I studied the regular high school subjects, such as Portuguese Language, Philosophy, Mathematics, among others, integrated with high-quality technical education in the fields of computer science and software development. Among the technical subjects, I highlight Algorithms, Mobile Application Development, Software Engineering, Programming Languages, Operating Systems, Databases, and Information Security. Throughout this period, I also participated in extracurricular activities in the field of Robotics, contributing to the construction of robots using the Lego Mindstorms EV3 kit. In addition to assembling the robots, I was responsible for developing their behavior algorithms, enabling them to autonomously complete challenging courses. These activities aimed to prepare and represent the Instituto Federal de Mato Grosso do Sul (IFMS) in the Brazilian Robotics Olympiad (OBR). I also completed an introductory course on the Arduino platform, using its official IDE, which is based on a variant of the C++ programming language. During this course, I developed electronic circuits and wrote code to control sensors, actuators, and other components, deepening my knowledge of applied electronics and embedded programming. Additionally, I participated in community outreach activities, teaching programming logic, algorithm development, and the application of these concepts in robotics and electronics to elementary school children, using Lego and Arduino platforms, respectively.',
    },
  },
  {
    id: 3,
    institution: 'EF SET',
    title: {
      'pt-BR': 'Certificado de Inglês Proficiente - Nível C2',
      'en-US': 'Proficient English Certificate - C2 Level',
    },
    url: 'https://cert.efset.org/VMgs1Y',
    startDate: '02-2022',
    finishDate: '02-2022',
    isCertificate: true,
  },
];
