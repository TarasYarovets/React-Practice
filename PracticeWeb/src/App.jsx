import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [textSize, setTextSize] = useState('standard')
  const [width, setWidth] = useState('standard')
  const [colorTheme, setColorTheme] = useState('light')

  useEffect(() => {
    if (colorTheme === 'dark') {
      document.body.classList.add('theme-dark')
    } else {
      document.body.classList.remove('theme-dark')
    }
  }, [colorTheme])

  return (
    <div className={`wiki-container theme-${colorTheme}`}>
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-links">
            <a href="#donate">Пожертвувати</a>
            <a href="#account">Створити обліковий запис</a>
            <a href="#login">Увійти</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="wiki-header">
        <div className="header-content">
          <button className="menu-button" aria-label="Головне меню">
            <span className="hamburger-icon">☰</span>
          </button>
          
          <div className="logo-section">
            <div className="wiki-logo-image">
              <div className="wiki-globe">W</div>
            </div>
            <div className="logo-text">
              <h1 className="wiki-logo">Вікіпедія</h1>
              <p className="wiki-subtitle">Вільна енциклопедія</p>
            </div>
          </div>

          <div className="search-container">
            <input 
              type="search" 
              className="search-input" 
              placeholder="Пошук у Вікіпедії"
              aria-label="Пошук у Вікіпедії"
            />
            <button className="search-button">Знайти</button>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <nav className="main-nav">
        <div className="nav-content">
          <div className="nav-tabs">
            <a href="#main" className="nav-tab active">Головна</a>
            <a href="#discussion" className="nav-tab">Обговорення</a>
          </div>
          <div className="nav-actions">
            <a href="#read" className="nav-action active">Читати</a>
            <a href="#view-code" className="nav-action">Переглянути код</a>
            <a href="#view-history" className="nav-action">Переглянути історію</a>
            <div className="tools-dropdown">
              <button className="nav-action">Інструменти ▼</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`wiki-main text-${textSize} width-${width}`}>
        <article className="wiki-article">
          <h1 className="article-title">Головна сторінка</h1>
          
          <div className="welcome-message">
            <p className="welcome-text">
              Ласкаво просимо до <a href="#wiki" className="wiki-link">Вікіпедії</a>,
            </p>
            <p className="welcome-description">
              вільної енциклопедії, яку <a href="#edit" className="wiki-link">може редагувати кожен</a>.
            </p>
            <p className="wiki-stats">
              <a href="#ukwiki" className="wiki-link">Українська Вікіпедія</a> заснована <strong>30 січня 2004</strong> року.
            </p>
            <div className="stats-numbers">
              <span className="stat-item"><strong>220 476</strong> зареєстровані дописувачі</span>
              <span className="stat-item"><strong>5915</strong> з них активний останнього місяця</span>
            </div>
          </div>

          <section className="project-description">
            <h2>Опис проєкту</h2>
            <p>
              Цей навчальний проєкт створений для практики, де потрібно було зробити шаблон дизайну сайту. 
              Обираючи шаблон я стилізував його під дизайн Вікіпедії.
            </p>
            <p>
              Проєкт включає в себе HTML-розмітку, CSS-стилізацію, інтерактивні 
              елементи керування зовнішнім виглядом, а саме: розмір та ширина сторінки, а також кольорову тему сторінки.
            </p>
          </section>

          <section className="project-info">
            <h2>Інформація про проєкт</h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Автор:</strong>
                <p>Тарас Яровець</p>
              </div>
              <div className="info-item">
                <strong>GitHub:</strong>
                <p>
                  <a 
                    href="https://github.com/TarasYarovets" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    github.com/TarasYarovets
                  </a>
                </p>
              </div>
              <div className="info-item">
                <strong>Оригінал дизайну:</strong>
                <p>
                  <a 
                    href="https://uk.wikipedia.org/wiki/Головна_сторінка" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Вікіпедія - Головна сторінка
                  </a>
                </p>
              </div>
              <div className="info-item">
                <strong>Технології:</strong>
                <p>React, Vite, CSS3, HTML5</p>
              </div>
            </div>
          </section>

          <section className="featured-section">
            <h2>Вибрана стаття</h2>
            <div className="featured-content">
              <div className="featured-text">
                <p>
                  <strong>Вікіпедія</strong> — загальнодоступна багатомовна онлайн-енциклопедія, 
                  яку створюють та редагують користувачі з усього світу на добровільних засадах. 
                  Проєкт працює на основі технології вікі, що дозволяє будь-кому з доступом до 
                  інтернету змінювати її статті.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Settings Panel */}
        <aside className="settings-panel">
          <h3>Зовнішній вигляд</h3>
          
          <div className="settings-group">
            <label className="settings-label">Розмір тексту:</label>
            <div className="radio-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="text-size" 
                  value="small"
                  checked={textSize === 'small'}
                  onChange={(e) => setTextSize(e.target.value)}
                />
                <span>Малий</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="text-size" 
                  value="standard"
                  checked={textSize === 'standard'}
                  onChange={(e) => setTextSize(e.target.value)}
                />
                <span>Стандартний</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="text-size" 
                  value="large"
                  checked={textSize === 'large'}
                  onChange={(e) => setTextSize(e.target.value)}
                />
                <span>Великий</span>
              </label>
            </div>
          </div>

          <div className="settings-group">
            <label className="settings-label">Ширина тексту:</label>
            <div className="radio-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="width" 
                  value="standard"
                  checked={width === 'standard'}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <span>Стандартний</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="width" 
                  value="wide"
                  checked={width === 'wide'}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <span>Широкий</span>
              </label>
            </div>
          </div>

          <div className="settings-group">
            <label className="settings-label">Кольорова тема:</label>
            <div className="radio-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="color-theme" 
                  value="auto"
                  checked={colorTheme === 'auto'}
                  onChange={(e) => setColorTheme(e.target.value)}
                />
                <span>Автоматична</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="color-theme" 
                  value="light"
                  checked={colorTheme === 'light'}
                  onChange={(e) => setColorTheme(e.target.value)}
                />
                <span>Світла</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="color-theme" 
                  value="dark"
                  checked={colorTheme === 'dark'}
                  onChange={(e) => setColorTheme(e.target.value)}
                />
                <span>Темна</span>
              </label>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="wiki-footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>
              Текст доступний на умовах ліцензії Creative Commons Attribution-ShareAlike
            </p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Конфіденційність</a>
            <a href="#about">Про проєкт</a>
            <a href="#disclaimer">Відмова від відповідальності</a>
            <a href="#contact">Контакти</a>
            <a href="#mobile">Мобільна версія</a>
          </div>
          <div className="footer-info">
            <p>&copy; 2026 Навчальний проєкт. Створено для практики.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App