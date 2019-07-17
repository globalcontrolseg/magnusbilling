Help.load({
    //USERNAME 
    'user.username': 'Usuário para logar no painel de cliente.',
    'user.password': 'Senha para logar no painel de cliente.',
    'user.id_group': 'Existe 3 tipos de grupos: Administrador, Revendedor e Cliente. Você pode criar or editar qualquer destes grupos. Cada grupo tem suas permissōes especificas. Veja o menu Configurações, Grupo para Clientes.',
    'user.id_group_agent': 'Grupo para os clientes deste revendedor.',
    'user.id_plan': 'Plano usado para tarifar este cliente.',
    'user.prefix_local': 'Click para mais informaçōes|https://www.magnusbilling.org/br/prefixo_local',
    'user.active': 'Somente usuários ativos podem fazer chamadas.',
    'user.country': 'Usado para CID Callback. O DDI do país será adicionado antes do CallerID to converter o CallerID para o formato DDI DDD nº',
    'user.id_offer': 'Usado para ativar um pacote gratis. É necessario informar as tarifas que vão pertencer aos pacotes gratís.',
    'user.cpslimit': 'Limite de CPS(chamadas por segundo) para este cliente. As chamadas que superar este limite seráenviado CONGESTION.',
    'user.vat': 'Usado em algums metodos de pagamento.',
    'user.typepaid': 'Quando usar Pos-Pago será necessário adicionar \'Limite de Crédito\'.',
    'user.creditlimit': 'Somente usado para Pos-Pago. O cliente poderá ligar até chegar a este limite negativo.',
    'user.credit_notification': 'Se o crédito do cliente ficar menor que esta campo, MagnusBilling vai enviar um email para o cliente informando que esta com pouco crédito. NECESSARIO TER CADASTRADO UM SERVIDOR SMTP NO MENU CONFIGURAÇŌES',
    'user.enableexpire': 'Ativar expiração da conta. Cadastrar a data no campo \'Expira\'',
    'user.expirationdate': 'Data que este cliente não poderá mais efetuar chamadas',
    'user.callshop': 'Ativa o modulo CallShop. Somente ative se realmente for usar. É necessário dar permissōes ao grupo selecionado.',
    'user.mix_monitor_format': 'Formato que será usado para gravar chamadas.',
    'user.disk_space': 'Espaço em GB que o usuário podera usar com as gravaçōes. Coloque -1 para deixar sem limite.É necessário adicionar no cron o seguinte comando php /var/www/html/mbilling/cron.php UsuárioDiskSpace ',
    'user.calllimit': 'Chamadas simultâneas permitidas para este usuário.',
    'user.calllimit_error': '',
    'user.sipaccountlimit': 'Quantas Contas VoIP este usuário poderá ter. Será necessário dar permissōes no grupo para criar Contas VoIP.',
    'user.callingcard_pin': 'Usado para autentição do callingcard.',
    'user.restriction': 'Regra para controlar as chamadas. Adicione os números no menu \'Números Bloqueados\'.',
    'user.record_call': 'Esta opção é somente para chamadas de DID, para chamadas externas tem que ativar nas Contas VoIP.',
    //SIP ACCOUNT
    'sip.defaultuser': 'Usuário que será usado para logar nos softphones ou qualquer dispositivo SIP.',
    'sip.secret': 'Senha que será usado para logar nos softphones ou qualquer dispositivo SIP.',
    'sip.callerid': 'Este é o CallerID que será mostrado no destino, em chamadas externas o provedor precisa permitir CLI para que seja identificado corretamente no destino.',
    'sip.disallow': 'ESta opção destiva todos os codecs e deixa disponivel para o usuário somente os que você selecionar abaixo.',
    'sip.host': 'Dynamic é a opção para deixar o usuário registrar sua conta em qualquer IP. Se você deseja autenticar o usuário por IP, coloque aqui o IP do cliente, deixe a senha em brando e coloque insecure para port/invite na TAB Informaçōes Adicionais.',
    'sip.sip_group': 'Usado a chamadas recebidas. Quando enviar um DID parar um grupo, vai chamar todas as contas que tiver no grupo. Você pode criar os grupos com qualquer nome',
    'sip.block_call_reg': 'Bloquear chamadas usando REGEX. EX: Para bloquear chamadas para celular é so colocar ^55\\d\\d9. Click para ir ao site que testa REGEX.|https://regex101.com',
    'sip.nat': 'Clique para mais informaçōes|https://www.voip-info.org/asterisk-sip-nat/',
    'sip.directmedia': 'Se ativado, Asterisk vai tentar enviar a midia RTP direto entre seu cliente e seu provedor. Precisa ativar no tronco também. Clique para mais informaçōes|https://www.voip-info.org/asterisk-sip-canreinvite/',
    'sip.qualify': 'Enviar pacote OPTION para para verificar se o usuário esta online.',
    'sip.context': 'Somente altere se você sabe o que esta fazendo.',
    'sip.insecure': 'Se o host estiver dynamic esta opção precisa estar como NO. Para IP authentication alterar para port,invite.',
    'sip.allowtransfer': 'Permite esta conta VoIP fazer transferencia. O código para transferencia é *2ramal ',
    'sip.ringfalse': 'Ativa ring falso. Adiciona rR do comando Dial.',
    'sip.calllimit': 'Chamadas simultâneas permitidas.',
    'sip.dial_timeout': 'Tempo em segundos que será aguardado para atender a chamada.',
    'sip.alias': 'Alias é um número para facilitar a discagem, pode colocar qualquer número. Pode repetir os mesmos números para contas diferente.',
    //ATA LIKKSYS/SIPURA
    'sipuras.nserie': 'Linksys serial number',
    'sipuras.macadr': 'Linksys MAC address',
    'sipuras.senha_user': 'Usuário para entrar na configuração do LinkSys',
    'sipuras.senha_admin': 'Senha para entrar na configuração do LinkSys',
    'sipuras.antireset': 'Tenha cuidado. Esta opção desativa o reinicio com o comando *73738#',
    'sipuras.Enable_Web_Server': 'Tenha cuidadol. Se desativado, não será mais possível entrar nas configuraçōes do Linksys.',
    'sipuras.Usuário_ID_1': 'Usuário da Conta VoIP',
    'sipuras.Password_1': 'Senha da Conta VoIP',
    'sipuras.Use_Pref_Codec_Only_1': 'Somente usar o codec preferencial',
    'sipuras.Preferred_Codec_1': 'Configurar codec preferencial',
    'sipuras.Register_Expires_1': 'Tempo em segundos que o Linksys fica enviando o REGISTER para o servidor. Se for receber chamadas nesta linha, melhor deixar entre 120 e 480 segundos.',
    'sipuras.Dial_Plan_1': 'Read linkys documentation',
    'sipuras.NAT_Mapping_Enable_1_': '',
    'sipuras.NAT_Keep_Alive_Enable_1_': '',
    'sipuras.STUN_Enable': '',
    'sipuras.STUN_Test_Enable': '',
    'sipuras.Substitute_VIA_Addr': '',
    'sipuras.STUN_Server': '',
    //ONOINE CALLS
    'callonline.ndiscado': 'Número',
    'callonline.callerid': 'CallerID.',
    'callonline.reinvite': 'Se estiver \'SIM\' quer dizer que o audio da chamadas não esta passando por este servidor.',
    'callonline.from_ip': 'Ip de origem',
    //CALLERID
    'callerid.cid': 'Número do callerid para autenticar o CallingCard. É necessário cadastrar o número no formato que chega no servidor. Verifique o formato no Cli do Asterisk, ou consulte com o provedor do DID.',
    //RESTRICTED NUMBERS
    'restrictedphonenumber.number': 'Pode cadastrara o número completo ou somente parte do número. EX. Se você selecionar no usuário \'somente pode chamar para os números bloqueados\' e adicionar aqui o número 551340888777, este usuário somente poderá ligar para este número. Se adicionar o número 5513 o cliente so poderá ligar para números que incia com 5513',
    //TOKEN
    'gauthenticator.googleAuthenticator_enable': 'Após o usuário ativar o Token, somente será possível logar no painel ou desativar o token com o token gerado pela APP Google Authenticator.',
    //VOUCHER
    'voucher.credit': 'Valor do VOUCHER',
    'voucher.id_plan': 'Plano que será usado no cliente que usar este crédito.',
    'voucher.language': 'Idioma que será usado',
    'voucher.prefix_local': 'Regra que será usado no campo DDD do cliente',
    'voucher.quantity': 'Quantos VOUCHER você deseja gerar?',
    //USER RATE
    'userrate.id_user': 'Usuário que você quer criar uma tarifa substituta.',
    'userrate.id_prefix': 'Selecione o prefixo que você deseja subscrever.',
    'userrate.rateinitial': 'Novo preço de vendapara este prefixo',
    'userrate.initblock': 'Mínimo de venda',
    'userrate.billingblock': 'Bloco de venda',
    //TRUNK
    'trunk.trunkcode': '',
    'trunk.user': 'Somente coloque usuário se seu tronco for autenticado por usuário e senha.',
    'trunk.secret': 'Somente coloque senha se seu tronco for autenticado por usuário e senha.',
    'trunk.host': 'IP ou Dominio do tronco',
    'trunk.trunkprefix': 'Adiciona um prefixo no inicio do número to enviar para o tronco. Tambem usado para quando você precisa enviar um techprefix. EX: Se você tem que enviar o número no formato 0DDD número, coloque aqui 0 e no campo abaixo 55. Isso vai remover o 55 e adiconar o 0 ',
    'trunk.removeprefix': 'Remove este prefixo do número.',
    'trunk.allow': 'Selecione os codecs que o tronco aceita.',
    'trunk.providertech': 'Protocolo do tronco. Alguns protocolos como Dahdi, Dongle, DGV, khomp, precisam ser instalado no Asterisk antes de usar.',
    'trunk.status': 'Se o tronco for inativado, Magnusbilling enviara a chamada para o tronco backup',
    'trunk.allow_error': 'Se SIM, a chamadas será enviada para o tronco backup a menos que a chamada seja atendida ou cancelada. Somente use quando seu tronco tiver algum problema de sinalização, por exemplo sinaliza BUSY quando não tiver canal disponivel.',
    'trunk.register': 'Somente ative se seu tronco for por usuário e senha.',
    'trunk.register_string': '',
    'trunk.fromuser': 'Many SIP providers require this. Normally it is the some username',
    'trunk.fromdomain': '',
    'trunk.language': '',
    'trunk.context': 'Somente altere se você souber o que esta fazendo.',
    'trunk.dtmfmode': 'Clique para mais informaçōes|https://www.voip-info.org/asterisk-dtmf/',
    'trunk.insecure': 'Clique para mais informaçōes|https://www.voip-info.org/asterisk-sip-insecure/',
    'trunk.maxuse': 'Número maximo de chamadas simultaneas.',
    'trunk.nat': '',
    'trunk.directmedia': '',
    'trunk.qualify': '',
    'trunk.type': '',
    'trunk.disallow': '',
    'trunk.addparameter': '',
    'trunk.link_sms': 'URL para enviar SMS. Subistituir o número por %number% e o texto por %text%. EX. a URL enviada pelo seu provedor de SMS é http://trunkWebSite.com.br/sendsms.php?usuario=magnus&senha=billing&numero=XXXXXX&texto=SSSSSSSSSSS. altere XXXXXX per %number% e SSSSSSSSSSS por %text% ',
    'trunk.sms_res': 'Deixe em branco para não aguardar resposta do provedor. Ou coloque o texto que deve conter na resposta do provedor para ser considerado ENVIADO.',
    'trunk.port': 'Porta do tronco. Se você precisar usar outra porta diferente da 5060, lembre-se de liberar a porta no IPTABLES.',
    'trunk.encryption': 'Para SRTP encrypted media Precisa instalar certificado no Asterisk',
    'trunk.transport': 'Ativar TLS transport. Precisa instalar certificado no Asterisk',
    //TEMPLATE MAIL
    'templatemail.fromname': '',
    'templatemail.fromemail': '',
    'templatemail.subject': '',
    //SMTPS
    'smtps.host': 'Você precisa verificar se o datacenter não bloqueia as portas usada pelo SMTP',
    'smtps.username': '',
    'smtps.password': '',
    'smtps.port': '',
    'smtps.encryption': '',
    //SMS
    'sms.telephone': 'Número no formato E164',
    'sms.sms': '',
    //SERVICES 
    'services.type': 'Tipo de serviço',
    'services.name': 'Nome para o serviço',
    'services.calllimit': '',
    'services.disk_space': 'Coloque o total de espaço em disco em GB.',
    'services.sipaccountlimit': '',
    'services.moneyfield': '',
    'services.textarea': '',
    //SERVICES USE
    'servicesuse.id': '',
    'servicesuse.price': '',
    'servicesuse.method': '',
    //SERVERS
    'servers.host': 'Este menu é esclusivo para quem usa Slave e Proxy, clique para mais informaçōes|https://magnussolution.com/br/servicos/auto-desempenho/servidor-slave.html',
    'servers.username': '',
    'servers.password': '',
    'servers.port': '',
    'servers.type': '',
    'servers.weight': '',
    'servers.status': '',
    'servers.description': '',
    //REFILL PROVIDER
    'refillprovider.credit': '',
    'refillprovider.description': '',
    'refillprovider.payment': '',
    //REFILL
    'refill.credit': 'Valor da recarga',
    'refill.description': '',
    'refill.payment': 'Esta opção é somente para seu controle. O crédito será liberado para o cliente mesmo colocando como NÃO',
    'refill.invoice_number': '',
    //RATE CALL SHOP
    'ratecallshop.dialprefix': '',
    'ratecallshop.destination': '',
    'ratecallshop.buyrate': '',
    'ratecallshop.minimo': '',
    'ratecallshop.block': '',
    'ratecallshop.minimal_time_charge': '',
    //RATE
    'rate.id_plan': 'O plano que você quer adiconar esta tarifa.',
    'rate.id_prefix': 'Selecione o profixo que quer criar a tarifa',
    'rate.id_trunk': 'Escolha qual o tronco que será usado para esta tarifa',
    'rate.buyrate': 'Preco de custo por minuto',
    'rate.buyrateinitblock': 'Tempo minimo em segundos para tarifar a compra. Ex, se colocar 30, qualquer chamada que durar menos de 30 segundos, será cobrado 30 segundos.',
    'rate.buyrateincrement': 'Bloco de quantos em quantos segundos ira cobrar apos o tempo minimo. Ex: se colocar 6, quer dizer que sempre vai arredondar de 6 em 6 segundos, ou seja, uma chamada durou 32s, vai cobrar 36s.',
    'rate.minimal_time_buy': 'Tempo minimo para tarifar. Se colocar 3, so vai tarifar chamadas que o tempo for => que 3 segundos',
    'rate.rateinitial': 'Preço de venda por minuto para este destino',
    'rate.initblock': 'Tempo minimo em segundos para tarifar a venda. Ex, se colocar 30, qualquer chamada que durar menos de 30 segundos, será cobrado 30 segundos.',
    'rate.billingblock': 'Bloco de quantos em quantos segundos ira cobrar apos o tempo minimo. Ex: se colocar 6, quer dizer que sempre vai arredondar de 6 em 6 segundos, ou seja, uma chamada durou 32s, vai cobrar 36s.',
    'rate.minimal_time_charge': 'Tempo minimo para tarifar. Se colocar 3, so vai tarifar chamadas que o tempo for => que 3 segundos',
    'rate.additional_grace': 'Tempo para adicionar na duração da chamada. EX. se colocar 10, será adicionar 10 segundos no tempo de todas as chamadas, isso afeta a tarifação.',
    'rate.package_offer': 'Ative esta opção se você quer que esta tarifa seja usada nos pacotes grátis',
    'rate.status': '',
    //QUEUE MEMBER
    'queuemember.queue_name': '',
    'queuemember.interface': '',
    'queuemember.paused': '',
    //QUEUE
    'queue.name': '',
    'queue.language': 'Idioma para os audios da fila de espera',
    'queue.strategy': '',
    'queue.ringinuse': 'Chamar ou não agentes da fila que estejam em chamada.',
    'queue.timeout': 'Por quanto tempo deve ficar chamadando um agente',
    'queue.retry': 'Tempo em segundos para tentar chamadas outro agente caso o anterior não atender',
    'queue.wrapuptime': 'Intervalo de tempo em segundos que o agente podera receber outra chamada',
    'queue.weight': 'Importancia desta fila. Por exemplo, você tem o memos agente em 2 filas, e chega 12 chamadas ao mesmo tempo, o Asterisk vai enviar a chamada da fila com maior importancia para o agente.',
    'queue.periodic-announce': 'Audio para os anuncios. Você pode colocar mais de um audio, separando por  (,). Estes audios devem estar no diretorio /var/lib/asterisk/sounds/',
    'queue.periodic-announce-frequency': 'Frequancia que deve executar os anuncios.',
    'queue.announce-position': 'Informar a posiçao que a pessoa se encontra na fila',
    'queue.announce-holdtime': 'Deveria ser incluido no anuncio da posiçao a estimativa de espera?',
    'queue.announce-frequency': 'A cada quantos segundos deve informar a posiçao. Deixe em 0 para desativar o anuncio de posiçao.',
    'queue.joinempty': 'Permitir novas chamadas quando não tiver agente disponivel para atender a chamada',
    'queue.leavewhenempty': 'Desligar as chamadas em espera quando não tiver mais agente livres',
    'queue.ring_or_moh': '',
    'queue.musiconhold': '',
    //PROVIDER
    'provider.provider_name': 'Nome do provedor. Provedor é a empresa que você compra os minutos. O mesmo provedor pode ter varios troncos',
    'provider.credit': 'Quanto você tem de crédito com o provedor? Este campo é opcional.',
    'provider.credit_control': '------------ATENÇÃO------------.Se ativar esta opção e o provedor ficar com crédito = ou < que zero, os troncos deste provedor não aceitaram mais chamada.',
    'provider.description': '',
    //PREFIX
    'prefix.prefix': 'Prefixo. Prefixo serão usados para criar as tarifas. EX. 5511.',
    'prefix.destination': 'Nome do destino. EX: Brasil SP',
    //PLAN
    'plan.name': '',
    'plan.tariff_limit': 'Esta opção limita o select no banco de dados. Deixe em 1, a menos que você tenha mais de 1 prefixo igual no mesmo plano, ai você muda para a quantidade maxima de prefixos iguais no mesmo plano.',
    'plan.lcrtype': 'Como será escolhido a tarifa, para caso você tiver mais de uma tarifa para o mesmo prefixo.',
    'plan.signup': 'Disponibilizar este plano no formulário de registro. Se tiver somente 1 plano os clientes que se registrarem vão usar este plano, se tiver mais de 1, ai o cliente podera escolher. É necessário ter pelo menos 1 plano com esta opção ativada para funcionar o registro.',
    'plan.ini_credit': 'Quanto de crédito você quer dar para clientes que se registram atraves do formulário de registro.',
    'plan.play_audio': 'Executar audios para os cliente deste plano ou mandar somente erro? Por exemplo os auidos que acabou o crédito.',
    'plan.portabilidadeMobile': 'Somente ative se você for usar a consulta de portabilidade. Pode saber mais no site http://portabilidadecelular.com|http://portabilidadecelular.com',
    'plan.portabilidadeFixed': 'Somente ative se você for usar a consulta de portabilidade. Pode saber mais no site http://portabilidadecelular.com|http://portabilidadecelular.com',
    'plan.techprefix': 'TechPrefix é como uma senha para o cliente poder usar mais de uma plano. Por exemplo, digamos que você tem 3 tipos de planos,GSM, TDM e CLI, e quer deixar seu cliente escolher qual plano ele deseja usar. Então coloque techprefix nos planos e solicite ai seu cliente que para usar cada um dos planos ele deve usar techprefix diferente.',
    //PHONE NUMBER
    'phonenumber.number': 'Nümero para enviar o torpedo/sms. Deve ser usado sempre no formato DDI+DDD+número',
    'phonenumber.name': 'Nome do dono do número, usado para TTS ou SMS',
    'phonenumber.city': '',
    'phonenumber.status': 'MagnusBilling somente tenta enviar quando o status esta ativo. Quando a chamada é enviada para seu provedor, o número fica com estado pendente. Se a chamada é completada, o estado muda para enviado, caso contrario ficara como pendente. Você pode usar o botão reprocessar para reativar os número que estão com estado pendente.',
    'phonenumber.info': '',
    //PHONE BOOK
    'phonebook.name': '',
    'phonebook.status': '',
    'phonebook.description': '',
    //OFFER USE
    'offeruse.month_payed': '',
    'offeruse.reservationdate': '',
    //OFFER CDR
    'offercdr.used_secondes': '',
    'offercdr.date_consumption': '',
    //OFFER
    'offer.label': '',
    'offer.packagetype': '',
    'offer.freetimetocall': '',
    'offer.billingtype': '',
    'offer.price': '',
    //METHOD PAY
    'methodpay.payment_method': '',
    'methodpay.show_name': 'Nome que será mostrado no painel do cliente',
    'methodpay.id_user': '',
    'methodpay.country': 'Somente para referencia',
    'methodpay.active': 'Ative se quiser deixar disponivel para os clientes',
    'methodpay.min': 'Valor minimo que deseja aceitar',
    'methodpay.max': 'Valor maximo que deseja aceitar',
    'methodpay.username': '',
    'methodpay.url': '',
    'methodpay.fee': '',
    'methodpay.boleto_banco': '',
    'methodpay.boleto_convenio': '',
    'methodpay.boleto_agencia': '',
    'methodpay.boleto_conta_corrente': '',
    'methodpay.boleto_inicio_nosso_númeroa': '',
    'methodpay.boleto_carteira': '',
    'methodpay.boleto_taxa': '',
    'methodpay.boleto_instrucoes': '',
    'methodpay.boleto_nome_emp': '',
    'methodpay.boleto_end_emp': '',
    'methodpay.boleto_cidade_emp': '',
    'methodpay.boleto_estado_emp': '',
    'methodpay.boleto_cpf_emp': '',
    'methodpay.pagseguro_TOKEN': '',
    'methodpay.P2P_CustomerSiteID': '',
    'methodpay.P2P_KeyID': '',
    'methodpay.P2P_Passphrase': '',
    'methodpay.P2P_RecipientKeyID': '',
    'methodpay.P2P_tax_amount': '',
    'methodpay.client_id': '',
    'methodpay.client_secret': '',
    //LOG USERS
    'logusers.id_log_actions': '',
    'logusers.ip': '',
    'logusers.description': '',
    //IVR
    'ivr.name': '',
    'ivr.monFriStart': 'Hora que inicia o horario de atendimento semanal',
    'ivr.monFriStop': 'Hora que finaliza o horario de atendimento semanal',
    'ivr.satStart': 'Hora que inicia o horario de atendimento no sabado',
    'ivr.satStop': 'Hora que finaliza o horario de atendimento no sabado',
    'ivr.sunStart': 'Hora que inicia o horario de atendimento no domingo',
    'ivr.sunStop': 'Hora que finaliza o horario de atendimento no domingo',
    'ivr.workaudio': 'Audio para executar dentro dos horarios de atendimento',
    'ivr.noworkaudio': 'Audio para executar fora de atendimento',
    'ivr.direct_extension': '',
    //IAX
    'iax.username': '',
    'iax.secret': '',
    'iax.callerid': '',
    'iax.disallow': '',
    'iax.allow': '',
    'iax.host': '',
    'iax.nat': '',
    'iax.context': '',
    'iax.qualify': '',
    'iax.dtmfmode': '',
    'iax.insecure': '',
    'iax.type': '',
    'iax.calllimit': '',
    //GROUP USER GROUP
    'groupusergroup.name': '',
    //GROUP USER
    'groupuser.id': '',
    'groupuser.name': '',
    //FIREWALL
    'firewall.ip': '',
    'firewall.action': '',
    'firewall.description': '',
    //DID USE
    'diduse.reservationdate': '',
    //DID DESTINATION
    'diddestination.id_did': 'Selecione o DID para criar o novo destino',
    'diddestination.activated': '',
    'diddestination.priority': 'Você pode criar ate 5 destino para o mesmo DID. Se a chamada não completa no 1º tenta o 2º, ate completar. ',
    'diddestination.voip_call': '',
    'diddestination.destination': '',
    'diddestination.id_ivr': '',
    'diddestination.id_queue': '',
    'diddestination.id_sip': '',
    //DID
    'did.did': 'O número extamente como chega no Asterisk.',
    'did.connection_charge': 'Custo de ativaçao. ESte custo será descontado do cliente somente no momento que o DID é vinculado ao usuário.',
    'did.fixrate': 'Custo mensal. Este valor será descontado automaticamente todos os meses do saldo do cliente. Se o cliente não tiver crédito o DID é cancelado automaticamente.',
    'did.activated': '',
    'did.connection_sell': 'Este é o valor que será cobrado em cada chamada, simplismente por atender a chamada.',
    'did.minimal_time_charge': 'Tempo minimo para tarifar o DID. Ex. Se colocar 3, qualquer chamada com tempo menor que 3 não será tarifado.',
    'did.initblock': 'Tempo minimo em segundos para tarifar. Ex, se colocar 30, qualquer chamada que durar menos de 30 segundos, será cobrado 30 segundos.',
    'did.increment': 'Bloco de quantos em quantos segundos ira cobrar apos o tempo minimo. Ex: se colocar 6, quer dizer que sempre vai arredondar de 6 em 6 segundos, ou seja, uma chamada durou 32s, vai cobrar 36s.',
    'did.charge_of': '',
    'did.calllimit': 'Limite de chamadas simultâneas para este DID',
    'did.expression_1': 'Esta é um REGEX(Expressão regular) para tarifar o DID conforme o número de quem liga para o DID, CallerID. Ex. Se você ligar para o DID e seu número for 51988445566, e você quer cobrar 0.1 por minuto quando o número iniciar com 2 digitos seguidos de um 9, que seria um celular no Brasil, é so colocar o REGEX ^\\d\\d9, e o preço de venda 0.1. Click para ir ao site que testa REGEX.|https://regex101.com',
    'did.selling_rate_1': 'Preço por minuto a ser cobrado se validar a REGEX acima',
    'did.block_expression_1': 'Se colocar como SIM, e o número de quem ligou se o número for validado com a REGEX acime, a chamada será desligada imeditamente.',
    'did.send_to_callback_1': 'Envia a chamada para CallBack se o número for  validado com a REGEX acime, a chamada será desligada imeditamente.',
    'did.expression_2': 'Igual a REGEX 1. Você pode usar ate 3 REGEX para diferenciara ate 3 tipos de tarifas para seu DID',
    'did.selling_rate_2': '',
    'did.block_expression_2': '',
    'did.send_to_callback_2': '',
    'did.expression_3': 'Igual a REGEX 1. Você pode usar ate 3 REGEX para diferenciara ate 3 tipos de tarifas para seu DID',
    'did.selling_rate_3': '',
    'did.block_expression_3': '',
    'did.send_to_callback_3': '',
    'did.cbr': 'Ativa o CallBack Pro.',
    'did.cbr_ua': 'Executar um audio',
    'did.cbr_em': 'Executar o audio antes de antender. O provedor do DID precisa aceitar EarlyMedia.',
    'did.TimeOfDay_monFri': 'Ex: sua trabalha de 09 as 12 e de 14 as 18 horas, e dentro deste horario você quer executar o callback e retornar a chamada para a pessoa que ligou, entao coloque 09:00-12:00|14:00-18:00, os intervalos sao separados por |',
    'did.TimeOfDay_sat': 'Mesma regra so que para sabados',
    'did.TimeOfDay_sun': 'Mesma regra so que para domingos',
    'did.workaudio': 'Audio que será executado quando alguem ligar dentro do horario de atendimento.',
    'did.noworkaudio': 'Audio que será executado quando ligar fora do horario de atendimento',
    'did.cbr_total_try': 'Quantas vezes o sistema vai tentar retornar para o cliente?',
    'did.cbr_time_try': 'Intervalo de tempo entre cada tentativa, em minutos.',
    //CONFIGURATION
    'configuration.config_value': '',
    'configuration.config_description': '',
    //CAMPAIGN POLL INFO
    'campaignpollinfo.number': '',
    'campaignpollinfo.resposta': '',
    'campaignpollinfo.obs': '',
    //CAMPAIGN POLL
    'campaignpoll.name': '',
    'campaignpoll.repeat': '',
    'campaignpoll.request_authorize': '',
    'campaignpoll.digit_authorize': '',
    'campaignpoll.description': '',
    'campaignpoll.arq_audio': '',
    'campaignpoll.option0': '',
    'campaignpoll.option1': '',
    'campaignpoll.option2': '',
    'campaignpoll.option3': '',
    'campaignpoll.option4': '',
    'campaignpoll.option5': '',
    'campaignpoll.option6': '',
    'campaignpoll.option7': '',
    'campaignpoll.option8': '',
    'campaignpoll.option9': '',
    //CAMPAIGN
    'campaign.id_plan': 'Que plano será usado para tarifar as chamadas desta cmapanha, pode ser um plano diferente do plano cadastrado na conta do cliente',
    'campaign.name': '',
    'campaign.status': '',
    'campaign.startingdate': 'Data que a campanha será considerada ativa.',
    'campaign.expirationdate': 'Data que a campanha não será mais considerada ativa, mesmo ser tiver números ativos',
    'campaign.type': '',
    'campaign.audio': 'Somente usado se o tipo de campanha for de voz. O audio precisa ser compativel com Asterisk. Recomendamos usar GSM. Se usar WAV, tem que ser mono e 8k hz',
    'campaign.audio_2': 'Se você usar TTS, o nome do número será executado entre o audio 1 e 2',
    'campaign.restrict_phone': 'Ativando esta opção o MagnusBilling vai verificar se o número que será enviado a chamada esta cadastrado no menu Números Bloqueados, se tiver, o sistema vai mudar o status do número para bloqueado e não vai enviar a chamada.',
    'campaign.digit_authorize': 'Você quer enviar o cliente para algum destino apos o audio? Ex. Se o cliente digitar 1 transferir para uma conta SIP, entao coloque aqui o número 1, e abaixo selecione SIP, e abaixo a conta VOIP que quer enviar a chamada. Deixe em -1 para desativar esta função.',
    'campaign.id_phonebook': 'Selecione as agendas que esta campanha vai usar.',
    'campaign.daily_start_time': '',
    'campaign.daily_stop_time': '',
    'campaign.monday': '',
    'campaign.tuesday': '',
    'campaign.wednesday': '',
    'campaign.thursday': '',
    'campaign.friday': '',
    'campaign.saturday': '',
    'campaign.sunday': '',
    'campaign.frequency': 'Quantas chamadas o sistema pode gerar por minuto nesta campanha',
    'campaign.nb_callmade': 'Tempo do audio da campanha, usado para controlar quantidade de chamadas considerada sucesso',
    'campaign.enable_max_call': 'Se ativado, MagnusBilling vai verificar quantas chamadas ja foram realizadas e tiveram a duração igual ao tempo do audio, se a quantidade for igual ou mais que o campo abaixo, a campanha é desativada',
    'campaign.secondusedreal': 'Maximo de chamadas completas. Precisa ativar o campo acima',
    'campaign.description': 'Texto do SMS. Você pode usar a variavel %name% onde você deseja usar o nome do dono do número',
    'campaign.tts_audio': '',
    'campaign.tts_audio2': '',
    'campaign.asr_options': '',
    //CALL SUMMARY CALL SHOP
    'callsummarycallshop.sumsessiontime': '',
    'callsummarycallshop.sumprice': '',
    'callsummarycallshop.sumlucro': '',
    'callsummarycallshop.sumbuycost': '',
    'callsummarycallshop.sumnbcall': '',
    //CALL SUMMARY BY MONTH
    'callsummarybymonth.sumsessiontime': '',
    'callsummarybymonth.sumsessionbill': '',
    'callsummarybymonth.sumbuycost': '',
    'callsummarybymonth.sumlucro': '',
    'callsummarybymonth.sumnbcall': '',
    //CALL SUMMARY
    'callsummary.sumsessiontime': 'Tempo total em minutos',
    'callsummary.sumsessionbill': 'Total de venda',
    'callsummary.sumbuycost': 'Total de compra',
    'callsummary.sumlucro': 'Lucro total',
    'callsummary.sumnbcall': '',
    //CALLBACK
    'callback.exten': '',
    'callback.status': '',
    //CALL
    'call.calledstation': '',
    'call.sessiontime': '',
    'call.buycost': '',
    'call.sessionbill': '',
    'call.agent_bill': '',
    //BOLETO 
    'boleto.payment': '',
    'boleto.status': '',
    'boleto.vencimento': '',
    'boleto.description': '',
});
