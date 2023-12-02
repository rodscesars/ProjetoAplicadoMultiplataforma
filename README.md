
<h1 align="center">Transport Unifor</h1>

<p align="center">Aplicação desenvolvida para a disciplina de Projeto Aplicado de Multiplataformas Etapa 2 do curso de Análise e Desenvolvimento de Sistemas da UNIFOR</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-tecnologias">Implementação e Feedbacks</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

<p align="center">
  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/4c23b2f3-e8f0-42ee-890d-2692c14959ff" width="200px">
</p>



O TransportUnifor - é uma forma de conectar os alunos e funcionários com os carrinhos de transporte que fazem rotas internas no campus da Univerdade de Fortaleza. Atualmente
não existe um meio informativo em tempo real do tipo de transporte, localização e percurso, de forma que possa beneficiar o acesso dos usuários às possíveis rotas.

A fim de baretear os custos, foi pensado em uma aplicação mobile utilizada pelos motoristas, que compartilhe a localização em tempo real do dispositivo e consequentemente do automóvel
para um servidor.

---

## ⚙️ Funcionalidades

- [x] Motoristas podem se cadastrar na aplicação enviando:
  - [x] email
  - [x] senha

- [x] Ao logar, os motoristas podem:
  - [x] cadastrar um veículo
  - [x] selecionar véiculo 
  - [x] iniciar o compartilhamento da localização
  - [x] encerrar o compartilhamento da localização
  - [x] finalizar rota
  - [x] deslogar

---

## 🎨 Layout

<p align="center">
  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/500e92b6-f83a-4f6d-813f-e15aff2ebf58" width="200px">

  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/9c8c47eb-b224-495c-87b9-10a27d4ffc1f" width="200px">

  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/0fa030e1-19ca-4580-8314-f7784db6ca1e" width="200px">

  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/5f25cf83-3792-437a-994a-e86efa56de54" width="200px">

  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/f7827384-6478-4510-a273-b90d944e06cc" width="200px">

  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/3a0eeabf-274c-41e9-82d4-908744790f5d" width="200px">
  
  <img alt="" title="" src="https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/f8ebcb84-2ae3-419d-ae7a-4678375a2c5c" width="200px">

</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend 
2. Websocket
3. Mobile 

💡A aplicação Frontend precisa que o Backend esteja sendo executado para funcionar e o Websocket para compartilhar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Para testar em desenvolvimento é interessante instalar o aplicativo [ExpoGo](https://expo.dev/) no seu dispositivo

É necessário instalar a ferramenta ngrok no terminal de comando. Uma forma simples,
é através do gerenciador de pacotes homebrew (https://formulae.brew.sh/cask/ngrok)

#### 🎲 Rodando o Backend (servidor)

É preciso criar um cluster. Um banco de dados MongoDB em cloud gratuito que é fornecido pelo ambiente do [Atlas](https://www.mongodb.com/cloud/atlas/register)

Ao criar a sua database, você pode compartilhar a sua URL de conexão com as devidas credenciais de acesso e adicionar a uma variável de ambiente chamada
DATABASE em um arquivo .env na raiz do projeto TransportUniforServer. Também adicione a variável PORT = 3000.

```bash

# Clone este repositório
$ git clone https://github.com/rodscesars/ProjetoAplicadoMultiplataforma.git

# Acesse a pasta TransportUniforServer
# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000

#Abra um túnel seguro
$ ngrok http 3000

#Salve a URL gerada, ela tem um tempo de expiração

```

#### 🎲 Rodando o WebSocket (servidor)

```bash

# Acesse a pasta TransportUniforSocket
# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:8080

```

#### 🧭 Rodando a aplicação (MOBILE)

Copie a URL gerada pelo ngrok salva anteriormente e substitua a URL que existe no arquivo tracker.js dentro da pasta API.
Existe uma funcionalidade de mockar a localização do dispositivo, simulando um deslocamento. Caso queira utilizar a localização real
do dispositivo, comentar os linhas de código em que mockLocation está sendo utilizado.

```bash

# Acesse a pasta TransportUniforApp
# Instale as dependências (devido algumas interações entre as bibliotecas, a maioria está desatualizada, então force a instalação)
$ npm install --force

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O Expo CLI inicia um servidor de desenvolvimento que serve como um ponto de acesso para o seu aplicativo durante o desenvolvimento. A aplicação será aberta na porta:8081

# Um QR code é gerado para que você possa escanear usando o aplicativo Expo Go no seu dispositivo físico. Também é possível rodar a aplicação em simuladores.

```

---

Para gerar uma release de produção o Expo fornece as ferramentas necessárias para
realizar o build para as plataformas iOS e Android. (https://docs.expo.dev/build/setup/)

OBS: É necessário investimento para fazer o deploy dos servidores em nuvem.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Socket.io](https://github.com/socketio/socket.io)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)**
-   **[bcrypt](https://github.com/pyca/bcrypt)**
-   **[mongoose](https://github.com/Automattic/mongoose)**


#### **Mobile**  ([React Native](http://www.reactnative.com/))

-   **[Expo](https://expo.io/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**


---

## 🤳🏻 Implementação e Feedback

A aplicação foi testada e apresentada para alunos da Unifor e de outras universidades, onde foi aplicado um questionário de satisfação, realizada entrevista e coletado os feedbacks.
Os resultados foram enviados para a avaliação do professor.
Deixa a sugestão para desenvolvimento de uma aplicação para o usuário à parte, que se conecte ao servidor websocket recebendo a localização do motorista, de acordo com os seguintes protótipos.

![horarios](https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/2e346f30-1111-4833-a4cd-373af372afbb)

![onibus](https://github.com/rodscesars/ProjetoAplicadoMultiplataforma/assets/67443869/e8c798f4-cd2f-454d-96cb-c0e3e4085e83)


## 🦸 Autor

 <sub><b>Rodrigo Mendes 🚀</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Rodrigo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rodrigo-mendes-dev/)](https://www.linkedin.com/in/rodrigo-mendes-dev/) 


---

