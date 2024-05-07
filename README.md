<pre>
Aluno: Nícolas Vítor Carvalho de Oliveira
Professor: Fabrício Dias
Curso: Engenharia de Software
Turma: B
Matrícula: 202212291

PROCESSO:
O que já havia sido feito pelo professor:
Schema,
Conexão com o banco,
CRU (Create, Read and Update)
O que faltava:
I1 -> D (Delete)
I2 ->A criação de uma página HTML reconhecida pelo express
I3 -> Criação de um formulário que verifica se o usuário existe no banco de dados; se sim, redireciona para a URL do Flask
I4 -> A criação de um servidor Flask

Soluções:
I1: Para a operação de Delete, é necessário ter como parâmetro da requisição, na URL, o userId. Com o userId em mãos, será verificado se o usuário existe, através de uma query ao banco de dados. Caso o usuário exista, ele será deletado por essa mesma query; caso não exista, será enviado o status 404 com a mensagem de usuário não encontrado.

I2: Para que a página HTML seja reconhecida pelo Express, foi criada uma pasta chamada "views", nela contendo o arquivo "index.html". No arquivo "main.js", é importada a biblioteca chamada "path", que deve ser previamente instalada pelo comando "npm install path", e junto com o middleware express.static(caminho_para_a_pasta_views), o "index.html" agora pode ser identificado.

I3: Dentro do arquivo "index.html" foi criado um formulário, que utiliza o método post, com os campos para usuário, que deve colocar seu e-mail, e para senha. No arquivo "main.js", utilizarei o método post, o mesmo do formulário, na rota "/". Com o envio do formulário, recuperarei o usuário e a senha do corpo da requisição, que no caso é o corpo do formulário. Verificarei se o usuário existe. Caso exista, ele será enviado para a URL do Flask; caso não exista, será enviada a mensagem de usuário não encontrado. Se ocorrer outro erro, será enviado o status 500 juntamente com a mensagem de erro.

I4: Foi utilizado de base o projeto passado, também entregue ao professor Fabrício.
</pre>
