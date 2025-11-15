import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Política de Privacidade — Korvex Platform",
  description: "Política de privacidade e proteção de dados da Korvex Platform.",
};

export default function PoliticaPrivacidade() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-[#f3f4f6]">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] transition hover:text-white"
          >
            ← Voltar para o site
          </Link>
        </div>

        <div className="mb-8">
          <Image
            src="/korvex-3d-06.png"
            alt="Korvex"
            width={160}
            height={120}
            className="h-auto w-40 mb-6"
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontWeight: 800 }}>
            Política de Privacidade
          </h1>
          <p className="mt-4 text-lg text-[#94a3b8]">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-[#94a3b8]">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              1. Introdução
            </h2>
            <p>
              A Korvex Sistemas ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e os dados pessoais
              de nossos usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas
              informações quando você utiliza nossos serviços de desenvolvimento de software, plataformas desenvolvidas pela Korvex ou entra em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              2. Informações que Coletamos
            </h2>
            <p className="mb-3">Coletamos as seguintes categorias de informações:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Dados de cadastro e contato:</strong> nome, e-mail, telefone, nome da empresa, CNPJ, cargo, área de atuação
              </li>
              <li>
                <strong className="text-white">Dados de uso:</strong> logs de acesso, ações realizadas em sistemas desenvolvidos por nós, dados
                de navegação, preferências de uso
              </li>
              <li>
                <strong className="text-white">Dados comerciais e operacionais:</strong> informações sobre processos de negócio, necessidades específicas, dados de sistemas existentes (quando necessário para desenvolvimento de integrações)
              </li>
              <li>
                <strong className="text-white">Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional, informações de dispositivos
              </li>
              <li>
                <strong className="text-white">Dados de comunicação:</strong> histórico de conversas, solicitações de suporte, feedback e avaliações
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              3. Como Usamos suas Informações
            </h2>
            <p className="mb-3">Utilizamos seus dados pessoais para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Desenvolver e personalizar sistemas de software conforme suas necessidades</li>
              <li>Fornecer e melhorar nossos serviços de desenvolvimento</li>
              <li>Processar propostas comerciais, contratos e gerenciar projetos</li>
              <li>Enviar comunicações sobre projetos, serviços e atualizações</li>
              <li>Fornecer suporte técnico, manutenção e atendimento ao cliente</li>
              <li>Realizar análises e melhorias em sistemas desenvolvidos</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança de sistemas e dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              4. Compartilhamento de Informações
            </h2>
            <p className="mb-3">
              Não vendemos seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Com prestadores de serviços que nos auxiliam na operação (sob acordos de confidencialidade)</li>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos, propriedade ou segurança</li>
              <li>Com seu consentimento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              5. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não
              autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, controles de acesso e monitoramento
              contínuo de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              6. Seus Direitos (LGPD)
            </h2>
            <p className="mb-3">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Revogar seu consentimento</li>
              <li>Ser informado sobre compartilhamento de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              7. Retenção de Dados
            </h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política,
              salvo quando a retenção for exigida ou permitida por lei. Após o término do período de retenção, os dados serão
              excluídos ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              8. Cookies e Tecnologias Similares
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e
              personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu
              navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              9. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas
              por e-mail ou através de aviso na plataforma. A data da última atualização está indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              10. Contato
            </h2>
            <p className="mb-3">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="bg-white/5 rounded-2xl border border-white/20 p-6 space-y-2">
              <p>
                <strong className="text-white">Korvex Sistemas</strong>
              </p>
              <p>E-mail: contato@korvexsistemas.com.br</p>
              <p>Telefone: (51) 98033-9085</p>
              <p>Caxias do Sul, RS-Brasil</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2563eb]"
          >
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}

