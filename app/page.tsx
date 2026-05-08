export default function Home() {
  const servicios = [
    "Impresión Offset",
    "Impresión Digital",
    "Facturas y Recibos",
    "Tarjetas de Presentación",
    "Brochures y Catálogos",
    "Stickers y Etiquetas",
    "Banners y Lonas",
    "Sellos Personalizados",
    "Encuadernados y Empastados",
    "Papelería Corporativa",
  ];

  const whatsappLink =
    "https://wa.me/50558419143?text=Hola%20quiero%20una%20cotización";

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="bg-white rounded-2xl p-2 shadow-sm">
            <img
              src="/logo-ivatava.png"
              alt="Logo Ivatava"
              className="w-64 object-contain"
            />
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
            Impresión Profesional y Soluciones Creativas
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Ofrecemos soluciones modernas de impresión, diseño y papelería
            corporativa para negocios, estudiantes y emprendedores.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Cotizar Ahora
            </a>

            <a
              href="#servicios"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center text-center p-6">
            <p className="text-gray-500 text-lg">
              Calidad • Diseño • Impresión • Publicidad
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>

            <p className="text-gray-600">
              Atención rápida, calidad profesional y soluciones visuales para
              todo tipo de negocio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-pink-600">
                  {servicio}
                </h3>

                <p className="text-gray-600">
                  Acabados profesionales y excelente atención personalizada.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">
              Dirección
            </h3>

            <p className="text-lg text-gray-700">
              Rotonda Hugo Chávez, 250 mts. arriba
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              WhatsApp
            </h3>

            <p className="text-lg text-gray-700 leading-8">
              5841-9143 <br />
              7763-0289 <br />
              8884-2775 <br />
              8746-8384
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-3xl p-10 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              ¡Cotiza Ahora por WhatsApp!
            </h2>

            <p className="text-gray-100 mb-8">
              Envíanos tu idea, diseño o requerimiento y te responderemos
              rápidamente.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-bold inline-block transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center text-gray-500 border-t">
        © 2026 Impresiones & Librería Ivatava, S.A.
      </footer>
    </main>
  );
}