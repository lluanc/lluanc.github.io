(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{412:function(e,o,r){"use strict";var n=r(20),t=r(10);r(34),r(130),r(32),r(19),r(31),r(52),r(53);function d(object,e){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(n.a)(e,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(source,o))}))}return e}var l={data:function(){return{allCookies:"",cookieWanted:""}},mounted:function(){var e=this;this.$nextTick((function(){e.allCookies=document.cookie.split(";").map((function(e){return e.split("=")})).reduce((function(e,o){var r=Object(t.a)(o,2),d=r[0],l=r[1];return c(c({},e),{},Object(n.a)({},d.trim(),decodeURIComponent(l)))}),{})}))},methods:{setOrUpdateCookie:function(e,o){document.cookie="".concat(e,"=").concat(o)},checkCookieNavigation:function(e,o,r){if(this.allCookies.navigation===r)return this.setOrUpdateCookie(e,o),this.cookieWanted=o;this.setOrUpdateCookie(e,r),this.cookieWanted=r}}};o.a={mixins:[l],data:function(){return{baseUrl:"https://home.staging.convenia.site",redirectToUrl:""}},methods:{checkPreviousURL:function(e){if(this.checkCookieNavigation("navigation",this.baseUrl,e),this.cookieWanted===e)return this.redirectToUrl=e;this.redirectToUrl=this.baseUrl}}}},432:function(e,o,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("7397d0f7",content,!0,{sourceMap:!1})},433:function(e,o,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("661d8742",content,!0,{sourceMap:!1})},472:function(e,o,r){"use strict";r(432)},473:function(e,o,r){var n=r(69)(!1);n.push([e.i,'.banner-container-default{background-color:#940dff;overflow:hidden;height:345px}.banner-container-default>.content-hero{display:flex;flex-direction:column;justify-content:center;position:relative;color:#fff;padding:20px 16px 0;z-index:20;text-align:center;margin:96px auto 0;max-width:379px}.banner-container-default>.content-hero>.paragraph-box>header .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:32px;line-height:40px;margin-bottom:6px}.banner-container-default>.overlayer{width:100vw;height:345px;background-image:linear-gradient(180deg,#940dff,rgba(151,28,246,.86),rgba(151,28,246,.7) 94%,rgba(151,28,246,0) 100%,rgba(32,45,106,0) 0);position:relative;z-index:10;top:-340px}.banner-container-default>.video-container{position:relative;z-index:0;height:0}.banner-container-default>.video-container>.banner{height:870px;margin-top:clamp(-552px,-552px,-295px);overflow:hidden;position:relative}@media (min-width:768px){.banner-container-default>.content-hero{padding:0 124px;margin:116px 0 151px;max-width:none}}@media (min-width:1024px){.banner-container-default{flex-direction:row;margin-top:-80px;height:374px}.banner-container-default>.content-hero{padding:0;margin:227px auto 97px;width:974px}.banner-container-default>.content-hero>.paragraph-box{text-align:center}.banner-container-default>.content-hero>.paragraph-box>header .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:46px;line-height:57px;margin-bottom:8px}.banner-container-default>.content-hero>.paragraph-box>.paragraph{font-size:20px;line-height:32px;padding:0 24.5px;letter-spacing:-.21px}.banner-container-default>.overlayer{display:none}.banner-container-default>.video-container .banner{margin-top:-886px;overflow:hidden;width:1920px;height:1200px}}@media (min-width:1024px) and (min-width:1920px){.banner-container-default>.video-container .banner{width:100%}}.group-actions{position:absolute;right:10%;top:-500px}',""]),e.exports=n},474:function(e,o,r){"use strict";r(433)},475:function(e,o,r){var n=r(69)(!1);n.push([e.i,'.terms-container{margin:80px 20px 0;max-width:1280px}@media (min-width:768px){.terms-container{margin:80px 80px 0}}@media (min-width:1415px){.terms-container{margin:80px auto 0}}.terms-container .intro,.terms-container .paragraph-box{margin-bottom:105px;white-space:pre-line}.terms-container .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:28px;line-height:42px;color:rgba(18,30,72,.9);margin-bottom:6px}.terms-container .paragraph{font-family:"Nunito Sans",sans-serif;font-weight:400;font-size:18px;line-height:36px;color:rgba(18,30,72,.7);margin-top:16px}.terms-container .paragraph .link{word-wrap:break-word;margin-right:10px}.terms-container .-last{margin-bottom:0}',""]),e.exports=n},484:function(e,o,r){"use strict";var n={props:{urlParams:String,bannerInfo:{type:Object,hid:String,altTitleImage:String,title:String,divider:String,altTitleDivider:String,paragraph:String,imageInfo:{type:Object,hid:String,image:String,altTitleImage:String,class:String},videoInfo:{type:Object,hid:String,video:String,class:String},bullets:{type:Object,hid:String,image:String,altTitleImage:String,description:String},callToAction:{type:Object,hid:String,description:String,image:String,altTitleImage:String,linkTo:String},scrollDown:{type:Object,hid:String,image:String,altTitleImage:String,class:String}}},data:function(){return{renderVideo:!0}}},t=(r(472),r(30)),component=Object(t.a)(n,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("section",{staticClass:"banner-container-default",class:e.bannerInfo.classBanner},[r("div",{staticClass:"content-hero"},[r("c-stanza",{attrs:{"header-number":"h1","paragraph-info":e.bannerInfo}})],1),e._v(" "),e.renderVideo?r("div",{staticClass:"video-container"},[r("c-video",{attrs:{"video-info":e.bannerInfo.videoInfo}})],1):r("div",{staticClass:"video-container"},[r("image-import",{attrs:{"image-import":e.bannerInfo.imageInfo,lazy:!1}})],1)])}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{CStanza:r(392).default,CVideo:r(425).default,ImageImport:r(411).default})},485:function(e,o,r){"use strict";var n={props:{termsInfo:{type:Object,hid:String,terms:{type:Object,hid:String,title:String,divider:String,altTitleDivider:String,paragraph:String}}},methods:{hasElement:function(element){return void 0!==element}}},t=(r(474),r(30)),component=Object(t.a)(n,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("section",{staticClass:"terms-container"},[e.hasElement(e.termsInfo.update)?r("c-paragraph",{staticClass:"intro",attrs:{"paragraph-info":e.termsInfo.update}}):e._e(),e._v(" "),e._l(e.termsInfo.terms,(function(e){return r("c-stanza",{key:e.hid,attrs:{"header-number":"h3","paragraph-info":e}},[r("c-paragraph",{attrs:{"paragraph-info":e}})],1)}))],2)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{CParagraph:r(394).default,CStanza:r(392).default})},548:function(e,o,r){var content=r(830);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("1c76e060",content,!0,{sourceMap:!1})},829:function(e,o,r){"use strict";r(548)},830:function(e,o,r){var n=r(69),t=r(395),d=r(435),c=n(!1),l=t(d);c.push([e.i,'.app-container{display:grid;grid-template-columns:100%;grid-template-areas:"top" "content" "bottom";background-image:url('+l+");background-repeat:repeat-y;background-position:top 829px left 50%}@media (min-width:1024px){.app-container{background-position:top 829px left 0}}.app-container>.header{grid-area:top;position:-webkit-sticky;position:sticky;top:0;z-index:30}.app-container>.main{grid-area:content;position:relative;top:-80px}.app-container>.footer{grid-area:bottom}@media (min-width:1024px){.app-container>.footer>.footer-display{margin:0 auto 80px}}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 9px;display:none;border:3px solid transparent;border-radius:9px;background-clip:content-box}::-webkit-scrollbar-track{box-shadow:none;background:transparent;opacity:0;display:none}.-scrolling{transition:all 1s;color:rgba(123,124,127,.55)}.-scrolling::-webkit-scrollbar-thumb{border-radius:9px;display:block}.-scrolling.-not{color:transparent}",""]),e.exports=c},882:function(e,o,r){"use strict";r.r(o);var n=r(440),t=r(427),d=r(412),c=r(416),l=r(441),m=r(484),f=r(485),v={hid:"software-de-rh",title:"Termos e condições de uso",divider:"icone-underline-title-amarelo.svg",altTitleDivider:"icone ondulado amarelo",videoInfo:{hid:"video-background-banner",video:"janeiro-incrivel-banner.mp4",class:"banner"}},h={hid:"terms-use",terms:[{hid:"terms-use-1",title:"Apresentação e definições",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A PLATAFORMA CONVENIA é um software em nuvem de Gestão de Pessoas para Empresas que controlam suas rotinas de RH em Excel, aumentando sua eficiência e eliminando perdas operacionais, trabalhistas e financeiras.\n\nO CONVENIA fornece diversas funcionalidades, dentre elas:\n\n1. Processamento e gestão de departamento pessoal\n2. Cadastro e gerenciamento de benefícios\n3. Gestão de informações de folha de pagamento\n4. Gestão de ponto\n5. Gestão de férias\n6. Geração relatórios\n7. Visão para o colaborador gerenciar seus dados\n\nQuando em conjunto, estas funcionalidades serão denominadas PLATAFORMA CONVENIA.\n\nAs funcionalidades disponíveis pela CONVENIA serão acessíveis mediante o pagamento de um valor mensal, de acordo com planos e condições disponíveis no site.\n\nOs serviços poderão ser testados por 7 (sete dias) de forma gratuita, período no qual o Usuário será orientado a preparar o software para utilização da forma mais adequada.\n\nA Plataforma CONVENIA é acessível através da internet, no website www.convenia.com.br, e é de titularidade e administrada pela empresa Convenia Atividades de Internet e Corretora de Seguros SA, CNPJ 17.484.689/0001-70.\n\nOs Termos e Condições de Uso descritos neste documento são de leitura obrigatória, e aplicável a todos os serviços e sites oferecidos pela CONVENIA.\n\nSerão considerados “Usuários” todas as pessoas físicas ou jurídicas que acessarem as funcionalidades, produtos e serviços do CONVENIA.\n\nA utilizar a PLATAFORMA CONVENIA, o Usuário concorda com todos os termos, cláusulas e condições destes Termos.\n\nPáginas de Internet de terceiros e/ou a serviços e produtos fornecidos por terceiros, ainda que tenham conexão com a CONVENIA, sejam anunciados ou divulgados na Plataforma, têm termos de uso e políticas de privacidade independentes.\n\nA CONVENIA poderá alterar estes Termos a qualquer tempo, visando atualizar as alterações ocorridas na PLATAFORMA CONVENIA, e referidas alterações serão publicadas nesta página. Desta forma, recomenda-se visitar periodicamente esta página para que você tenha conhecimento sobre as modificações.\n\nCaso tenha qualquer dúvida, por favor, entre em contato conosco através dos canais indicados ao final destes Termos para esclarecer todas as suas dúvidas antes de utilizar a Plataforma."},{hid:"terms-use-2",title:"Regras de utilização",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A PLATAFORMA CONVENIA é destinada à gestão de departamento pessoal e de recursos humanos, através do qual o Usuário poderá, dentre outros:\n\n1. Organizar as informações cadastrais da empresa empregadora;\n2. Organizar e armazenar informações pessoais e profissionais de seus empregados;\n3. Administrar os dados relacionados à folha de pagamento;\n4. Comunicar e manter atualizados fornecedores de benefícios;\n5. Organizar o processo e informações relativas à admissão e desligamento de empregados.\nDentro dos Serviços disponibilizados, o Usuário poderá ainda permitir a administração de dados pessoais e profissionais pelo próprio empregado.\n\nO acesso à PLATAFORMA CONVENIA será feito através do registro de uma conta, e somente a partir da criação desta conta o Usuário terá acesso ao conteúdo da PLATAFORMA CONVENIA.\n\nAo optar por testar a PLAFORMA CONVENIA de forma gratuita, o Usuário deverá efetuar seu cadastro, acessando o site www.convenia.com.br, com a inserção dos seguintes dados: Nome, e-mail, cargo e número de colaboradores da empresa. Nesta modalidade, o Usuário poderá acessar o sistema e navegar livremente por 7 (sete) dias.\n\nAo optar pela contratação do produto, o Usuário deverá acessar o site www.convenia.com.br, preencher informações cadastrais da PESSOA JURÍDICA, tais como Razão Social, CNPJ, Endereço, etc. A contratação do plano poderá ser feita através de utilização de cartão de crédito. Ressalta-se que os dados informados do cartão NÃO são armazenados no CONVENIA, que se utiliza de provedor de serviços de pagamento denominado Vindi.\n\nFica ressalvado que a CONVENIA não será responsabilizada, nem solidária nem subsidiariamente, por qualquer prejuízo ou dano causado ao Usuário, caso haja falha no serviço prestado pelo provedor de serviços de pagamento, ou mesmo por qualquer ato intrínseco/inerente a atividade desse agente que, embora lícito, resulte em prejuízo ao Usuário.\n\nCom a criação da Conta, o Usuário identificará um Administrador, que passará a ser denominado “Administrador da Conta”, que terá responsabilidades específicas de acordo com os termos seguintes.\n\nSomente os Usuários Administradores da Conta (que serão identificados por ocasião do preenchimento das informações necessárias para se cadastrar na Plataforma) poderão ter acesso ao seu conteúdo, incluindo os sistemas, softwares, aplicativos e demais textos, fotos, imagens e vídeos, bem como a todos os serviços disponíveis, de acordo com as condições definidas nestes Termos. O conteúdo poderá ser alterado a qualquer momento, sempre com o objetivo de uma melhor prestação de serviços.\n\nO Usuário Administrador será responsável por proteger os dados de acesso de sua Conta, incluindo, mas não se limitando, ao seu login e senha de acesso, sendo o único responsável pela divulgação dos dados de acesso aos seus empregados e/ou a terceiros e, consequentemente, pela visualização do Conteúdo por terceiros não autorizados pela Plataforma CONVENIA.\n\nO Usuário Administrador declara assumir toda a responsabilidade pela veracidade, exatidão e atualidade dos dados inseridos, reconhecendo que qualquer dado ou informação falsa, inverídica, incompleta, desatualizada ou incorreta poderá induzir PLATAFORMA CONVENIA e/ou os seus Parceiros a erro."},{hid:"terms-use-3",title:"Das informações inseridas na Plataforma e do acesso",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"O Usuário Administrador da Conta é o único responsável pela inserção de todas as informações na PLATAFORMA CONVENIA, mesmo que auxiliado e/ou orientado por algum representante da CONVENIA, comprometendo-se a atualizar imediatamente seus dados cadastrais para mantê-los verdadeiros, precisos, atuais e completos.\n\nAo Usuário Administrador é permitida a inserção das seguintes informações após o cadastro no site:\n\n1. Informações de colaboradores:\n1.1. Informações cadastrais (nome, documentos, endereço, dependentes, informações bancárias, etc);\n1.2. Informações de registro (cargo, departamento, salário, # carteira de trabalho, histórico de férias, etc.);\n1.3. Cópia digitalizada dos documentos pessoais (RG, CPF, carteira de trabalho).\n2. Informações da empresa:\n2.1. Benefícios corporativos oferecidos;\n2.2. Recados para colaboradores;\n2.3. Histórico de férias de colaboradores;\n2.4. Informações de folha de pagamento.\n\nPoderá o Usuário Administrador dar acesso a qualquer colaborador para acessar SUAS próprias informações, mediante cadastro no sistema, que deverá ser feito pelo Usuário Administrador de forma individualizada.\n\nO Usuário Administrador poderá ainda, dar acesso TOTAL (Administrativo) a qualquer colaborador que desejar, criando uma conta específica para este colaborador dentro da Plataforma. Ao garantir este acesso, o colaborador poderá visualizar todas as informações inseridas no sistema.\n\nO Usuário declara assumir toda a responsabilidade pelo acesso conferido aos colaboradores, tanto para visualização de suas próprias informações, bem como nos casos de acesso TOTAL às informações, isentando a CONVENIA de qualquer responsabilidade nesse sentido.\n\nO Usuário somente terá acesso às informações de sua empresa.\n\nO colaborador cadastrado e com acesso conseguirá visualizar as seguintes informações:\n\n1. Informações cadastrais;\n2. Histórico de férias (sendo permitida a solicitação de férias através da Plataforma);\n3. Informações de registro de ponto (marcações de ponto);\n4. Holerites;\n5. Dados de colaboradores que ele é gestor (dados cadastrais, férias e ponto);\n6. Informações de benefício a que tenha direito.\n\nA CONVENIA não se responsabiliza por qualquer informação inserida na PLATAFORMA, seja pelo Usuário, pelo Usuário Administrador ou por qualquer outro ao qual o Usuário tenha dado acesso."},{hid:"terms-use-4",title:"Responsabilidades",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"O Usuário será o único responsável pela divulgação dos dados de acesso a seus empregados e/ou a terceiros e, consequentemente, pela visualização do Conteúdo por terceiros não autorizados pela CONVENIA.\n\nO Usuário concorda em não utilizar Contas de um terceiro sem autorização expressa de tal terceiro. A CONVENIA não se responsabiliza por qualquer uso do Conteúdo mediante os dados de acesso do respectivo Usuário.\n\nO uso não autorizado confirmado ou suspeito, de sua Conta ou sobre quaisquer violações de segurança, confirmadas ou suspeitas, incluindo perda, roubo ou divulgação não autorizada de login e/ou senha, deverão ser imediatamente notificados à Plataforma CONVENIA através dos contatos indicados abaixo deste Termo.\n\nO Usuário concede a CONVENIA o direito de utilizar todo Conteúdo do Usuário inserido ou transmitido pelo Usuário através da Plataforma, para a manutenção da Plataforma pela CONVENIA e demais finalidades, conforme as disposições desses Termos e da Política de Privacidade.\n\nO Usuário reconhece e concorda que será o único responsável por todo e qualquer uso indevido da Plataforma e das Informações de suas Contas.\n\nO Usuário declara ter pleno conhecimento da legislação trabalhista, na qualidade de empregador, empregado ou fornecedor, não sendo permitida a utilização da Plataforma CONVENIA de maneira incompatível com as disposições contidas na legislação, regulamentos, códigos e decisões aplicáveis ao exercício de suas atividades.\n\nO Usuário será exclusivamente responsável por arcar integral e exclusivamente com todas as suas obrigações trabalhistas, previdenciárias, fundiárias, tributárias, principais e acessórias, e quaisquer outras exigidas em lei e pertinentes às suas atividades, isentando a CONVENIA de qualquer responsabilidade.\n\nO acesso e uso da Plataforma e o conteúdo inserido ou transmitido através da Plataforma não poderão ser ofensivos a terceiros, infringir direitos de terceiros e/ou causar quaisquer perdas ou danos a terceiros. Não será permitido, dentre outros, conteúdo que contenha:\n\n(i) uso de quaisquer expressões, sinais ou palavras contrárias à moral e aos bons costumes;\n(ii) termos que ofendam a privacidade, honra ou imagem de pessoas, produtos, empresas ou natureza, meio ambiente, espaços físicos e afins;\n(iii) sinais ou palavras que ofendam a liberdade de consciência, religião, sexo, ideia ou sentimento das pessoas ou associações;\n(iv) uso de marca de terceiros;\n(v) sinais de pessoas/personalidades notórias;\n(vi) sinais públicos (brasões, armas, medalhas, bandeiras, distintivos) ou de partidos políticos;\n(vii) incentivo a maus costumes, violência ou drogas;\n(viii) símbolos desportivos reconhecidos;\n(ix) nomes patronímicos notórios;\n(x) obra literária, artística ou científica reconhecida; ou (xi) apontamento preconceituoso, constrangedor, pornográfico ou semelhante.\n\nEm caso de descumprimento do item acima, o Usuário será responsável por indenizar a CONVENIA, seus Parceiros, empregados, fornecedores, e/ou quaisquer terceiros por danos diretos, indiretos, morais e/ou lucros cessantes, ocasionados por ou relacionados à utilização da Plataforma e ao Conteúdo do Usuário.\n\nA PLATAFORMA CONVENIA não é uma ferramenta de orientação sobre o documento da legislação aplicável, razão pela qual a CONVENIA não garante em nenhuma hipótese que as ferramentas e funcionalidades da Plataforma estarão de acordo e atualizado conforme a legislação trabalhista, previdenciária, fundiária, fiscal ou qualquer outra norma relacionada às atividades e obrigações do Usuário. A verificação da legislação trabalhista deverá ser feita pelo Usuário através de consultas específicas à consultoria jurídica.\n\nA CONVENIA fica isenta de qualquer responsabilidade por qualquer dano, de qualquer tipo ou natureza, perante o Usuário ou terceiros, incluindo, sem limitação, qualquer dano indireto, moral ou lucros cessantes, ocasionado por ou relacionado à existência, ao uso da Plataforma e/ou das Informações.\n\nA CONVENIA garante aos seus USUÁRIOS acesso à PLATAFORMA, buscando a disponibilização dos serviços por tempo integral. Porém eventuais erros no acesso e/ou que a Plataforma, Informações, Conteúdo e o acesso à sua Conta estejam indisponíveis, podem ocorrer, e a CONVENIA providenciará, assim que comunicada, todas as medidas para a retomada de todas as funcionalidades.\n\nA Plataforma, as Informações, o Conteúdo e o acesso à sua Conta ficarão indisponíveis pelo período de tempo necessário para manutenções e/ou implementação de melhorias, sendo certo que o CONVENIA sempre envidará os melhores esforços para comunicar com antecedência razoável em cada período de instabilidade.\n\nCaso a CONVENIA tenha motivo para acreditar que a sua utilização da Plataforma ou que o Conteúdo do Usuário viola, causa dano e/ou possa causar dano a terceiros incluindo, mas não se limitando a, direitos de imagem, privacidade e/ou direitos de propriedade intelectual de terceiros, tais como direitos autorais e marcas, a CONVENIA deverá comunicar o Usuário e poderá imediatamente cancelar a sua Conta e/ou retirar o Conteúdo do Usuário, tornando-o indisponível, independentemente de aviso prévio.\n\nNível de Serviço\n\nA CONVENIA empreenderá esforços comercialmente razoáveis para tornar a PLATAFORMA CONVENIA disponível, no mínimo, 99,7% (noventa e nove vírgula sete por cento) durante cada Ano de Serviço (conforme definido abaixo) (“Compromisso de Nível de Serviço”). Na hipótese de a CONVENIA não cumprir o Compromisso de Nível de Serviço, o Usuário terá o direito de receber o crédito correspondente a 1 (um) mês de mensalidade, 1/3 avos (para planos trimestrais) ou 1/12 avos (para planos anuais) (“Crédito de Serviço”).\n\nPor “Ano de Serviço” entende-se os 365 dias precedentes à data de uma reivindicação relacionada ao nível de serviço. Se o Usuário estiver se utilizando da PLATAFORMA CONVENIA durante período inferior a 365 dias, o Ano de Serviço que lhe corresponde será, ainda assim, considerado como os 365 dias precedentes; no entanto, os dias anteriores a seu uso dos serviços serão considerados como de 100% de disponibilidade. Os períodos de inatividade operacional que ocorrerem antes de uma reivindicação bem sucedida de Crédito de Serviço não poderão ser usados para efeito de reivindicações futuras.\n\nO Compromisso de Nível de Serviço não se aplica caso as circunstâncias de indisponibilidade resultem:\n\n(i) de uma interrupção do fornecimento de energia elétrica ou paradas emergenciais não superiores a 2 (duas) horas ou que ocorram no período das 24h às 06h00min (horário de Brasília);\n(ii) forem causadas por fatores que fujam ao razoável controle da CONVENIA, inclusive casos de força maior ou de acesso à Internet e problemas correlatos;\n(iii) resultem de quaisquer atos ou omissões do Usuário ou de terceiros;\n(iv) resultem do equipamento, software ou outras tecnologias que a CONVENIA usar que impeçam o acesso regular da PLATAFORMA CONVENIA;\n(v) resultem de falhas de instâncias individuais não atribuíveis à indisponibilidade do Usuário; e\n(vi) resultem de práticas de gerenciamento da rede que possam afetar sua qualidade."},{hid:"terms-use-5",title:"Licença de Uso",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A partir do primeiro acesso e cadastro na Plataforma, a CONVENIA outorga ao Usuário uma licença de uso, em caráter não exclusivo, temporário, intransferível e revogável para utilização da Plataforma.\n\nA licença de uso da Plataforma é limitada ao direito de uso da Plataforma em um dispositivo que pertença, ou que seja controlado pelo Usuário, conforme os parâmetros definidos pela CONVENIA.\n\nO Usuário desde já reconhece que qualquer cópia ou uso não autorizado da Plataforma ou do Conteúdo constitui uma violação destes Termos e um ato terminantemente proibido, podendo ser responsabilizado por perdas e danos.\n\nOs requisitos para acesso e utilização da PLATAFORMA poderão ser alterados a qualquer momento e por qualquer motivo, incluindo, mas não se limitando a, atualizações tecnológicas. O Usuário concorda e reconhece que, caso não tenha todos os requisitos de sistema e/ou não atualize o seu dispositivo utilizado para acessar a Plataforma, o acesso e/ou utilização da Plataforma poderão ser afetados e/ou cancelados."},{hid:"terms-use-6",title:"Serviços de Terceiros",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"Os serviços e conteúdos disponíveis em sites de terceiros são de única e exclusiva responsabilidade do terceiro. O Usuário reconhece e concorda que a CONVENIA não garante, não endossa, não assume e não terá qualquer responsabilidade com relação a produtos, serviços ou sites de terceiros."},{hid:"terms-use-7",title:"SPAM",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A CONVENIA não é conivente com a prática de envio de spams, e só enviará e-mails aos Usuários com o seu consentimento ou que sejam relacionados à Plataforma, conforme estes Termos e suas Políticas de Privacidade."},{hid:"terms-use-8",title:"Propriedade Intelectual",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:'As informações disponíveis no Site ou através dele são de propriedade da CONVENIA ou de suas licenciantes, e estão protegidas por direitos autorais, marca registrada e outras leis de propriedade intelectual. Os Usuários não poderão modificar, copiar, distribuir, transmitir, exibir, publicar, vender, licenciar, criar trabalhos derivados ou de outra maneira utilizar quaisquer informações disponíveis neste Site ou através dele para fins comerciais ou públicos. Os Usuários não poderão utilizar as marcas registradas, logos e marcas de serviços para nenhuma finalidade, inclusive, mas não se limitando, ao uso de "links interessantes" ou meta tags em outras páginas ou sites da Rede Mundial sem a permissão, por escrito, da CONVENIA ou de terceiro que possa ser proprietário da Marca.'},{hid:"terms-use-9",title:"Privacidade e Medidas de Segurança",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A CONVENIA possui uma Política de Privacidade e Segurança específica, que deve ser lida pelo Usuário.\n\nA CONVENIA adota todas as medidas de segurança possíveis, inclusive e não somente, utilizando-se de servidores em nuvem que tem forte esquema de proteção contra invasão.\n\nO uso e tratamento de dados e informações que identificam os Usuários, o Conteúdo do Usuário e as comunicações privadas ocorridas na Plataforma se dão de acordo com a legislação vigente aplicável, adotando medidas de segurança e sigilo de dados e informações conforme padrões de mercado, incluindo, dentre outros, serviços de firewalls, autenticação e validação dos Usuários envolvidos no tratamento dos dados e comunicações dos Usuários.\n\nA CONVENIA garante que todos os dados pessoais de seus clientes, jamais sejam divulgados, bem como não serão transmitidos ou acessados por terceiros.\n\nTodos os dados pessoais informados ao nosso site são armazenados em um banco de dados reservado e com acesso restrito a pessoas habilitadas, que são obrigadas, por contrato, a manter a confidencialidade das informações e não utilizá-las inadequadamente.\n\nEm cumprimento à Lei 12.965/2014, a CONVENIA mantém registros de acesso a aplicação do Usuário pelo prazo de 6 (seis) meses."},{hid:"terms-use-10",title:"Do Cancelamento da contratação pelo USUÁRIO",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"O USUÁRIO poderá cancelar a contratação dos produtos da PLATAFORNA CONVENIA, imotivadamente e a qualquer momento, desde que tal rescisão seja comunicada prévia e expressamente com antecedência mínima de 30 (trinta) dias, devendo permanecer em plena vigência todas as obrigações contratadas até a efetiva data de rescisão.\n\nEm caso de cancelamento de planos anuais ou semestrais, o USUÁRIO terá direito de reembolso de 50% do valor contratado, proporcional, ao período que não foi utilizado."},{hid:"terms-use-11",title:"Disposições Gerais",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"O Usuário declara entender e concordar com estes Termos, com as políticas comerciais e políticas de privacidade da CONVENIA.\n\nO foro da comarca da cidade de São Paulo, Estado de São Paulo, fica eleito para dirimir quaisquer questões oriundas do uso da Plataforma e/ou do Conteúdo, com renúncia expressa a qualquer outro, por mais privilegiado que seja ou venha a ser.\n\nCaso o Usuário queira contatar a CONVENIA para qualquer solicitação como previsto nestes Termos, o Usuário deverá entrar em contato através dos seguintes meios:",class:"-last"}]},A={components:{HeaderContainer:l.a,BannerContainer:m.a,TermsContainer:f.a},mixins:[t.a,c.a,d.a],data:function(){return{bannerInfo:v,termsInfo:h,footerMenuInfo:n.d,bottomInfo:n.a,currentUrl:"https://home.staging.convenia.site"}},mounted:function(){var e=this;this.$nextTick((function(){e.checkURLParams(),e.checkPreviousURL(e.currentUrl)}))}},O=(r(829),r(30)),component=Object(O.a)(A,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"app-container"},[r("HeaderContainer",{staticClass:"header",attrs:{overlaid:!0,"url-params":e.urlParamsGTM}}),e._v(" "),r("main",{staticClass:"main"},[r("BannerContainer",{attrs:{"url-params":e.urlParamsGTM,"banner-info":e.bannerInfo}}),e._v(" "),r("TermsContainer",{attrs:{"terms-info":e.termsInfo}})],1),e._v(" "),r("footer",{staticClass:"footer"},[e._l(e.footerMenuInfo,(function(o){return r("footer-display",{key:o.hid,attrs:{"footer-menu":o,"url-params":e.urlParamsGTM}})})),e._v(" "),e._l(e.bottomInfo,(function(e){return r("bottom-display",{key:e.hid,attrs:{"bottom-address":e}})}))],2)],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{FooterDisplay:r(438).default,BottomDisplay:r(439).default})}}]);