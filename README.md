# AvaliacaoDeEstagio

Essa aplicação consiste em uma tela de login e outra de cadastro. O usuário faz os devidos trâmites e ao submeter os campos preenchidos o código de fundo avalia e envia (ou não) para o banco.

## Front end

### Esqueleto das páginas:

A construção de ambas as páginas foi feita com um header, divs para facilitar o posicionamento dos elementos na página e um footer como mantenedor de um rodapé simples. Os traços e posicionamentos foram baseados no template enviado como sugestão pelos avaliadores.No header temos um h1 para capturar o texto com o nome da PGE e duas divs que guardam links para as telas de cadastro e login.

Ao centro do site, logo abaixo do header, temos uma div guardando o formulário e um button para a submissão final. Além disso, dentro do form, ainda temos dois inputs e um span guardando o texto sugerindo e indicando a submissão do LOGIN. Na página de cadastro, por sua vez, foi utilizado o mesmo raciocínio, apenas com a diferença dos textos sugerindo o CADASTRO e não login de usuário.

Em seguida, para finalizar, é possível ver o rodapé da pagina. Foi utilizada a tag footer para guardar as informações finais. Nela, temos uma imagem de um dos brasões utilizados no estado situado ao final no canto direito.

### Estilização das páginas:

Como a estilização foi quase que exatamente a mesma, então pode-se abstrair para uma explicação só como padrão. A página recebeu um margin e border 0, o body um width de 100% com a fonte padrão "'Open Sans', sans-serif".

No header, foi utilizado como padrão o "display: block", além de uma altura definida como 80 pixels. As bordas estão sólidas, sendo que a borda inferior recebeu a cor preta e uma largura de 1 pixel para visualização e separação nítida do que seria o header e o resto da página. Já dentro do header, todas as informações estão inline-block, para que ficassem uma ao lado da outra. A estilização do H1 seguiu o padrão do body, apenas com um afastamento do preenchimento esquerdo do header. Logo depois, ao lado direito do texto, temos uma div cujo único intuito é fazer a separação do h1 com os links de login e cadastro.

Nos links de login e cadastro, a estilização foi a mesma. Bordas sólidas e com o radius circular ao redor, espaçadas de acordo com o posicionamento desejado. Ainda nelas, foi inserido o "hover", que permitiu a mudança de cor no momento em que o cursor do mouse passa por cima.

Em seguida, já fora do header, é possível ver a div que segura e amarra o formulário. Seu único intuito é dar posicionamento e forma às caixas de preenchimento (inputs) e ao botão de submissão. Cadas um desses elementos internos segue com o mesmo padrão de estilização dentro da div maior. A unica diferença entre os três é o background da estilização e a largura dos inputs que é diferente da do botão.

já no footer da página, é possível ver o rodapé com a borda superior sólida e com largura de 0.5 pixels, além de uma margem do topo para forçá-lo a ser o último elemento da página. Dentro dele há também uma imagem com altura e largura de 80 pixels e um padding considerável à esquerda da página.

### Observações (coisas que eu procuraria melhorar):

A página precisa ser adaptável para todos os formatos de tela, portanto eu procuraria melhorar esse quesito. Por seguir os padrões de sites como o sigaa, ele necessita ser arrastada para os lados para uma visualização completa. Talvez isso não seja tão evidente agora, mas numa página com muitas informações isso pode ser prejudicial.

Além disso, o form não aceitou a função "onsubmit", para que quando o input type submit fosse clicado ele acionasse a função que entrega o formulario para o banco de dados. Por causa disso, fui forçado a fazer o botão de submissão.

## Back end

### Cadastro js

Antes de qualquer coisa, o banco é criado e acessado por meio da variável "db". Se já existir, ele será apenas acessado e chamado através da variável "db". Em seguida, quando o formulário é preenchido e submetido, a função capturar lê e armazena os campos do form, imprime no console para avaliação do programador e então é chamado o método transaction dentro da variável db, para que dentro de seus agumentos fosse chamada a arrow function com o "executeSql". A função executeSql, por sua vez, chama o comando sql em cima da variável que armazena o email digitado pelo usuário, um vetor objeto para armezenar o resultado e uma outra arrow function que chama o resultado anterior para dentro da variável "results" e então acessar o método de retorno da executeSql "result.rows".

Dentro do retorno da última função citada, o "result.rows" vem dentro da função "teste". Uma das propriedades desse parâmetro (result.rows), já que vem como um vetor objeto, é seu tamanho. Sendo assim, a função teste verifica se o tamanho foi maior q zero, pois isso significa que o comando Sql deu retorno e o email de fato já existe. Nesse caso, o form é apagado e uma caixa de alerta é dada ao usuário o informando que o email cadastrado já existe. Entretanto, se o tamanho do result.rows for menor ou igual a zero, isso significa que o comando Sql não deu retorno e aquele email pode ser inserido por meio de um comando Sql em cima da variável "db". Depois do cadastro, uma caixa alert é jogada na tela para informar que o email foi cadastrado com sucesso.

### Login js

Assim como no capturar, o banco é criado e acessado por meio da variável "db". Se já existir, ele será apenas acessado e chamado através da variável "db". Em seguida, quando o formulário é preenchido e submetido, a função capturar lê e armazena os campos do form em variáveis. Feito isso, novamente é chamado o método transaction dentro da variável db, também é chamada a arrow functions que roda o executeSql com o comando que acessa tanto email como senha na tabela. Alé disso, a função executeSql chama também o vetor objeto e outra arrow function que armazena o resultado na variável result dentro da função "testa".

A função testa segue o mesmo raciocício de verificação que a função "teste" do cadastro js, com a diferença de que nos argumentos ela traz o email e a senha. Caso o "result.rows" seja menor ou igual a zero, significa que o comando sql não retornou nada. Ou seja, o acesso está incorreto. Nesse caso, uma tela de alert é lançada para o usuário informando que o acesso está incorreto. Caso contrário, um novo result e um novo executeSql é lançado para a função "testaSenha" com o untuido de verificar a senha digitada.

O comando Sql da função capturar retorna o email e a senha, mesmo que a senha não tenha sido digitada exatamente como ela é. Por causa disso, a função "testa" faz essa verificação extra executando um comando Sql para retornar a senha e conferir se o usuário digitou corretamente. Tal função funciona da mesma forma que as outras arrow functions, com a diferença de que o resultado é jogado para a função "testaSenha", e lá é feita a verificação se o retorno é maior que 0 (o caso do alert informando que o usuário logou com sucesso) ou se o resultado foi menor ou igual a zero (onde é lançado o alert infromando que a senha está incorreta).

### Observações (coisas que eu procuraria melhorar):

A aplicação não é de fato uma API robusta, portanto é limitada ao que foi programada para fazer e bastante manual. Caso fose de fato uma API robusta, poderia ser acessada de fato a tela do usuário com os acessos daquele usuário em específico com outras tantas diversas opções de implementação. Entretando, a aplicação só avalia de fato o login e o cadastro do usuário.

## Banco de dados

Para facilitar a instalação das dependências e também a avaliação dessa parte do projeto, foram utilizados comandos MySQL no webSql. Antes de qualquer coisa, foi criado o banco chamado "MeuBanco" que contém uma tabela chamada users. Nessa tabela foram criados os campos de identificação, de email e de senha no tipo text. E nesse banco serão feitas as pesquisas e inserções, caso sejam necessárias.

Os comandos utilizados no Cadastro js foram esses:

- "CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)", para criar a tabela ou apenas acessá-la caso já tenha sido criada;
- "select email from users where email='%email%'", para ver se o email existe na tabela;
- "INSERT INTO users (email, senha) VALUES (email, senha)", para adicionar na tabela os emails cadastrados.

Os comandos utilizados no Login js foram esses:

- "CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)", para criar a tabela ou apenas acessá-la caso já tenha sido criada;
- "SELECT email, senha FROM users WHERE (email LIKE '%email%') AND (senha LIKE '%senha%')", para ver se o email e a senha digitadas estão na tabela;
- "select senha from users where senha='senha'", para ver se a senha digitada está de fato na tabela.

### Observações (coisas que eu procuraria melhorar):

A criação de um banco robusto de fato, onde eu pudesse armazenar mais informações do usuário (como cpf, email de recuperação, número para resgate) e mais testes pudessem ser realizados.
