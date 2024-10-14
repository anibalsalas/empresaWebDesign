import React from 'react';

const Planes = () => {
  return (
    <section className="py-20 bg-gray-100" id="plans">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Nuestros Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-2xl font-semibold">Plan Básico</h3>
            <p className="mt-4">Ideal para pequeños negocios.</p>
            <p className="mt-2 font-bold">$500</p>
          </div>
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-2xl font-semibold">Plan Estándar</h3>
            <p className="mt-4">Incluye funcionalidades avanzadas.</p>
            <p className="mt-2 font-bold">$1000</p>
          </div>
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-2xl font-semibold">Plan Premium</h3>
            <p className="mt-4">Para proyectos de gran envergadura.</p>
            <p className="mt-2 font-bold">$2000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;
