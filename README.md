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
