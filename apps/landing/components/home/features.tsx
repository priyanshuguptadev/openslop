import { Terminal, KeyRound, Sparkles } from "lucide-react";

const features = [
  {
    title: "Use any AI model",
    description:
      "Plug in your favorite LLM provider. Just make sure it provides an OpenAI-compatible API endpoint.",
    icon: Sparkles,
    imageUrl: "/providers.webp",
  },
  {
    title: "Bring your own keys",
    description:
      "Pay the provider directly. We don't take a cut or lock you into a subscription.",
    icon: KeyRound,
    imageUrl: "/keys.webp",
  },
  {
    title: "Lives in your terminal",
    description:
      "It works right where your code is. No need to leave your editor to get work done .",
    icon: Terminal,
    imageUrl: "/terminal.webp",
  },
];

export function Features() {
  return (
    <section id="meet-openslop" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-24">
        {features.map((feature, i) => {
          const isEven = i % 2 === 1;

          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2 aspect-square bg-gray-100 rounded-3xl border border-gray-200 flex items-center justify-center shadow-sm">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
