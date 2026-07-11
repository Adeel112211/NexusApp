export default function SectionHead({ title }: { title: string }) {
  return (
    <h2 
      style={{ 
        fontSize: '1.75rem', 
        fontWeight: 800, 
        letterSpacing: '0.05em', 
        background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0px 2px 10px rgba(255,255,255,0.05)',
        marginBottom: 0
      }}
    >
      {title}
    </h2>
  );
}
