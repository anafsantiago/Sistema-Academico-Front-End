# Sistema-Academico-Front-End

1. Introdução
O sistema de gestão acadêmica foi desenvolvido para administrar instituições de ensino, proporcionando uma única plataforma integrada e eficiente para gerenciar estudantes, professores, gestores, cursos, notas, matrículas e relatórios acadêmicos. Permitindo que alunos, professores e gestores interajam de maneira mais fluída e organizada.


3. Requisitos do Sistema
Requisitos funcionais
• Gestão de Alunos:
  o Cadastro de alunos, com dados pessoais e histórico acadêmico.
  o Edição e atualização de dados cadastrais.
  o Exibição de notas e frequências dos alunos.



  •Gestão de Cursos:
    o O sistema deve possibilitar a criação e gerenciamento de turmas, com alocação de professores e alunos.
    o O sistema deve permitir o registro e acompanhamento da frequência dos alunos em cada turma.
    o Atribuição de professores a cursos.
    o Definição de carga horária e disciplinas.


  •Matrículas:
    o O sistema deve permitir a gestão de matrículas, associando alunos a disciplinas ou turmas específicas.
    o Matrícula de alunos em disciplinas.
    o Controle de vagas e disponibilidades.
    o Geração de históricos acadêmicos e registros de notas.
  

  • Avaliações:
    o Cadastro e controle de avaliações.
    o Lançamento de notas.
    o Cálculo de médias e preparação de boletins.


3. Requisitos não funcionais
  • O sistema deve ser acessível via web, compatível com os principais navegadores (Chrome, Edge, Safari).
  • O sistema deve suportar até 10.000 acessos simultâneos sem degradação significativa no desempenho.
  • O sistema deve ser responsivo, adaptando-se a dispositivos móveis.
  • O sistema deve estar disponível 99,9% do tempo, com capacidade de recuperação automática em caso de falhas.
  • O tempo de resposta do sistema para operações comuns, como login e consulta de turmas, não deve exceder 2 segundos.

  
5. Arquitetura do Sistema
A arquitetura do Sistema de Gestão Acadêmica segue um modelo cliente-servidor, com três camadas principais:
Camada de Apresentação (Frontend): Responsável pela interface de usuário, desenvolvida com Angular.
Camada de Lógica de Negócios (Backend): Responsável pela lógica do sistema, feita com Java SpringBoot 3 e conectada a um banco de dados relacional.
Camada de Banco de Dados: Utiliza PostgreSQL para armazenamento de dados.
Diagrama de Casos de Uso
Um diagrama de casos de uso ilustra as interações principais do usuário com o sistema. Exemplos de casos de uso podem incluir:
  • Usuário: Discente, Docente, Gestor.
  • Ações: Cadastro de aluno, professores e gestor, matrícula em disciplina, lançamento de notas, boletins e gerenciamento de alunos e professores.

  
6. Modelagem de Dados
O sistema usa um banco de dados relacional PostgreSQL com as seguintes tabelas principais:
  • Discente: armazena dados pessoais, histórico e status de matrícula.
  • Cursos: contém informações sobre as disciplinas e carga horária.
  • Docente: dados pessoais, 
  • Matrículas: controle das matrículas de alunos nas disciplinas.
  • Gestor: dados pessoais, controle de professores e alunos
  • Avaliações: registros de avaliações realizadas, com notas atribuídas.

7. Configuração
•  Certifique-se de ter instalado na sua máquina o Java na JDK (17), SpringBoot (3), NodeJS, Angular (17) e PostgreSQL instalados na máquina.
  • Clonar o repositório na sua máquina local. 
  • Abra o projeto no Intelij, ou em qualquer editor de código da sua preferência.
  • Certifique-se de configurar corretamente a string de conexão e o nome do banco de dados no arquivo. 
  • Executar o projeto.
