(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{412:function(e,o,r){"use strict";var t=r(20),n=r(10);r(34),r(130),r(32),r(19),r(31),r(52),r(53);function d(object,e){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(t.a)(e,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(source,o))}))}return e}var l={data:function(){return{allCookies:"",cookieWanted:""}},mounted:function(){var e=this;this.$nextTick((function(){e.allCookies=document.cookie.split(";").map((function(e){return e.split("=")})).reduce((function(e,o){var r=Object(n.a)(o,2),d=r[0],l=r[1];return c(c({},e),{},Object(t.a)({},d.trim(),decodeURIComponent(l)))}),{})}))},methods:{setOrUpdateCookie:function(e,o){document.cookie="".concat(e,"=").concat(o)},checkCookieNavigation:function(e,o,r){if(this.allCookies.navigation===r)return this.setOrUpdateCookie(e,o),this.cookieWanted=o;this.setOrUpdateCookie(e,r),this.cookieWanted=r}}};o.a={mixins:[l],data:function(){return{baseUrl:"https://home.staging.convenia.site",redirectToUrl:""}},methods:{checkPreviousURL:function(e){if(this.checkCookieNavigation("navigation",this.baseUrl,e),this.cookieWanted===e)return this.redirectToUrl=e;this.redirectToUrl=this.baseUrl}}}},432:function(e,o,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("7397d0f7",content,!0,{sourceMap:!1})},433:function(e,o,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("661d8742",content,!0,{sourceMap:!1})},472:function(e,o,r){"use strict";r(432)},473:function(e,o,r){var t=r(69)(!1);t.push([e.i,'.banner-container-default{background-color:#940dff;overflow:hidden;height:345px}.banner-container-default>.content-hero{display:flex;flex-direction:column;justify-content:center;position:relative;color:#fff;padding:20px 16px 0;z-index:20;text-align:center;margin:96px auto 0;max-width:379px}.banner-container-default>.content-hero>.paragraph-box>header .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:32px;line-height:40px;margin-bottom:6px}.banner-container-default>.overlayer{width:100vw;height:345px;background-image:linear-gradient(180deg,#940dff,rgba(151,28,246,.86),rgba(151,28,246,.7) 94%,rgba(151,28,246,0) 100%,rgba(32,45,106,0) 0);position:relative;z-index:10;top:-340px}.banner-container-default>.video-container{position:relative;z-index:0;height:0}.banner-container-default>.video-container>.banner{height:870px;margin-top:clamp(-552px,-552px,-295px);overflow:hidden;position:relative}@media (min-width:768px){.banner-container-default>.content-hero{padding:0 124px;margin:116px 0 151px;max-width:none}}@media (min-width:1024px){.banner-container-default{flex-direction:row;margin-top:-80px;height:374px}.banner-container-default>.content-hero{padding:0;margin:227px auto 97px;width:974px}.banner-container-default>.content-hero>.paragraph-box{text-align:center}.banner-container-default>.content-hero>.paragraph-box>header .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:46px;line-height:57px;margin-bottom:8px}.banner-container-default>.content-hero>.paragraph-box>.paragraph{font-size:20px;line-height:32px;padding:0 24.5px;letter-spacing:-.21px}.banner-container-default>.overlayer{display:none}.banner-container-default>.video-container .banner{margin-top:-886px;overflow:hidden;width:1920px;height:1200px}}@media (min-width:1024px) and (min-width:1920px){.banner-container-default>.video-container .banner{width:100%}}.group-actions{position:absolute;right:10%;top:-500px}',""]),e.exports=t},474:function(e,o,r){"use strict";r(433)},475:function(e,o,r){var t=r(69)(!1);t.push([e.i,'.terms-container{margin:80px 20px 0;max-width:1280px}@media (min-width:768px){.terms-container{margin:80px 80px 0}}@media (min-width:1415px){.terms-container{margin:80px auto 0}}.terms-container .intro,.terms-container .paragraph-box{margin-bottom:105px;white-space:pre-line}.terms-container .header{font-family:"Roboto Slab",serif;font-weight:700;font-size:28px;line-height:42px;color:rgba(18,30,72,.9);margin-bottom:6px}.terms-container .paragraph{font-family:"Nunito Sans",sans-serif;font-weight:400;font-size:18px;line-height:36px;color:rgba(18,30,72,.7);margin-top:16px}.terms-container .paragraph .link{word-wrap:break-word;margin-right:10px}.terms-container .-last{margin-bottom:0}',""]),e.exports=t},484:function(e,o,r){"use strict";var t={props:{urlParams:String,bannerInfo:{type:Object,hid:String,altTitleImage:String,title:String,divider:String,altTitleDivider:String,paragraph:String,imageInfo:{type:Object,hid:String,image:String,altTitleImage:String,class:String},videoInfo:{type:Object,hid:String,video:String,class:String},bullets:{type:Object,hid:String,image:String,altTitleImage:String,description:String},callToAction:{type:Object,hid:String,description:String,image:String,altTitleImage:String,linkTo:String},scrollDown:{type:Object,hid:String,image:String,altTitleImage:String,class:String}}},data:function(){return{renderVideo:!0}}},n=(r(472),r(30)),component=Object(n.a)(t,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("section",{staticClass:"banner-container-default",class:e.bannerInfo.classBanner},[r("div",{staticClass:"content-hero"},[r("c-stanza",{attrs:{"header-number":"h1","paragraph-info":e.bannerInfo}})],1),e._v(" "),e.renderVideo?r("div",{staticClass:"video-container"},[r("c-video",{attrs:{"video-info":e.bannerInfo.videoInfo}})],1):r("div",{staticClass:"video-container"},[r("image-import",{attrs:{"image-import":e.bannerInfo.imageInfo,lazy:!1}})],1)])}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{CStanza:r(392).default,CVideo:r(425).default,ImageImport:r(411).default})},485:function(e,o,r){"use strict";var t={props:{termsInfo:{type:Object,hid:String,terms:{type:Object,hid:String,title:String,divider:String,altTitleDivider:String,paragraph:String}}},methods:{hasElement:function(element){return void 0!==element}}},n=(r(474),r(30)),component=Object(n.a)(t,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("section",{staticClass:"terms-container"},[e.hasElement(e.termsInfo.update)?r("c-paragraph",{staticClass:"intro",attrs:{"paragraph-info":e.termsInfo.update}}):e._e(),e._v(" "),e._l(e.termsInfo.terms,(function(e){return r("c-stanza",{key:e.hid,attrs:{"header-number":"h3","paragraph-info":e}},[r("c-paragraph",{attrs:{"paragraph-info":e}})],1)}))],2)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{CParagraph:r(394).default,CStanza:r(392).default})},541:function(e,o,r){var content=r(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("550146ec",content,!0,{sourceMap:!1})},815:function(e,o,r){"use strict";r(541)},816:function(e,o,r){var t=r(69),n=r(395),d=r(435),c=t(!1),l=n(d);c.push([e.i,'.app-container{display:grid;grid-template-columns:100%;grid-template-areas:"top" "content" "bottom";background-image:url('+l+");background-repeat:repeat-y;background-position:top 829px left 50%}@media (min-width:1024px){.app-container{background-position:top 829px left 0}}.app-container>.header{grid-area:top;position:-webkit-sticky;position:sticky;top:0;z-index:30}.app-container>.main{grid-area:content;position:relative;top:-80px}.app-container>.footer{grid-area:bottom}@media (min-width:1024px){.app-container>.footer>.footer-display{margin:0 auto 80px}}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 9px;display:none;border:3px solid transparent;border-radius:9px;background-clip:content-box}::-webkit-scrollbar-track{box-shadow:none;background:transparent;opacity:0;display:none}.-scrolling{transition:all 1s;color:rgba(123,124,127,.55)}.-scrolling::-webkit-scrollbar-thumb{border-radius:9px;display:block}.-scrolling.-not{color:transparent}",""]),e.exports=c},881:function(e,o,r){"use strict";r.r(o);var t=r(440),n=r(427),d=r(412),c=r(416),l=r(441),m=r(484),f=r(485),v={hid:"software-de-rh",title:"Política de Privacidade e Proteção de dados",divider:"icone-underline-title-amarelo.svg",altTitleDivider:"icone ondulado amarelo",videoInfo:{hid:"video-background-banner",video:"janeiro-incrivel-banner.mp4",class:"banner"}},h={hid:"terms-privacy",update:{hid:"terms-privacy-0",paragraph:"Atualizada em: 08 de junho de 2022.\n\nA CONVENIA tem compromisso com a transparência perante os seus clientes, usuários, bem como demais indivíduos que compartilhem seus dados pessoais com a CONVENIA, com objetivo de utilizar o nosso site ou a nossa plataforma, ou ainda receber serviços da CONVENIA. Por isso, apresentamos nossa Política de Privacidade e Proteção de Dados (“Política”), que tem por objetivo esclarecer como o uso dessas informações é realizada.\n\nAo utilizar nossa plataforma ou receber um serviço da CONVENIA, você automaticamente concorda com as práticas descritas nesta Política."},terms:[{hid:"terms-privacy-1",title:"1. Dados de contato da Convenia e nosso DPO",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:'Este site é de propriedade, mantido e operado por Convenia Atividades de Internet e Corretora de Seguros S/A, CNPJ 17.484.689/0001-70.\n\nCaso o usuário necessite de qualquer informação, esclarecimento ou atendimento com relação a esta Política de Privacidade e Proteção de Dados, a CONVENIA disponibiliza os seguintes meios de comunicação:\n\nContato da CONVENIA\nE-mail: <a class="link" href="mailto:suporte@convenia.com.br" rel="noopener noreferrer" target="_blank">suporte@convenia.com.br</a>\nTelefone: <a class="link" href="tel:(11)3090-6074" rel="noopener noreferrer" target="_blank">(11) 3090-6074</a>\n\nEncarregado (DPO): O Encarregado ou Data Protection Officer (DPO) é a pessoa indicada pela CONVENIA, responsável por atender as demandas dos titulares de dados pessoais (clientes, usuários etc.). Caso você tenha dúvidas sobre como a CONVENIA utiliza as suas informações pessoais, por gentileza, entre em contato com a pessoa indicada abaixo.\n\nNome: Anderson Poli\nE-mail: <a class="link" href="mailto:lgpd@convenia.com.br" rel="noopener noreferrer" target="_blank">lgpd@convenia.com.br</a>\nTelefone: <a class="link" href="mailto:(11)99366-5176" rel="noopener noreferrer" target="_blank">(11) 99366-5176</a>\n'},{hid:"terms-privacy-2",title:"2. Como coletamos e tratamos informações (inclusive dados pessoais)",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:'A CONVENIA poderá coletar e tratar informações relacionadas a você das seguintes formas, para as finalidades descritas a seguir:\n\n2.1. Informações fornecidas pelos usuários: Coletamos informações de identificação pessoal quando você:\n\na) cria um cadastro para utilização da plataforma no modelo de teste gratuito ou/e contrata a nossa plataforma. Neste caso poderão ser coletados os seguintes dados: seu nome, e-mail e endereço de cobrança, telefone de contato, CPF, RG, data de nascimento, gênero, preferências de produtos, nome da empresa em que trabalha, website da empresa, seu cargo, departamento e número de funcionários da empresa, entre outros que podem ser solicitados para personalizar a sua experiência com o nosso atendimento e também para fins de cálculo de precificação.\n\nb) cria um cadastro para receber um conteúdo nosso ou participar de um evento/webinar. Neste caso poderão ser coletados os seguintes dados: seu nome, e-mail, telefone de contato, preferências de produtos, nome da empresa em que trabalha, website da empresa, seu cargo, departamento e número de funcionários da empresa, entre outros que podem ser solicitados para personalizar a sua experiência com o nosso atendimento.\n\nEventualmente, algumas informações podem ser obtidas e/ou confirmadas por meio de contato direto da CONVENIA com você via e-mail ou telefone, com a finalidade de: confirmar interesse de contratação da plataforma; auxiliar o usuário com eventual dúvida; auxiliar o usuário durante o teste da plataforma; bem como de apresentar a plataforma, no caso do agendamento de demonstrações.\n\nTambém coletamos dados pessoais quando a CONVENIA atua como corretora de seguros, contratada por uma empresa para encontrar os melhores seguros para seus colaboradores.\n\n2.2. Informações de navegação no site e na plataforma (cookies): Quando  você visita nosso site ou plataforma, são coletadas informações como endereço IP, localização geográfica, fonte de referência, tipo de navegador, resolução do navegador, duração da visita, páginas visitadas entre outras informações relacionadas ao sistema. A CONVENIA utiliza essas informações para melhorar sua experiência com nossas soluções e personalizar seu conteúdo, para fins de melhoria de performance, bem como para análise de dados e Marketing nos termos acima referidos.\n\nClique aqui para entender cada uma das categorias de dados coletados, suas finalidades e com quem são compartilhados.\nEsclarecemos que quando se tratar de dados pessoais, o usuário poderá concordar com a coleta das suas informações logo ao acessar o nosso site ou plataforma, mediante o click no nosso banner de cookies (ressalvadas as hipóteses de informações necessárias ao funcionamento do site ou da plataforma).\n\n● Tipo de cookie/finalidade:\n(i) Necessários: são aqueles absolutamente necessários para que o site e a plataforma funcionem, permitindo o usuário a navegar neles e usar suas funcionalidades.\n(ii) Propaganda: são aqueles usados para fins de marketing e publicidade.\n(iii) Analíticos: são aqueles que geram dados sobre a utilização do site e plataforma, de modo a permitir ajustes e personalização do conteúdo de acordo com o público do site.\n\n● Exemplos de dados coletados\n(i) Cargo, departamento, nome, e-mail, telefone, empresa, site da empresa e número de funcionários.\n(ii) Localização geográfica, páginas visitadas, cargo, departamento, segmento de atuação, gênero, idade, nome, e-mail, telefone, empresa, site da empresa e número de funcionários.\n(iii) Localização geográfica, tipo de navegador, resolução do navegador, duração da visita, páginas visitadas, visualizações de vídeos, idioma, sites de referência, horário e dia da visita, cargo, departamento, segmento de atuação, gênero, idade.\n\n● Com quem compartilhamos os dados\n(i) Convenia e Hubspot\n(ii) Facebook Pixel, LinkedIn insight Tag, Google, Microsoft Bing e Hubspot\n(iii) Google Universal Analytics, LinkedIn, Microsoft User Identifier e Facebook\n\nImportante destacar que, na intenção de resguardar os direitos dos titulares de dados pessoais, a CONVENIA faz a coleta e compartilhamento de cookies de forma anonimizada, sem que seja possível a associação dos dados com um indivíduo determinado, ainda que indiretamente, exceto no caso da Hubspot. A Hubspot possui uma política própria para tratar essas informações, para entender melhor acesse o site dela e leia os seus termos <a class="link" href="https://legal.hubspot.com/br/privacy-policy" rel="noopener noreferrer" target="_blank">https://legal.hubspot.com/br/privacy-policy.</a>\n\n2.3. Informações de funcionários e colaboradores de clientes: A CONVENIA também trata informações e dados pessoais de funcionários e colaboradores dos seus clientes em sua plataforma, bem como de seus dependentes e familiares, os quais são fornecidos pelo cliente e são tratados apenas de acordo com os termos previstos nos contratos firmados entre a CONVENIA e seus clientes, incluindo eventuais instruções lícitas dos clientes sobre como o tratamento deverá ser realizado, e a legislação aplicável. Os clientes devem assegurar a CONVENIA que possuem a devida base legal para tratamento dos dados de seus funcionários, colaboradores, dependentes e familiares em, desta forma, autorizam a CONVENIA a tratar tais dados.\n\n2.4. Outras fontes: Eventualmente podemos receber informações de outras fontes, como Marketplace, integração com sistema ERP (sistema de gestão empresarial - Enterprise Resource Planning), cadastros de parceiros, para somá-los à nossa base de dados, que sempre será utilizada de acordo com esta Política e, em hipótese alguma, será vendida, ou fornecida para terceiros, nos termos do capítulo 6 desta Política.\n\n2.5. Marketing: Todas as informações coletadas pela CONVENIA, com exceção das informações de funcionários e colaboradores de clientes inseridas em sua plataforma, poderão ser utilizadas também para a finalidade de publicidade e propaganda das atividades da CONVENIA, tais como, o envio de e-mail marketing com informações sobre serviços, conteúdos, dicas, eventos, webinars, propagandas, sendo que você poderá, a qualquer momento, solicitar a sua exclusão da bases de dados da CONVENIA, mediante simples comunicação para o e-mail: <a class="link" href="mailto:lgpd@convenia.com.br" rel="noopener noreferrer" target="_blank">lgpd@convenia.com.br.</a>\n\nPara fins de clareza, a CONVENIA será a Controladora com relação a dados de seus empregados e demais situações descritas acima, exceto pelo descrito no item 2.3, de forma que ao tratar dados de funcionários e colaboradores de seus clientes, o Cliente será o Controlador e a CONVENIA será a Operadora.\n\n'},{hid:"terms-privacy-3",title:"3. Como protegemos suas informações (armazenamento e medidas de segurança)",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"O armazenamento e as comunicações entre qualquer pessoa e a CONVENIA são feitas em servidores com a tecnologia SSL (Secure Socket Layer), garantindo que todas as informações e dados pessoais dos titulares não sejam divulgados para terceiros não referidos nesta Política. Essa tecnologia cria um canal criptografado entre um servidor web e um navegador (browser) para garantir que todos os dados transmitidos sejam sigilosos e seguros.\n\nA plataforma CONVENIA é um serviço fornecido em nuvem e está armazenada nos servidores web da AWS, que são localizados em US East (N. Virginia) e possuem dispositivos contra invasão, tais como IPS (Intrusion Prevetion System) e Firewalls de Rede.\n\nTodos os dados pessoais tratados pela CONVENIA são armazenados em um banco de dados reservado e com acesso restrito às pessoas habilitadas, que são obrigadas, por contrato, a manter a confidencialidade e não os utilizar inadequadamente ou para finalidades diversas daquelas para os quais foram coletados.\n\nAlém disso, a CONVENIA tem o compromisso de implementar, manter e atualizar medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, além de garantir que o ambiente (seja ele físico ou virtual) utilizado para o tratamento de dados pessoais seja estruturado de forma a atender aos padrões de boas práticas de governança e aos princípios gerais previstos na legislação aplicável.\n\nNesse sentido, a CONVENIA possui ainda uma Política de Segurança da Informação, que pode ser solicitada para melhor análise.\n\nA CONVENIA também manterá em sua base de dados todas as informações relativas aos registros de tratamento de dados pessoais, bem como as informações referentes aos acessos do usuário ao site e/ou à plataforma, incluindo, mas não se limitando ao endereço IP, às páginas acessadas, aos horários e datas de acesso, e o dispositivo de acesso utilizado, nos termos da legislação vigente.\n\nTais registros poderão ser utilizados para prestar assistência aos clientes da CONVENIA no cumprimento de suas obrigações legais (atendimento dos direitos dos titulares dos dados pessoais ou solicitações de autoridades governamentais, por exemplo), bem como em investigações internas ou públicas para averiguação de práticas que possam gerar quaisquer prejuízos à CONVENIA, inclusive a prática de crimes em ambientes virtuais."},{hid:"terms-privacy-4",title:"4. Direitos dos titulares de dados pessoais",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:'Você, enquanto o titular de dados pessoais, poderá exercer perante a CONVENIA, mediante solicitação, quando a CONVENIA for controladora dos referidos dados, todos os direitos descritos na legislação aplicável, dentre eles:\n\n4.1. Informação: Direito do titular de receber informações claras e de fácil compreensão sobre como a CONVENIA usa os seus dados pessoais.\n\n4.2. Acesso: Direito do titular de obter acesso aos seus dados pessoais processados pela CONVENIA.\n\n4.3. Correção: Direito do titular de ter seus dados pessoais corrigidos se eles forem considerados imprecisos, desatualizados ou incompletos.\n\n4.4. Anonimização, Eliminação ou Bloqueio: Direitos do titular de solicitar a anonimização, exclusão ou bloqueio do uso de dados pessoais processados pela CONVENIA de forma excessiva, desnecessária ou em desconformidade com a legislação de proteção de dados.\n\n4.5. Revogação de Consentimento: Direito do titular de solicitar a exclusão de dados pessoais quando o processamento dos dados for realizado pela CONVENIA com base no consentimento do titular (revogação do consentimento).\n\n4.6. Portabilidade: Direito do titular de solicitar que seus dados pessoais sejam enviados para outro fornecedor de serviço/produto.\n\n4.7. Oposição: Direito do titular de se opor ao processamento dos seus dados feito pela CONVENIA em desconformidade com a legislação aplicável, quando não feito com base no próprio consentimento dado pelo titular.\n\n A CONVENIA sempre promoverá seus melhores esforços para atender as solicitações dos titulares de dados pessoais no menor prazo possível. Contudo, caso a solicitação demande um prazo específico ou não possa ser atendida, a CONVENIA informará o prazo estimado para o seu atendimento ou as razões técnicas e/ou legais para o seu não atendimento, conforme o caso, porém sempre cumprindo a legislação aplicável.\n\nNo caso de informações de funcionários e colaboradores de clientes disponibilizadas na plataforma da CONVENIA, os próprios clientes que deverão fazer a gestão das informações, na qualidade de controladores dos referidos dados pessoais. As demais solicitações deverão ser encaminhadas diretamente ao e-mail: <a class="link" href="mailto:lgpd@convenia.com.br" rel="noopener noreferrer" target="_blank">lgpd@convenia.com.br</a>.\n'},{hid:"terms-privacy-5",title:"5. Compartilhamento das informações e dados com terceiros",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:'A segurança e o sigilo das informações de nossos clientes e usuários são muito importantes para o nosso negócio, de modo que as informações e dados pessoais coletados no site ou na plataforma apenas serão disponibilizados ao próprio cliente e a outras pessoas quando a CONVENIA for orientada nesse sentido pelo cliente ou usuário, salvo se de outra forma previsto nesta Política.\n\nAlém do compartilhamento informado no item 2 acima, abaixo citamos outros casos nos quais o compartilhamento de informações pela CONVENIA poderá se fazer necessário, bem como suas especificidades.\n\n5.1. Fornecedores necessários para o funcionamento do software: Empresas fornecedoras e que trabalham com a CONVENIA para aprimorar nosso negócio e são fundamentais para o funcionamento do software, bem como para a prestação de serviços oferecida pela CONVENIA. São exemplos os serviços de hosting de infraestrutura, os serviços logísticos dos pedidos, disparo de e-mails, análise da base de dados, criação de ações de marketing e processamento das transações por cartão de crédito, plataforma de envio e recebimento de mensagens, bem como banco de dados. Muitos desses serviços só são possíveis com o compartilhamento de informações de nossos clientes e usuários, porém, é importante reforçar que seu uso está autorizado apenas para as finalidades contratadas.\n\nSão exemplos de fornecedores necessários da CONVENIA:\n\n● AWS: A CONVENIA utiliza os serviços da AWS para armazenar os seus servidores de rede. Para mais informações acesse: <a class="link" href="https://aws.amazon.com/pt/compliance/brazil-data-privacy/" rel="noopener noreferrer" target="_blank">https://aws.amazon.com/pt/compliance/brazil-data-privacy/</a>\n● Mandrill:  A CONVENIA utiliza o seu sistema de disparo de e-mails. Todos os e-mails da plataforma são enviados por ele, o que significa que os e-mails podem conter informações pessoais dependendo do seu conteúdo. A política de privacidade do Mandrill pode ser acessada em: <a class="link" href="https://mailchimp.com/legal/privacy/" rel="noopener noreferrer" target="_blank">https://mailchimp.com/legal/privacy/</a>\n● Hubspot: A CONVENIA compartilha com a empresa Hubspot informações e dados pessoais fornecidos por visitantes e usuários em formulários em seu site, blog ou landing pages para a finalidade exclusiva de automação de atividades de marketing da CONVENIA. Em caso de dúvidas acesse: <a class="link" href="https://legal.hubspot.com/br/privacy-policy" rel="noopener noreferrer" target="_blank">https://legal.hubspot.com/br/privacy-policy</a>\n● RabbitMQ - Plataforma que a CONVENIA utiliza como regra para enviar e receber mensagens acerca dos nossos serviços (projetos). A sua política de privacidade pode ser acessada em: <a class="link" href="https://www.rabbitmq.com/" rel="noopener noreferrer" target="_blank">https://www.rabbitmq.com/</a>\n● MongoDB - Serviço de banco de dados que a CONVENIA utiliza para armazenamos todos os dados dos colaboradores. Em caso de dúvidas acesse: <a class="link" href="https://www.mongodb.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">https://www.mongodb.com/legal/privacy-policy</a>\n\n5.2. Fornecedores facultativos: Empresas fornecedoras que trabalham com a CONVENIA e com as quais são compartilhadas algumas informações e dados pessoais para viabilizar as integrações da plataforma e do software (se for o caso), com outros serviços, condicionados ao nível de contratação dos serviços de BPO e da Corretora selecionados pelos clientes, ou seja, os dados e informações somente são compartilhados com tais fornecedores se os clientes habilitarem e/ou executarem tais rotinas de integração. São exemplos os serviços de consultoria médica e tecnológica para monitoramento das necessidades do cliente, a migração de base de dados completa para outros sistemas e os serviços de automatização (backoffice) para algumas tarefas referentes ao cadastro em software de folha de pagamento. Muitos desses serviços só se tornam possíveis com o compartilhamento de informações de nossos clientes e usuários, porém, é importante reforçar que seu uso está autorizado apenas para as finalidades contratadas.\n\nSão exemplos de fornecedores facultativos da CONVENIA:\n\n● Suridata: Consultoria médica e tecnológica para entender os beneficiários dos clientes, monitorando suas necessidades e sugerindo a forma mais eficiente para aumentar a saúde e controlar os custos dos planos de saúde e seguros de saúde. Em caso de dúvidas acesse: <a class="link" href="https://www.suridata.com.br/ " rel="noopener noreferrer" target="_blank">https://www.suridata.com.br/</a>\n\n● Barine: Serviço de migração de base de dados completa de outros sistemas. Para maiores detalhes acesse: <a class="link" href="https://barineconsultoria.com.br/" rel="noopener noreferrer" target="_blank">https://barineconsultoria.com.br/</a>\n\n● Gestta: Serviços de meio operacional (backoffice) que permite a automatização de algumas tarefas referentes ao cadastro em software de folha de pagamento. Em caso de dúvidas acesso: <a class="link" href="https://www.gestta.com.br/politica-de-privacidade/" rel="noopener noreferrer" target="_blank">https://www.gestta.com.br/politica-de-privacidade/</a>\n\n5.3. Parceiros: Empresas com as quais são compartilhadas algumas informações e dados pessoais para viabilizar as integrações da plataforma com outros serviços, somente se as Empresas habilitarem e/ou executarem tais rotinas de integração, como software de ponto, plataformas de recrutamento e seleção e softwares de assinatura de documentos.\n\nSão parceiros da CONVENIA:\n\n● ClickSign: A CONVENIA compartilha com a ClickSign informações e dados pessoais para o gerenciamento de assinaturas digitais dos contratos que ela seja parte. Para mais informações você pode acessar a política de privacidade da ClickSign em: <a class="link" href="https://www.clicksign.com/documents/Clicksign_Politica_de_Privacidade.pdf" rel="noopener noreferrer" target="_blank">https://www.clicksign.com/documents/Clicksign_Politica_de_Privacidade.pdf</a>\n● Alelo: A CONVENIA compartilha com a Alelo informações e dados pessoais para o gerenciamento de pedidos de benefícios de seus clientes. Em caso de dúvidas acesse: <a class="link" href="https://www.alelo.com.br/content/meualelo/templates-email/email---politica-de-privacidade.html" rel="noopener noreferrer" target="_blank">https://www.alelo.com.br/content/meualelo/templates-email/email---politica-de-privacidade.html</a>\n● Benefício Certo: A CONVENIA compartilha com a Benefício Certo informações e dados pessoais para o gerenciamento de pedidos de benefícios. Para mais informações acesse: <a class="link" href="https://beneficiocerto.com.br/politica-de-privacidade-e-protecao-de-dados-pessoais/" rel="noopener noreferrer" target="_blank">https://beneficiocerto.com.br/politica-de-privacidade-e-protecao-de-dados-pessoais/</a>\n● FlashApp: A CONVENIA compartilha com a FlashApp informações e dados pessoais para o gerenciamento de pedidos de benefícios de seus clientes. Em caso de dúvidas acesse: <a class="link" href="https://public-images-flash.s3-sa-east-1.amazonaws.com/Contracts/flash_privacy.pdf" rel="noopener noreferrer" target="_blank">https://public-images-flash.s3-sa-east-1.amazonaws.com/Contracts/flash_privacy.pdf</a>\n● Quiver: A CONVENIA compartilha com a Quiver as apólices de seguros saúde e de planos de saúde dos seus clientes, para auxiliar a CONVENIA na gestão dos seguros saúde e de planos de saúde. Para mais informações acesse: <a class="link" href="https://www.quiver.net.br/politica-de-privacidade/" rel="noopener noreferrer" target="_blank">https://www.quiver.net.br/politica-de-privacidade/</a>\n ● PontoMais: A CONVENIA compartilha com a PontoMais informações e dados pessoais para o gerenciamento e controle de ponto, bem como informações sobre as admissões e desligamentos de seus clientes. Para mais informações acesse: <a class="link" href="https://pontomais.com.br/politica-de-privacidade" rel="noopener noreferrer" target="_blank">https://pontomais.com.br/politica-de-privacidade</a>.\n\nA CONVENIA desenvolveu uma API (Application Programming Interface), que é uma interface de programação de aplicação que permitem que os seus clientes, bem como seus parceiros autorizados possam acessar diretamente a plataforma da CONVENIA, e consequentemente os dados incluídos pelo cliente. O acesso da API pelo parceiro do CLIENTE deve ser realizado com a autorização prévia e exclusiva do cliente, que se efetiva apenas com uso de token disponibilizado pelo próprio cliente.\n\nAtenção! A utilização de APIs para o compartilhamento de informações do cliente com outras empresas não permite o controle ou limitação das informações que serão acessados pela empresa, de modo que é de integral responsabilidade do cliente verificar a finalidade e necessidade das informações e dos dados pessoais disponibilizados por ele às empresas parceiras por meio da API.\n\nDiante disso, é requisito essencial para o uso da API que o cliente garanta perante a CONVENIA e, principalmente, perante os titulares dos dados pessoais disponibilizados na plataforma que:\n\n(i) O cliente tem e sempre terá respaldo legal para disponibilizar os dados pessoais e demais informações aos seus parceiros;\n(ii) A responsabilidade perante quaisquer terceiros acerca do uso indevido dos dados pessoais e demais informações pelos seus parceiros somente poderão ser imputadas a quem efetivamente causou eventual dano; e\n(iii) A CONVENIA não tem qualquer responsabilidade com relação ao uso indevido e/ou à divulgação dos dados pessoais e demais informações pelos parceiros que utilizarem a API, nos exatos termos do Artigo 43 da LGPD.\n\nSão exemplos de empresas que fazem o uso da API com a nossa plataforma: Ponto Mais; Tique Taque; Oi Tchau; Qulture Rocks; Solides; Feedz; dentre outras.\n\n5.3. Novos negócios: No contínuo desenvolvimento do nosso negócio, podem ocorrer processos de aquisição e fusão de empresas, venda de participação societária, constituição de subsidiárias, dentre outros negócios. Nessa transferência de negócios, informações dos respectivos clientes e usuários também poderão ser transferidas, mas ainda assim, os termos desta Política sempre serão aplicáveis.\n\n5.4. Requisição Judicial: Deveremos compartilhar dados pessoais em caso de solicitação judicial.\n\n'},{hid:"terms-privacy-6",title:"6. Retenção/Eliminação das informações",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"Como regra geral, as informações coletadas pela CONVENIA, tanto na qualidade de controladora de dados como na de operadora de dados, são retidas enquanto forem necessárias e adequadas para o atingimento das finalidades para as quais foram coletadas, observados os termos e condições das leis aplicáveis, podendo ser excluídas ao término do seu tratamento ou quando o cliente ou usuário assim solicitarem. A CONVENIA informará aos eventuais parceiros e/ou fornecedores que tenha subcontratado diretamente para a execução do contrato com o cliente sobre a obrigação de eliminação ou devolução dos eventuais dados pessoais compartilhados com eles, quando este for o caso.\n\nNo caso de informações de funcionários e colaboradores de clientes disponibilizadas na plataforma da CONVENIA, ou seja, quando a CONVENIA for operadora de dados pessoais, ao término do contrato do cliente com a CONVENIA, poderá ocorrer uma das seguintes hipóteses:\n\na) O cliente poderá extrair e/ou excluir diretamente da plataforma, sem qualquer interferência da CONVENIA, todos os dados importados, históricos e documentos, até o último dia em que o contrato com a CONVENIA estiver em vigor; ou\n\nb) O cliente poderá enviar solicitação de exclusão dos dados da nossa plataforma; ou\n\nc) A CONVENIA, a seu exclusivo critério, tem o direito de excluir permanentemente todos os dados da plataforma, ocasião na qual a CONVENIA destruirá de forma segura as cópias restantes, nos termos da legislação aplicável e desta Política de Privacidade.\n\nFica, no entanto, reservado à CONVENIA o direito de manter uma cópia dos dados pessoais, na medida exigida pela legislação aplicável ou conforme necessário para propósitos de resolução de litígios, tanto nos casos em que a CONVENIA seja controladora ou operadora de dados pessoais. Nestes casos, no entanto, a CONVENIA não processará mais os dados do cliente e/ou de qualquer outro titular de dados, exceto na medida do necessário para as finalidades acima mencionadas, ocasiões nas quais a CONVENIA se compromete a manter o caráter confidencial desses dados enquanto mantiver uma cópia de tais dados do cliente.\n\nA CONVENIA ressalta, no entanto, que eventuais dados pessoais que forem cedidos diretamente pelos clientes à parceiros, via uso da API, conforme definido nesta Política de Privacidade, não serão excluídos pela CONVENIA ao término do contrato, tendo em vista que não houve qualquer participação ou ingerência da CONVENIA para a cessão desses dados pessoais. Dessa forma, caso o cliente tenha interesse de interromper o acesso dos dados pessoais a parceiros via API, o próprio cliente deverá entrar em contato com referida empresa e requerer a sua exclusão, visto que o relacionamento com tal parceiro não está de maneira alguma relacionado ao término do contrato com a CONVENIA."},{hid:"terms-privacy-7",title:"7. Aplicação da presente política",divider:"icone-underline-title-azul.svg",altTitleDivider:"icone ondulado azul",paragraph:"A presente Política aplica-se a todos os sites e serviços oferecidos pela CONVENIA, inclusive sua plataforma de gestão de departamento pessoal e serviço de corretora de seguros.\n\nLinks de terceiros eventualmente incluídos no site, referentes a um produto/serviço oferecido por terceiros, ou que se integre aos serviços da CONVENIA, têm políticas de privacidade independentes, de modo que é de integral responsabilidade do cliente e do usuário definir como tais políticas afetam tanto suas próprias informações quanto de outras pessoas quando disponibilizados por você. \n\nAlterações desta Política serão publicadas nesta página. Desta forma, recomendamos visitar periodicamente esta página para que você tenha conhecimento sobre as modificações. No entanto, caso o seu e-mail esteja cadastrado na nossa base de dados, você será informado por e-mail sobre a realização das alterações a esta Política.",class:"-last"}]},N={components:{HeaderContainer:l.a,BannerContainer:m.a,TermsContainer:f.a},mixins:[n.a,c.a,d.a],data:function(){return{bannerInfo:v,termsInfo:h,footerMenuInfo:t.d,bottomInfo:t.a,currentUrl:"https://home.staging.convenia.site"}},mounted:function(){var e=this;this.$nextTick((function(){e.checkURLParams(),e.checkPreviousURL(e.currentUrl)}))}},C=(r(815),r(30)),component=Object(C.a)(N,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"app-container"},[r("HeaderContainer",{staticClass:"header",attrs:{overlaid:!0,"url-params":e.urlParamsGTM}}),e._v(" "),r("main",{staticClass:"main"},[r("BannerContainer",{attrs:{"url-params":e.urlParamsGTM,"banner-info":e.bannerInfo}}),e._v(" "),r("TermsContainer",{attrs:{"terms-info":e.termsInfo}})],1),e._v(" "),r("footer",{staticClass:"footer"},[e._l(e.footerMenuInfo,(function(o){return r("footer-display",{key:o.hid,attrs:{"footer-menu":o,"url-params":e.urlParamsGTM}})})),e._v(" "),e._l(e.bottomInfo,(function(e){return r("bottom-display",{key:e.hid,attrs:{"bottom-address":e}})}))],2)],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{FooterDisplay:r(438).default,BottomDisplay:r(439).default})}}]);