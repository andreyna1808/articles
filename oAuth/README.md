# Essa aplicação é apenas para você implementar o oAuth do Github puro e simplesmente

## Como pegar o client_id

- Entre nas suas configurações do Github
- Selecione a opção Developer settings (localizado na lateral esquerda)
- Em seguida clique na opção OAuth Apps
- Aperte em New OAuth App, em seguida ele vai solicitar o nome da aplicação, a home page da url, descrição da aplicação e a url para callback...
assim que você concluir o registro será fornecido seu clientID e o cliente secret, copie eles para uma variável de ambiente
- Selecione o checkbox de Enable Device Flow e Update application

## Aplicando o oAuth na sua aplicação - Login com o github

- Instale as dependências necessárias: `npm install next-auth`
- Na pasta `pages` entre na pasta `api` (se não tiver alguma dessas pastas, adicione) e crie o arquivo `[...nextauth].js`
- Siga conforme a documentação pede: https://next-auth.js.org/getting-started/example
- Caso tenha alguma dúvida sinta-se livre para percorrer os arquivos e compreender e praticar a utilização, não compie e cole isso irá afetar seu desenvolvimento.

## Siga-me nas redes

- Github: https://github.com/andreyna1808
- Linkedin: https://www.linkedin.com/in/andreyna-carvalho-997273231/
- Instagam: https://www.instagram.com/devdrica/
- Youtube: https://www.youtube.com/c/DevDrica
- Medium https://medium.com/@andreyna.m.carvalho

## Deploy

- Link para conexão: https://oauth-dusky.vercel.app/