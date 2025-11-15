import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Política de Cookies — Korvex Platform",
  description: "Saiba como a Korvex utiliza cookies e tecnologias semelhantes em seus canais digitais.",
};

export default function PoliticaCookies() {
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
          <h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ fontWeight: 800 }}
          >
            Política de Cookies
          </h1>
          <p className="mt-4 text-lg text-[#94a3b8]">
            Última atualização:{" "}
            {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-[#94a3b8]">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              1. Introdução
            </h2>
            <p>
              Esta Política de Cookies explica como a Korvex Sistemas (“Korvex”, “nós”) utiliza cookies e tecnologias similares
              para reconhecer visitantes, entender como nossas soluções são utilizadas e oferecer experiências mais relevantes
              em nossos sites, landing pages e plataformas digitais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              2. O que são cookies
            </h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador ao visitar um site. Eles são amplamente
              utilizados para que os sites funcionem corretamente, lembrem preferências e forneçam informações às equipes de
              marketing, produto e tecnologia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              3. Tipos de cookies que utilizamos
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Cookies estritamente necessários:</strong> garantem o funcionamento básico do site,
                autenticação de sessões e segurança da navegação.
              </li>
              <li>
                <strong className="text-white">Cookies de desempenho:</strong> coletam dados anônimos sobre uso das páginas, erros
                e métricas para otimização de velocidade e estabilidade.
              </li>
              <li>
                <strong className="text-white">Cookies funcionais:</strong> lembram preferências como idioma, formulários e
                configurações personalizadas para facilitar seu retorno.
              </li>
              <li>
                <strong className="text-white">Cookies de marketing:</strong> possibilitam campanhas segmentadas, remarketing e
                mensuração de conversões em canais como Google Ads e Meta Ads.
              </li>
              <li>
                <strong className="text-white">Cookies analíticos:</strong> ferramentas como Google Analytics, Meta Pixel ou
                plataformas próprias que ajudam a entender jornadas e aperfeiçoar nossos serviços.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              4. Como utilizamos os cookies
            </h2>
            <p className="mb-3">Os cookies são usados para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manter sessões autenticadas em áreas restritas e ambientes do cliente</li>
              <li>Salvar preferências de contato, idioma e formulários enviados anteriormente</li>
              <li>Medir a performance de campanhas e compreender quais páginas geram mais interesse</li>
              <li>Produzir relatórios agregados de uso para evolução do produto e melhoria do suporte</li>
              <li>Detectar atividades suspeitas e proteger nossos ambientes de abuso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              5. Cookies de terceiros
            </h2>
            <p>
              Alguns cookies podem ser configurados por parceiros e serviços que integramos, como provedores de hospedagem,
              analytics, atendimento ou automação de marketing. Esses parceiros possuem suas próprias políticas de privacidade
              e cookies, que recomendamos consultar para entender como tratam seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              6. Gestão de preferências
            </h2>
            <p className="mb-3">
              Você pode controlar e/ou apagar cookies a qualquer momento. A maioria dos navegadores permite:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ver quais cookies estão ativos em seu dispositivo</li>
              <li>Bloquear todos os cookies ou apenas de sites específicos</li>
              <li>Excluir cookies ao fechar o navegador</li>
            </ul>
            <p className="mt-3">
              Para ajustar suas preferências, consulte as configurações do seu navegador (Chrome, Firefox, Safari, Edge, entre
              outros) ou utilize extensões dedicadas de gerenciamento de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              7. Consequências da desativação
            </h2>
            <p>
              A desativação de cookies essenciais pode comprometer recursos importantes do site, impedir o envio de formulários
              ou limitar o acesso a áreas autenticadas. Cookies analíticos e de marketing, quando desativados, podem reduzir a
              personalização e a precisão dos conteúdos apresentados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              8. Atualizações desta política
            </h2>
            <p>
              Podemos revisar esta Política de Cookies periodicamente para refletir mudanças tecnológicas, legais ou operacionais.
              Publicaremos a nova versão nesta página e ajustaremos a data de atualização sempre que houver alterações relevantes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
              9. Contato
            </h2>
            <p className="mb-3">
              Se você tiver dúvidas sobre esta Política de Cookies ou sobre o uso de dados em nossos produtos, fale com nossa
              equipe:
            </p>
            <div className="bg-white/5 rounded-2xl border border-white/20 p-6 space-y-2">
              <p>
                <strong className="text-white">Korvex Sistemas</strong>
              </p>
              <p>E-mail: contato@korvexsistemas.com.br</p>
              <p>Telefone: (51) 98033-9085</p>
              <p>Caxias do Sul, RS - Brasil</p>
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


