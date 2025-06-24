import './index.css';

export default function App() {
  return (
    <div className='bg-black text-white min-h-screen font-sans'>
      <header className='p-6 flex justify-between items-center border-b border-gray-800'>
        <img
          src="/logo.png"
          alt="ShadowSpectra logo"
          className="h-28 md:h-36 lg:h-44 animate-logoSpectra"
        />
        <nav className='space-x-4'>
          <a href='#quem' className='hover:underline'>Quem Somos</a>
          <a href='#bast' className='hover:underline'>B.A.S.T</a>
          <a href='#nemesis' className='hover:underline'>N.E.M.E.S.I.S</a>
          <a href='#servicos' className='hover:underline'>Serviços</a>
          <a href='#contato' className='hover:underline'>Contato</a>
        </nav>
      </header>
      <section className='p-10 text-center'>
        <h2 className='text-4xl font-bold mb-4'>Defendendo o amanhã, hoje.</h2>
        <p className='text-lg text-gray-400'>Consultoria em Cibersegurança Estratégica para Empresas que não aceitam vulnerabilidades.</p>
      </section>
      <section id='quem' className='p-10 bg-gray-900'>
        <h3 className='text-2xl font-semibold mb-4'>Quem Somos</h3>
        <p className='text-gray-300'>Somos a ShadowSpectra, especialistas em guerra cibernética preventiva. Atuamos antes que o caos aconteça, combinando táticas de Red Team e Blue Team com inteligência real de ameaças.</p>
      </section>
      <section id='bast' className='p-10'>
        <h3 className='text-2xl font-semibold mb-4 text-blue-400'>B.A.S.T – Blue Active Security Team</h3>
        <p className='text-gray-300'>Defesa proativa 24/7. Monitoramento, resposta e contenção. Blindagem cibernética de ponta.</p>
      </section>
      <section id='nemesis' className='p-10 bg-gray-900'>
        <h3 className='text-2xl font-semibold mb-4 text-red-500'>N.E.M.E.S.I.S – Núcleo Estratégico de Simulação Invasiva</h3>
        <p className='text-gray-300'>Ataques simulados reais. Testes de penetração, engenharia social, guerra digital encenada.</p>
      </section>
      <section id='servicos' className='p-10'>
        <h3 className='text-2xl font-semibold mb-4 text-green-400'>Serviços</h3>
        <ul className='list-disc pl-6 text-gray-300'>
          <li>Auditoria de Segurança</li>
          <li>Simulações Red Team/Blue Team</li>
          <li>Monitoramento com SIEM (Wazuh)</li>
          <li>Resposta a Incidentes</li>
          <li>Consultoria para PMEs</li>
        </ul>
      </section>
      <section id='contato' className='p-10 bg-gray-900 text-center'>
        <h3 className='text-2xl font-semibold mb-4 text-yellow-400'>Contato</h3>
        <p className='text-gray-300 mb-2'>contato@shadowspectra.com</p>
        <p className='text-gray-400'>Whatsapp: (61) 9XXXX-XXXX</p>
      </section>
      <footer className='p-6 text-center border-t border-gray-800 text-gray-500'>
        &copy; {new Date().getFullYear()} ShadowSpectra. Todos os direitos reservados.
      </footer>
    </div>
  );
}
