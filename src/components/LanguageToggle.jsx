const LANGUAGES = ['es', 'en'];

function LanguageToggle({ language, onChange, label }) {
  return (
    <div className="language-toggle" role="group" aria-label={label}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className="language-toggle__option"
          aria-pressed={language === code}
          lang={code}
          onClick={() => onChange(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
