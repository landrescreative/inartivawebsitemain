import React from "react";

const FeedbackSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Ana García",
      review:
        "El servicio fue excelente y el diseño superó nuestras expectativas. ¡Recomiendo completamente esta agencia!",
    },
    {
      id: 2,
      name: "Carlos López",
      review:
        "Muy profesional y dedicado al detalle. La comunicación fue clara y el proyecto se completó a tiempo.",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        Lo que dicen nuestros clientes
      </h2>
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {review.name}
            </h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
