# 🔎Bootcamp Atlântico - SQUAD 09
> Este projeto foi desenvolvido durante o Bootcamp de Quality Assurance da Atlântico Avanti.
Utilizamos como base o site QAzando Shop, criado especificamente para fins de testes e automações.
A partir dele, elaboramos cenários e casos de teste manuais, que posteriormente foram automatizados utilizando o Cypress.
Antes da etapa de automação, foram produzidos relatórios detalhados de cada caso de teste, que também estão disponíveis
neste repositório para consulta e acompanhamento da evolução do projeto.

## 🎯Objetivo:
Nosso objetivo com este trabalho é colocar em prática
os conhecimentos adquiridos no bootcamp, fortalecendo as habilidades em testes manuais e automatizados, além de aprimorar a
colaboração em equipe dentro de um fluxo real de Quality Assurance.

## 🌐Tecnologias utilizadas:
- VsCode
- JavaScript
- Node.js
- Cypress

## 📝Estrutura do projeto:
```
projeto-cypress
├── cypress
│   ├── e2e
│   │   ├── lista_desejos.cy.js
│   │   └── registrar_usuario.cy.js
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── docs
│   ├── Especificação de Bugs.pdf
│   ├── Especificação de casos de teste.pdf
│   ├── Plano de testes.pdf
│   └── Relatório de Testes.pdf
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitattributes
├── README.md
└── node_modules
```

## 📖Cenários e casos de teste:
- Cadastro: (CT-Cadastro-01) - Cadastro com credenciais válidas
- Login: (CT-Login-01) - Login com credenciais válidas
- Lista de desejos: (CT-Wishlist-01) - Adicionar item à lista de desejos (wishlist)
- Carrinho de compras: (CT-Carrinho-01 - Usuário adiciona produto ao carrinho

## 🚀Para rodar o projeto:
- Pré requisitos: ter o Node.js, Git e Npm instalados na sua máquina
```
# Para verificar se já existem na sua máquina
node -v
npm -v
git --version
```
1. Clonar o projeto
```
git clone https://github.com/giuliedev/projeto-pratico-squad-09.git
```
2. Instalar dependências
```
npm install
```
3. Abrir UI do cypress e rodar os testes
```
npx cypress open
```
4. Rodar os testes em modo headless (opcional)
```
npx cypress run
```

## 👥Equipe:
- Gabriella Costa
- Giulie Ribeiro
- Luan Vilela
- Thamyres Adélia

## 💭Conclusão:
Desenvolver este projeto foi uma experiência muito enriquecedora, que nos ajudou a colocar em prática o que aprendemos sobre testes manuais e automatizados.
Trabalhar em equipe tornou o processo ainda mais produtivo e divertido, fortalecendo nossas habilidades técnicas e a colaboração entre todos.
Foi uma ótima oportunidade para entender melhor o papel do QA e a importância de garantir a qualidade em cada etapa do desenvolvimento.
