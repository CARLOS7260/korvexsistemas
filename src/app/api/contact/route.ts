import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, whatsapp, mensagem } = body;

    // Validação básica
    if (!nome || !email || !whatsapp || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // Configuração do e-mail
    const toEmail = process.env.CONTACT_EMAIL || 'contato@korvexsistemas.com.br';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@korvexsistemas.com.br';
    const subject = `Nova solicitação de proposta - ${nome}`;

    // Formatação do corpo do e-mail
    const emailBody = `
Nova solicitação de proposta personalizada recebida através do site.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DADOS DO CLIENTE:

👤 Nome: ${nome}
📧 E-mail: ${email}
📱 WhatsApp: ${whatsapp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MENSAGEM:

${mensagem}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Data/Hora: ${new Date().toLocaleString('pt-BR', { 
  timeZone: 'America/Sao_Paulo',
  dateStyle: 'full',
  timeStyle: 'long'
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este e-mail foi enviado automaticamente pelo formulário de contato do site.
Por favor, responda ao cliente em até 30 minutos conforme prometido.

    `.trim();

    // HTML do e-mail
    const emailHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Solicitação de Proposta</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Nova Solicitação de Proposta</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
    <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
      📋 Dados do Cliente
    </h2>
    
    <table style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">👤 Nome:</td>
        <td style="padding: 8px 0; color: #1f2937;">${nome}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">📧 E-mail:</td>
        <td style="padding: 8px 0; color: #1f2937;">
          <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">📱 WhatsApp:</td>
        <td style="padding: 8px 0; color: #1f2937;">
          <a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color: #25d366; text-decoration: none;">${whatsapp}</a>
        </td>
      </tr>
    </table>

    <h2 style="color: #1f2937; margin-top: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
      💬 Mensagem
    </h2>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
      <p style="margin: 0; color: #374151; white-space: pre-wrap;">${mensagem}</p>
    </div>

    <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 20px;">
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        📅 <strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR', { 
          timeZone: 'America/Sao_Paulo',
          dateStyle: 'full',
          timeStyle: 'long'
        })}
      </p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 12px; margin: 0;">
        Este e-mail foi enviado automaticamente pelo formulário de contato do site.<br>
        Por favor, responda ao cliente em até 30 minutos conforme prometido.
      </p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Enviar e-mail usando a API do Resend (recomendado)
    // Para configurar: crie conta em https://resend.com e adicione a chave API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: toEmail,
            subject: subject,
            html: emailHTML,
            text: emailBody,
            reply_to: email, // Permite responder diretamente ao cliente
          }),
        });

        const resendData = await resendResponse.json();

        if (!resendResponse.ok) {
          console.error('Erro Resend:', resendData);
          throw new Error(resendData.message || 'Erro ao enviar e-mail via Resend');
        }
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        // Continua mesmo se o e-mail falhar, para não bloquear o fluxo do WhatsApp
        // Você pode remover este try-catch se quiser que falhe completamente
      }
    } else {
      // Log para desenvolvimento quando Resend não está configurado
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 E-mail que seria enviado (Resend não configurado):');
        console.log('Para:', toEmail);
        console.log('Assunto:', subject);
        console.log('Corpo:', emailBody);
        console.log('\n💡 Para ativar o envio de e-mail, configure RESEND_API_KEY no .env.local');
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulário enviado com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { error: 'Erro ao processar formulário. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}

