# FrontEnd do projeto de Esteira de análise

Esta interface tem como objetivo atuar como aplicação web que permite os responsáveis pelo maquinário da esteira de análise acessarem informações como: quantidades de análises realizadas, quantidades de placas aceitas e recusadas, informações a respeito do forno e a configuração de uma funcionalidade da IA.

# Apresentação do produto

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/ix3fNvBvvO8)

## Ferramentas utilizadas

* [React.js](https://reactjs.org/)
* [MUI](https://mui.com/pt/)
* [Styled components](https://styled-components.com/)
* [React Google Charts](https://www.react-google-charts.com/)
* [Testing library](https://testing-library.com/)

## Como executar

### Dependências necessárias

Para executar o projeto há dois modos possíveis:

* O primeiro você pode optar por instalar o [docker](https://docs.docker.com/) e o [docker](https://docs.docker.com/compose/install/) em sua máquina.

* O segundo modo é realizando a instalação do [Node](https://nodejs.org/en/) e do [NPM](https://docs.npmjs.com/getting-started/) em sua máquina.

Após realizar essa instalação apenas siga os comandos de execução abordados logo abaixo.

### Utilizando docker-compose

Uma forma fácil de utilizar o projeto é utilizando [docker-compose](https://docs.docker.com/compose/install/).
Para isso apenas use o comando abaixo

```bash
 docker-compose up --build
```

### Utilizando npm

Outra forma fácil de utilizar o projeto é utilizando [NPM](https://docs.npmjs.com/getting-started/).
Para isso apenas use os comandos abaixo

* Instale as dependências 

```bash
 npm install
```

* Execute o projeto
```bash
 npm start
```

## Rodando em sua máquina local

Após seguir os comandos anteriores, o frontend estará rodando em sua máquina na porta 3000, desse modo apenas abra [http://localhost:3000](http://localhost:3000) para poder visualizá-la em seu navegador padrão.

## Rodando os testes

Uma forma fácil de executar os testes automatizados é simplesmente utilizando o [NPM](https://docs.npmjs.com/getting-started/) novamente.
Para isso apenas use os comandos abaixo

* Execute o comando

```bash
 npm test
```
