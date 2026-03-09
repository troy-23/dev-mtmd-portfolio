const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // about
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
            The <span className="text-secondary text-glow-pink">vibe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a vibecoder — I build web apps by channeling creative energy into code. 
              Every project starts with a feeling and ends with a product that moves people.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My stack is whatever gets the vibe right. React, TypeScript, Tailwind, 
              and a healthy dose of AI-assisted development. The future is now.
            </p>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-sm">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">frontend</span>
                <span className="text-primary">React / TypeScript</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">styling</span>
                <span className="text-primary">Tailwind CSS</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">backend</span>
                <span className="text-primary">Supabase / Node</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">tools</span>
                <span className="text-secondary">Lovable / Cursor</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">vibes</span>
                <span className="text-neon-green">immaculate ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
