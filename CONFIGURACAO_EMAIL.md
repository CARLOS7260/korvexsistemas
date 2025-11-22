# 📧 Configuração de Envio de E-mail Automático

O formulário de contato agora envia e-mails automaticamente além de abrir o WhatsApp.

## 🚀 Passo a Passo Completo - Resend

### Passo 1: Criar Conta no Resend

1. Acesse: **https://resend.com**
2. Clique em **"Get Started"** (canto superior direito)
3. Escolha uma das opções:
   - **"Sign up with Google"** (mais rápido)
   - **"Sign up with GitHub"** (se preferir)
   - Ou crie conta com e-mail e senha
4. Confirme seu e-mail se necessário

### Passo 2: Obter API Key

1. Após fazer login, você será redirecionado para o **Dashboard**
2. No menu lateral esquerdo, clique em **"API Keys"**
3. Clique no botão **"Create API Key"**
4. Dê um nome para a chave (ex: "Korvex Site")
5. Selecione as permissões:
   - ✅ **Sending access** (permissão para enviar e-mails)
   - ✅ **Full access** (recomendado para começar)
6. Clique em **"Add"**
7. **IMPORTANTE**: Copie a chave API imediatamente (ela só aparece uma vez!)
   - Formato: `re_xxxxxxxxxxxxxxxxxxxxx`
   - Guarde em local seguro

### Passo 3: Configurar Domínio (Opcional para Teste)

**Para desenvolvimento/teste rápido:**
- Você pode usar o domínio de teste do Resend: `onboarding@resend.dev`
- Funciona imediatamente sem configuração DNS

**Para produção (recomendado):**

1. No menu lateral, clique em **"Domains"**
2. Clique em **"Add Domain"**
3. Digite seu domínio: `korvexsistemas.com.br`
4. Clique em **"Add"**
5. O Resend mostrará os registros DNS que você precisa adicionar:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT - opcional mas recomendado)
6. Acesse o painel do seu provedor de domínio (onde você comprou o domínio)
7. Vá em **DNS / Zone Records**
8. Adicione cada registro conforme mostrado no Resend
9. Aguarde a propagação DNS (pode levar de 5 minutos a 48 horas)
10. No Resend, clique em **"Verify"** para verificar o domínio

### Passo 4: Configurar Variáveis de Ambiente

1. Na raiz do projeto (mesmo nível do `package.json`), crie o arquivo **`.env.local`**
2. Adicione as seguintes variáveis:

```env
# Chave API do Resend (obtida no Passo 2)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# E-mail de destino (onde receber os formulários)
CONTACT_EMAIL=contato@korvexsistemas.com.br

# E-mail remetente
# Para teste: use onboarding@resend.dev
# Para produção: use noreply@korvexsistemas.com.br (após verificar domínio)
FROM_EMAIL=onboarding@resend.dev
```

**Exemplo completo para teste:**
```env
RESEND_API_KEY=re_abc123xyz789
CONTACT_EMAIL=contato@korvexsistemas.com.br
FROM_EMAIL=onboarding@resend.dev
```

**Exemplo para produção (após verificar domínio):**
```env
RESEND_API_KEY=re_abc123xyz789
CONTACT_EMAIL=contato@korvexsistemas.com.br
FROM_EMAIL=noreply@korvexsistemas.com.br
```

### Passo 5: Testar o Envio

1. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Preencha o formulário no site:**
   - Acesse: http://localhost:3000
   - Role até o formulário de contato
   - Preencha todos os campos
   - Clique em "Receber Proposta Personalizada"

3. **Verifique se funcionou:**
   - Você deve ver a mensagem de sucesso
   - Verifique a caixa de entrada de `contato@korvexsistemas.com.br`
   - Verifique também a pasta de spam/lixo eletrônico

4. **Verificar logs (se houver erro):**
   - Abra o console do terminal onde o servidor está rodando
   - Procure por mensagens de erro ou sucesso

### Passo 6: Verificar E-mails Enviados

1. No painel do Resend, vá em **"Emails"** (menu lateral)
2. Você verá todos os e-mails enviados
3. Pode ver:
   - Status (Delivered, Bounced, etc.)
   - Data/hora do envio
   - Destinatário
   - Assunto

### 🎯 Resumo Rápido

1. ✅ Criar conta em https://resend.com
2. ✅ Obter API Key em "API Keys"
3. ✅ Criar arquivo `.env.local` com a chave
4. ✅ Reiniciar servidor (`npm run dev`)
5. ✅ Testar formulário
6. ✅ Verificar e-mail recebido

### 💡 Dicas Importantes

- **Plano Gratuito**: Até 3.000 e-mails/mês e 100 e-mails/dia
- **Domínio de Teste**: `onboarding@resend.dev` funciona imediatamente
- **Verificação DNS**: Pode levar até 48h para propagar
- **Spam**: Configure SPF, DKIM e DMARC para melhor entregabilidade
- **Limite**: O plano gratuito é suficiente para começar

### Opção 2: Outros Serviços

Você pode adaptar a API para usar:
- **SendGrid** (https://sendgrid.com)
- **Mailgun** (https://mailgun.com)
- **AWS SES** (https://aws.amazon.com/ses/)
- **Nodemailer com SMTP** (Gmail, Outlook, etc.)

## 📋 Como Funciona

1. **Usuário preenche o formulário**
2. **Dados são validados**
3. **E-mail é enviado automaticamente** para `contato@korvexsistemas.com.br`
4. **WhatsApp é aberto** com a mensagem pré-formatada
5. **Formulário é limpo** após sucesso

## 📬 Formato do E-mail

O e-mail enviado contém:
- ✅ Nome completo do cliente
- ✅ E-mail do cliente (com link para responder)
- ✅ WhatsApp do cliente (com link direto)
- ✅ Mensagem completa
- ✅ Data e hora do envio
- ✅ Formatação HTML profissional

## 🔧 Testando

1. Preencha o formulário no site
2. Verifique se o e-mail chegou em `contato@korvexsistemas.com.br`
3. Verifique os logs do console (em desenvolvimento) se houver erros

## ⚠️ Troubleshooting

**E-mail não está sendo enviado:**
- Verifique se `RESEND_API_KEY` está configurada corretamente
- Verifique se o domínio está verificado no Resend
- Verifique os logs do console para erros

**E-mail vai para spam:**
- Configure SPF, DKIM e DMARC no DNS
- Use um domínio verificado no Resend
- Evite palavras que acionam filtros de spam

## 📝 Notas

- O envio de e-mail é **assíncrono** e não bloqueia o fluxo do WhatsApp
- Se o e-mail falhar, o WhatsApp ainda será aberto
- Em desenvolvimento, os dados são logados no console se Resend não estiver configurado

