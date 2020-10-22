Servidor

Comunicação é sempre via texto

O que é importante é a estrutura desse texto

Um possível estrutura é o HTML



Servidor de 1 camada

Central de processamento que faz tudo -> Terminal


Servidor de 2 camadas -> Frontend e Backend

Separação entre 2 conceitos importantes:

Frontend: Exibição dos conteúdos (Isso é chamado de Lógica de Apresentação)

Backend: Lógica de negócio (tudo o que é vital para funcionamento da minha aplicação) -> é ele quem acessa o banco de dados


Servidores multicamadas

Frontend e Backend

Backend foi quebrado em diversos SERVIÇOS, ou seja, diversos sisteminhas

Microserviços -> serviços de backend pequenos, cada um com sua responsabilidade


Quais tecnologias envolvidas nesse processo?

Frontend: HTML e CSS para estruturação/visualização. JavaScript para lógica de apresentação
Backend: PHP, C#, Java, JavaScript, Python, C++, Kotlin (apenas 1 delas por serviço)
Banco de Dados: SQL ou MySQL

Como a gente troca ideia com esses 2 caras?

Frontend	 -> 	Backend
Visualização ->		Processar informação (dados) -> Criar, alterar, remover, editar


Frontend -> Requisição HTTP -> Backend recebe a requisição -> Processa a informação -> Envia uma resposta (texto)

Esse texto precisar estar estruturado de uma maneira que o frontend entenda

Paulo;Salvatore;Professor

XML, JSON

Postman

URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem

Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens

Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem

Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1

REST: GET, POST, PUT, DELETE, entre outros
RESTful: aplicação segue as boas práticas de REST (Get para leitura, Post para criação, e nomenclaturas dos endpoints)



