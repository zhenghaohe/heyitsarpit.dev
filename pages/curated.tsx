const Font = ['Inter', 'iA Quattro', 'Garamond', 'ET book', 'JetBrains Mono'];

export default function Curated() {
  return (
    <article className="w-full sm:max-w-[75ch] mx-auto px-5 py-16">
      <h1 className="text-2xl font-black">A list of web things I love</h1>
      <section>
        <h2>Typefaces</h2>
        <section>
          {Font.map((font) => (
            <div key={font} className="p-6 my-8 text-xl text-black bg-white rounded-md">
              {font}
            </div>
          ))}
        </section>
      </section>
    </article>
  );
}
