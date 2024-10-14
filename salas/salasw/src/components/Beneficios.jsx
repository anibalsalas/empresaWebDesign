import React from 'react';
import { motion } from 'framer-motion';

const Beneficios = () => {
  const benefits = [
    {
      title: "Soluciones a Medida",
      description: "Desarrollamos soluciones personalizadas para cada cliente."
    },
    {
      title: "Soporte Continuo",
      description: "Ofrecemos soporte técnico y mantenimiento."
    },
    {
      title: "Diseño Responsivo",
      description: "Nuestras páginas están optimizadas para dispositivos móviles."
    }
  ];

  return (
    <section className="py-20" id="benefits">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Estado inicial
              whileInView={{ opacity: 1, y: 0 }} // Estado final
              transition={{ duration: 0.5, delay: index * 0.2 }} // Retraso por tarjeta
              viewport={{ once: false }} // Solo una vez
              className="bg-white p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="mt-4">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
