import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Termos de Uso — Korvex Platform",
  description: "Termos e condições de uso da plataforma Korvex.",
};

export default function TermosUso() {
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
            Termos de Uso
          </h1>
          <p className="mt-4 text-lg text-[#94a3b8]">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-[#94a3b8]">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar a plataforma Korvex, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se
              você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              2. Descrição do Serviço
            </h2>
            <p>
              A Korvex Sistemas oferece serviços de desenvolvimento de software sob medida, incluindo criação de sistemas personalizados,
              aplicativos web e mobile, integrações, automações e soluções tecnológicas adaptadas às necessidades específicas de cada cliente.
              Nossos serviços podem ser fornecidos mediante contrato de desenvolvimento, licenciamento de software ou modelo SaaS (Software como Serviço),
              conforme acordado em contrato específico. Os serviços estão sujeitos a disponibilidade, cronograma acordado e manutenção conforme contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              3. Cadastro e Conta de Usuário
            </h2>
            <p className="mb-3">Para contratar nossos serviços ou utilizar sistemas desenvolvidos por nós, você deve:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer informações precisas, completas e atualizadas sobre sua empresa e necessidades</li>
              <li>Manter a segurança de senhas e credenciais de acesso a sistemas desenvolvidos</li>
              <li>Ser responsável por todas as atividades realizadas em sistemas sob sua responsabilidade</li>
              <li>Notificar-nos imediatamente sobre uso não autorizado ou problemas de segurança</li>
              <li>Ter capacidade legal para contratar (ser maior de 18 anos ou representar empresa legalmente constituída)</li>
              <li>Fornecer informações necessárias para o desenvolvimento adequado do projeto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              4. Uso Aceitável
            </h2>
            <p className="mb-3">Você concorda em não:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Utilizar sistemas desenvolvidos pela Korvex para fins ilegais ou não autorizados</li>
              <li>Violar direitos de propriedade intelectual de terceiros ou da Korvex</li>
              <li>Transmitir vírus, malware ou código malicioso através de sistemas desenvolvidos</li>
              <li>Tentar acessar áreas restritas, códigos-fonte ou sistemas não autorizados</li>
              <li>Interferir ou interromper o funcionamento de sistemas desenvolvidos</li>
              <li>Realizar engenharia reversa, descompilar ou copiar código-fonte sem autorização</li>
              <li>Repassar, revender ou sublicenciar sistemas desenvolvidos sem autorização expressa</li>
              <li>Utilizar sistemas para spam, envio de mensagens não solicitadas ou atividades fraudulentas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              5. Propriedade Intelectual
            </h2>
            <p className="mb-3">
              A propriedade intelectual dos sistemas desenvolvidos pela Korvex será definida em contrato específico. Geralmente:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li><strong className="text-white">Sistemas personalizados:</strong> A propriedade pode ser transferida ao cliente conforme contrato, ou mantida pela Korvex com licença de uso</li>
              <li><strong className="text-white">Frameworks e bibliotecas:</strong> Componentes reutilizáveis desenvolvidos pela Korvex permanecem como propriedade da empresa</li>
              <li><strong className="text-white">Marca e identidade:</strong> Logotipos, textos e design da Korvex são de propriedade da empresa</li>
            </ul>
            <p>
              Os termos específicos de propriedade intelectual serão detalhados no contrato de desenvolvimento de cada projeto.
              Você recebe direitos de uso conforme acordado contratualmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              6. Dados e Conteúdo do Cliente
            </h2>
            <p className="mb-3">
              Você mantém todos os direitos sobre os dados e informações fornecidos durante o desenvolvimento ou utilização de sistemas.
              Ao contratar nossos serviços, você nos concede permissão para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Armazenar, processar e utilizar seus dados conforme necessário para desenvolver e manter os sistemas</li>
              <li>Acessar sistemas existentes quando necessário para integrações (mediante autorização prévia)</li>
              <li>Utilizar dados agregados e anonimizados para melhorias técnicas e desenvolvimento de novas funcionalidades</li>
              <li>Realizar backups, testes e garantir a segurança dos dados durante o desenvolvimento</li>
            </ul>
            <p className="mt-3">
              Você é responsável por garantir que possui todos os direitos necessários sobre os dados fornecidos e que não viola
              direitos de terceiros. Comprometemo-nos a manter confidencialidade sobre informações sensíveis do seu negócio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              7. Pagamento e Contratação
            </h2>
            <p className="mb-3">Os serviços são fornecidos mediante contrato específico com as seguintes condições gerais:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Os valores, condições de pagamento e cronograma são definidos em proposta comercial e contrato específico</li>
              <li>O pagamento pode ser único (projeto completo) ou parcelado conforme acordado</li>
              <li>Para serviços recorrentes (SaaS, manutenção), o pagamento é processado conforme plano contratado</li>
              <li>Reembolsos seguem as condições específicas do contrato de cada projeto</li>
              <li>Alterações de escopo podem resultar em ajustes de valores e prazos, mediante aprovação</li>
              <li>O não pagamento pode resultar na suspensão de serviços, retenção de entregas ou rescisão contratual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              8. Disponibilidade e Manutenção
            </h2>
            <p className="mb-3">
              Para sistemas desenvolvidos sob medida, a disponibilidade e manutenção serão definidas em contrato específico:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li><strong className="text-white">Sistemas hospedados pela Korvex:</strong> Nos esforçamos para manter disponibilidade conforme SLA acordado, com manutenções programadas ou de emergência</li>
              <li><strong className="text-white">Sistemas hospedados pelo cliente:</strong> A disponibilidade depende da infraestrutura do cliente; oferecemos suporte técnico conforme contrato</li>
              <li><strong className="text-white">Manutenção:</strong> Pode ser incluída no contrato ou contratada separadamente, conforme acordado</li>
            </ul>
            <p>
              Não seremos responsáveis por interrupções causadas por fatores fora de nosso controle, como falhas de infraestrutura do cliente,
              problemas de conectividade ou força maior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              9. Limitação de Responsabilidade
            </h2>
            <p>
              A plataforma é fornecida "como está" e "conforme disponível". Não garantimos que o serviço atenderá a todos os
              seus requisitos ou estará livre de erros. Nossa responsabilidade é limitada ao valor pago nos últimos 12 meses. Não
              seremos responsáveis por danos indiretos, lucros cessantes ou perda de dados, exceto quando resultantes de
              negligência comprovada de nossa parte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              10. Cancelamento e Encerramento
            </h2>
            <p className="mb-3">
              O cancelamento de serviços segue as condições específicas de cada contrato:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li><strong className="text-white">Projetos de desenvolvimento:</strong> Cancelamento e condições de rescisão são definidos no contrato específico</li>
              <li><strong className="text-white">Serviços recorrentes (SaaS/manutenção):</strong> Pode ser cancelado conforme condições do contrato, geralmente com aviso prévio</li>
              <li><strong className="text-white">Rescisão por parte da Korvex:</strong> Reservamo-nos o direito de suspender ou encerrar serviços em casos de:</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 ml-8">
              <li>Violarem estes Termos de Uso ou contrato específico</li>
              <li>Não efetuarem o pagamento conforme acordado</li>
              <li>Utilizarem sistemas de forma fraudulenta ou abusiva</li>
            </ul>
            <p className="mt-3">
              Após o cancelamento ou encerramento, questões sobre acesso a dados, código-fonte e entregas serão tratadas conforme
              o contrato específico de cada projeto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              11. Modificações dos Termos
            </h2>
            <p>
              Podemos modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas por e-mail
              ou através de aviso na plataforma. O uso continuado do serviço após as modificações constitui aceitação dos novos
              termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              12. Lei Aplicável e Foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de
              Caxias do Sul, RS, renunciando as partes a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              13. Contato
            </h2>
            <p className="mb-3">
              Para questões sobre estes Termos de Uso, entre em contato conosco:
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

