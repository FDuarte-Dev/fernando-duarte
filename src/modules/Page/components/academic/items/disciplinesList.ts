import { Discipline } from '../models/model';

export const FP: Discipline = {
    name: 'Fundamentals of Programming',
    description: 'To provide understanding of fundamental concepts related to programming, namely, algorithm, procedural abstraction and data abstraction, programming and construction of abstractions, programming paradigms. After completing this course, students should master the concepts presented and be able to develop programs in a high-level programming language, Python.',
    ects: 7.5,
    projects: [
        {
            name: 'Credit card generator',
            description: 'Create a card generator.'
        },
        {
            name: '2048 Game',
            description: 'Create a version of the game 2048.'
        }
    ]
}

export const IAC: Discipline = {
    name: 'Introduction to Computer Architecture',
    description: 'Students should master the basic concepts and general operation of a computer, the physical structure supporting the execution of programs. They should be able to describe the operation of the basic elements of a computer: the processor, the memory system and the input/output system, and their interactions. In particular, they should be able to understand the internal structure of a processor and the process of instruction execution.',
    ects: 7.5,
    projects: [
        {
            name: 'RoboTenis',
            description: 'Develop a game of tennis in assembly language.'
        }
    ]
}

export const IAED: Discipline = {
    name: 'Introduction to Algorithms and Data Structures',
    description: 'Learn to program using an imperative language, understanding the syntax and semantics of the language ANSI C. Learn to choose, create and use data structures suitable to the problems in question. Learn to develop iterative and recursive algorithms. Acquire notions of the complexity of the algorithms applied to solve a given problem in order to chose those that are more efficient.',
    ects: 7.5
}

export const LP: Discipline = {
    name: 'Logic for Programming',
    description: 'After the completion of the course, the students should understand what the components of a logic are, should be able to carry out proofs in the deductive system and to use the semantics. Students will be able to relate the deductive system with semantics and to prove properties about those relations. Students will understand the basis of automated reasoning and will be able to develop programs using the logic-programming paradigm.',
    ects: 7.5,
    projects: [
        {
            name: 'Puzzle of 8',
            description: 'Develop a version of puzzle of 8 game, and solving algorithms.'
        }
    ]
}

export const SO: Discipline = {
    name: 'Operating Systems',
    description: 'Learn the fundamental concepts underlying operating systems, with emphasis on the mechanisms and algorithms used, as well as the internal structure of most relevant operating systems. Program at the system level using all operating systems functionalities taking into account both the sequential and concurrent programming models.',
    ects: 6.0,
    projects: [
        {
            name: 'Par-Shell',
            description: 'Develop asynchornous programming practices on a fibonacci number calculator.'
        }
    ]
}

export const ASA: Discipline = {
    name: 'Analysis and Synthesis of Algorithms',
    description: 'Intermediate knowledge in algorithmics and complexity, preparing the students with techniques for the analysis and synthesis of algorithms and data structures. Knowledge of the fundamentals of the design and analysis of algorithms. Analyze the implementation of algorithms and data structures. Practical overview of applications of algorithms in Electrical and Computer Engineering.',
    ects: 6.0,
    projects: [
        {
            name: 'Fundamental users',
            description: 'Develop an algorithm to find the fundamental users in a communication network.'
        },
        {
            name: 'Coelho & Caracol',
            description: 'Develop an algorithm to find the most efficient path in a graph transversal.'
        }
    ]
}

export const IPM: Discipline = {
    name: 'Machine Person Interfaces',
    description: 'Understand the principles and basic rules required to design and develop usable user interfaces. Identify the users and the tasks they want to carry out with the interactive system we plan to develop. Be able to evaluate interfaces at different stages of their development, applying the most correct evaluation technique. Identify the critical factors in the design of user interfaces. Understand and apply tradeoffs between the different restrictions affecting the design of interfaces. Learn to frame the design of interfaces within the scope of computer science engineering projects.',
    ects: 7.5,
    projects: [
        {
            name: 'BarISTa',
            description: 'Develop an application to simulate a smart bar table.'
        }
    ]
}

export const BD: Discipline = {
    name: 'Data bases',
    description: 'The course introduces students to database design and analysis. The focus is on the relational model, covering the logical design of databases (schema design) and implementation, and transaction processing systems. Aspects of parallel and distributed database systems, unstructured and semi-structured data management, decision support and data mining systems will also be covered. The objective of this course is to expose the student to the basic concepts involved in designing and building a database management system, and to practical database information system design through a team based project.',
    ects: 6.0,
    projects: [
        {
            name: 'Instant Office',
            description: 'Create a databse model for an application.'
        }
    ]
}

export const CG: Discipline = {
    name: 'Computer Graphics',
    description: 'The course aims at providing students with basic knowledge of interactive 3D computer graphics. They should learn the fundamentals of representation and creation of synthetic images from three-dimensional scenes. This includes mastering geometrical transformations and understanding the 3D visualization pipeline and its main stages. As an outcome, students should be able to design and develop interactive computer graphics applications.',
    ects: 4.5,
    projects: [
        {
            name: 'Space Invader',
            description: 'Create a 3D version of the game Space Invaders.'
        }
    ]
}

export const IA: Discipline = {
    name: 'Artificial intelligence',
    description: 'The goal of this course is to introduce Artificial Intelligent, so that the student can acquire the basic knowledge in this area of Computer Science and feel motivated to pursue this area of study. The course serves also as the basis for more advanced courses in Artificial Intelligence.',
    ects: 7.5,
    projects: [
        {
            name: 'Racetrack',
            description: 'Create an agent to play the game Racetrack autonomously.'
        }
    ]
}

export const OC: Discipline = {
    name: 'Computer Organization',
    description: 'Students should acquire a comprehensive view of current computer architectures and their various components: processors, memory and input/output systems. Students should also be able to understand the constraints involved in the development of computer systems and evaluate strategies for optimizing programs taking into account the underlying computer architecture, based on performance metrics.',
    ects: 6.0
}

export const PO: Discipline = {
    name: 'Object-Oriented Programming',
    description: 'The objectives of the course are that students become familiar with the methodologies and techniques associated with: the object-oriented programming (OOP) paradigm, its advantages, disadvantages, and limitations; design patterns and their use for solving known application development and refactoring problems. Proficiency to be acquired: use of the OOP paradigm (concepts: encapsulation, abstraction, inheritance, and polymorphism); use of an OOP language: Java; use of design patterns to solve application structuring problems; writing test cases for applications.',
    ects: 6.0,
    projects: [
        {
            name: 'Program Interpretor',
            description: 'Create a program to manage a set of programs and expressions.'
        }
    ]
}

export const ES: Discipline = {
    name: 'Software Engineering',
    description: 'Presents the software development process, from requirements to maintenance. Integrates knowledge acquired in other courses into the larger context of the software development process. Presents the software development process as an Engineering activity that combines social, human and computational perspectives.',
    ects: 7.5,
    projects: [
        {
            name: 'Adventure Builder',
            description: 'Develop an leisure activity offer system.'
        }
    ]
}

export const SD: Discipline = {
    name: 'Distributed systems',
    description: 'To understand how distributed applications are developed guaranteeing non functional requirements such as reconfigurability, security, fault tolerance and scalability. Students should be able to define a distributed architecture for an application. To program distributed applications using remote procedure calls and distributed name services. To interpret security requirements, to be able to formulate policies and use mechanisms to fulfil such requirements. To analyse reliability and availability requirements, to introduce mechanisms for insuring fault tolerance in the applications.',
    ects: 7.5
}

export const RC: Discipline = {
    name: 'Computer Networks',
    description: 'To understand the rationale behind the design of computer networks, their architectures and protocols. Be conversant with the main protocols of the Internet. To be able to program network applications using the sockets interface.',
    ects: 6.0
}

export const AMS: Discipline = {
    name: 'Systems Analysis and Modeling',
    description: 'To provide the fundamental competencies for the analysis of engineering problems where the solution can be conceptualized as a system, using techniques of requirements engineering and conceptual modeling (especially UML, SysML and BPMN).',
    ects: 6.0,
    projects: [
        {
            name: 'BAIK',
            description: 'Bicicle sharing business model.'
        }
    ]
}

export const COMP: Discipline = {
    name: 'Compilers',
    description: 'Introductory course in compiler design with emphasis on deterministic language analysis and code generation, as well as the development process and its tools. Specification of lexical, syntactic and semantic analysis, using specific tools; understand the principles used by those parsers; develop a compiler that parses a given language an produces executable code; apply these concepts and tools to other related problems requiring deterministic analysis.',
    ects: 6.0,
    projects: [
        {
            name: 'Gr8 language compiler',
            description: 'Development of a compiler for a ficticious programming language gr8.'
        }
    ]
}

export const AL: Discipline = {
    name: 'Linear algebra',
    description: 'Understanding of the basics in Linear Algebra. Knowledge of vector spaces, linear transformations, Euclidean spaces, eigenvalues and eigenvectors.',
    ects: 6.0
}

export const MD: Discipline = {
    name: 'Discrete Mathematics',
    description: 'Develop rigorous mathematical reasoning. Master the mathematical concepts and tools for algorithm and procedure analysis, focusing both on correctness and efficiency.',
    ects: 7.5
}

export const MO: Discipline = {
    name: 'Mechanics and Waves',
    description: 'The principles and basic concepts of classical mechanics, wave phenomena and special relativity are presented. The understanding of those concepts will be reinforced using real world applications. The students should be able to manipulate those concepts and apply them to solve problems. The students will be motivated with examples of the application of physical principles to other areas of science and technology. The course will include laboratorial work.',
    ects: 6.0
}

export const CDI_I: Discipline = {
    name: 'Differential and Integral Calculus I',
    description: 'Understanding of the basics in mathematical analysis. Knowledge of sequences, differential and integral calculus real functions of one real variable. Introduction to numerical series.',
    ects: 6.0
}

export const EO: Discipline = {
    name: 'Electromagnetism and Optics',
    description: 'The principles and basic concepts of electromagnetism and physical optics are presented. The understanding of those concepts will be reinforced using real world applications. The students should be able to manipulate those concepts and apply them to solve problems. The students will be motivated with examples of the application of physical principles to other areas of science and technology. The course will include laboratorial work.',
    ects: 6.0
}

export const TC: Discipline = {
    name: 'Theory of Computation',
    description: 'To learn how to work with the notions of Turing machine, computation and computational resource. To understand the meaning of algorithmic and non-algorithmic "task". To know the limits to algorithmic "tasks". To understand computation as a physical-mathematical concept and not as a purely mathematical concept. To experiment concepts and techniques in interactive computational environments.',
    ects: 4.5
}

export const CDI_II: Discipline = {
    name: 'Differential and Integral Calculus II',
    description: 'Knowledge of differential and integral calculus of several real variable functions, including the basic theorems of calculus. Applications in Physics.',
    ects: 7.5
}

export const PE: Discipline = {
    name: 'Probability and Statistics',
    description: 'To learn the basic concepts in Probability Theory and Statistical Inferencce and the reasoning and calculus technics that enables its application to practcal situaptions. Other objectives: To formalize problems involving the result of random experiments. To identify the probabilistic models that apply. To calculate probabilities and moments when the model is known. To recognize the difference between a random variable and its concretization. To determine maximum likelihhood estimators.To build and understand a confidence interval.Hypothesis testing and testing for goodness of fit: procedure and decision making. To know how to apply these concepts to a simple linear regression model.',
    ects: 6.0
}

export const ACED: Discipline = {
    name: 'Complex Analysis and Differential Equations',
    description: 'Understanding of the basics in: functions of one complex variable, ordinary differential equations, Fourier analysis methods applied to the solution of partial differential equations.',
    ects: 7.5
}

export const IEI: Discipline = {
    name: 'Introduction to Computer Engineering',
    description: 'To provide the students with views of the role, the purpose and the professional practices of Information Systems and Computer Engineering in Society, in the Enterprises, in Innovation and in Research.',
    ects: 3.0
}

export const GES: Discipline = {
    name: 'Management',
    description: 'The Management course unit is taught to all 1st cycle programs of IST, and its main objective is to introduce students to a set of concepts and tools that will enable them to: • Understand the nature of the systemic and integrated functioning of organizations • Evaluate the multidisciplinary disciplines and resources necessary for the operation of organizations It is intended that students become empowered with the introduction to the skills essential to the functioning of organizations such as: Microeconomic framework, Strategic Management, Marketing, Human Resource Management, Accounting and Project Evaluation. The application of the knowledge acquired is valid for both firms in activity, and entrepreneurial projects, like start-ups resulting from Innovation & Technology Development. The Management course also aims to introduce students to the operation of businesses in the real environment, and train teamwork applying the concepts and analytical tools taught in the uc. To this it includes their participation in a business simulation - the ISTMC, in which groups of students representing companies compete in a market. The best groups are invited to integrate other business simulations up to the level of the international competition Global Management Challenge.',
    ects: 4.5
}

export const CS: Discipline = {
    name: 'Computing and Society',
    description: 'Convey to future computer science & engineering students a perspective on the enormous social impacts that ethical aspects have in the development and use of products and services based in information technology. Learn the basic foundations for making the right choices when confronted with real situations involving the development, operation and use of information systems.',
    ects: 3.0
}
