# 📚 Cours Complet : Context API en React

## **Introduction**

Le Context API est un système de gestion d'état global en React qui permet de partager des données entre composants sans passer par les props à chaque niveau. C'est comme créer un "tunnel de communication" entre vos composants.

---

## **1. Qu'est-ce que le Context API ?**

### **Le Problème Sans Context**

```jsx
// ❌ Prop Drilling - Passage de props à travers chaque niveau
function App() {
  const [user, setUser] = useState({ name: "John" });
  
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Main>
        <Sidebar user={user} setUser={setUser} />
        <Content user={user} setUser={setUser} />
      </Main>
      <Footer user={user} />
    </div>
  );
}
```

**Problèmes :**
- Code répétitif
- Difficile à maintenir
- Props inutiles dans les composants intermédiaires

### **La Solution Avec Context**

```jsx
// ✅ Avec Context - Données partagées automatiquement
function App() {
  return (
    <UserProvider>
      <Header />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </UserProvider>
  );
}
```

**Avantages :**
- Code plus propre
- Accès direct aux données depuis n'importe quel enfant
- Pas de props intermédiaires

---

## **2. Création d'un Context**

### **Étape 1 : Créer le Context**

```jsx
// UserContext.jsx
import { createContext } from 'react';

const UserContext = createContext();
```

**Explication :**
- `createContext()` crée un "tunnel de communication"
- Le context contient deux propriétés : `Provider` et `Consumer`

### **Étape 2 : Créer le Provider**

```jsx
// UserContext.jsx
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    isLoggedIn: false
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ⚠️ IMPORTANT : Exporter le Context aussi !
export { UserContext };
```

**Points Clés :**
- `children` représente tous les composants enfants
- `value` contient ce qui sera partagé
- Export du Context ET du Provider

### **Étape 3 : Utilisation dans l'App**

```jsx
// App.jsx
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <Footer />
    </UserProvider>
  );
}
```

### **Étape 4 : Utilisation dans les Composants Enfants**

```jsx
// Header.jsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <header>
      <h1>Bonjour {user.name}</h1>
      <button onClick={() => setUser({...user, isLoggedIn: !user.isLoggedIn})}>
        {user.isLoggedIn ? 'Déconnexion' : 'Connexion'}
      </button>
    </header>
  );
};
```

---

## **3. Exemple Pratique : Loading Context**

### **Création du Loading Context**

```jsx
// LoadingContext.jsx
import { createContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState({
    images: false,
    videos: false,
    data: false,
    total: 0
  });

  // Fonction utilitaire pour mettre à jour un type de chargement
  const updateLoading = (type, value) => {
    setLoading(prev => ({
      ...prev,
      [type]: value,
      total: Object.values({...prev, [type]: value}).filter(Boolean).length
    }));
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading, updateLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext };
```

### **Utilisation dans l'Application**

```jsx
// App.jsx
import { LoadingProvider } from './LoadingContext';

function App() {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <Header />
      <Herov2 />
      <Footer />
    </LoadingProvider>
  );
}
```

### **Composant LoadingScreen**

```jsx
// LoadingScreen.jsx
import { useContext } from 'react';
import { LoadingContext } from './LoadingContext';

const LoadingScreen = () => {
  const { loading } = useContext(LoadingContext);
  
  // Afficher le loading si quelque chose charge encore
  if (loading.total === 0) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Chargement en cours...</p>
      <div className="progress">
        <div 
          className="progress-bar" 
          style={{width: `${(loading.total / 3) * 100}%`}}
        ></div>
      </div>
    </div>
  );
};
```

### **Utilisation dans Herov2**

```jsx
// Herov2.jsx
import { useContext, useEffect } from 'react';
import { LoadingContext } from './LoadingContext';

const Herov2 = () => {
  const { updateLoading } = useContext(LoadingContext);

  useEffect(() => {
    const loadAssets = async () => {
      // Charger l'image
      updateLoading('images', true);
      const image = new Image();
      image.onload = () => updateLoading('images', false);
      image.src = '/images/hero.png';

      // Charger la vidéo
      updateLoading('videos', true);
      // Simulation du chargement vidéo
      setTimeout(() => updateLoading('videos', false), 2000);
    };

    loadAssets();
  }, [updateLoading]);

  return <div>Contenu du Hero</div>;
};
```

---

## **4. Bonnes Pratiques**

### **4.1 Structure des Fichiers**

```
src/
├── contexts/
│   ├── UserContext.jsx
│   ├── LoadingContext.jsx
│   └── ThemeContext.jsx
├── components/
│   ├── Header.jsx
│   ├── Herov2.jsx
│   └── Footer.jsx
└── App.jsx
```

### **4.2 Nommage des Contexts**

```jsx
// ✅ Bonnes conventions
const UserContext = createContext();
const LoadingContext = createContext();
const ThemeContext = createContext();

export const UserProvider = ({ children }) => { /* ... */ };
export const LoadingProvider = ({ children }) => { /* ... */ };
export const ThemeProvider = ({ children }) => { /* ... */ };
```

### **4.3 Gestion des Valeurs par Défaut**

```jsx
// ✅ Avec valeur par défaut
const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false
});

// ✅ Ou avec null et vérification
const UserContext = createContext(null);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser doit être utilisé dans un UserProvider');
  }
  return context;
};
```

### **4.4 Hook Personnalisé**

```jsx
// hooks/useLoading.js
import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading doit être utilisé dans un LoadingProvider');
  }
  return context;
};

// Utilisation simplifiée
const { loading, updateLoading } = useLoading();
```

---

## **5. Exemples Avancés**

### **5.1 Context avec Reducer**

```jsx
// ThemeContext.jsx
import { createContext, useReducer } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDark: !state.isDark
      };
    case 'SET_COLOR':
      return {
        ...state,
        primaryColor: action.payload
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    isDark: false,
    primaryColor: '#007bff'
  });

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
```

### **5.2 Multiple Contexts**

```jsx
// App.jsx
import { UserProvider } from './contexts/UserContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LoadingProvider>
          <Header />
          <Main />
          <Footer />
        </LoadingProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
```

### **5.3 Context avec Async Data**

```jsx
// DataContext.jsx
import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error, refetch: fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
```

---

## **6. Pièges à Éviter**

### **6.1 Re-renders Inutiles**

```jsx
// ❌ Mauvais - Crée un nouvel objet à chaque render
export const BadProvider = ({ children }) => {
  const [state, setState] = useState({ count: 0 });
  
  return (
    <Context.Provider value={{ 
      state, 
      setState,
      // ❌ Nouvel objet à chaque render !
      increment: () => setState(prev => ({ count: prev.count + 1 }))
    }}>
      {children}
    </Context.Provider>
  );
};

// ✅ Bon - Utilise useCallback
export const GoodProvider = ({ children }) => {
  const [state, setState] = useState({ count: 0 });
  
  const increment = useCallback(() => {
    setState(prev => ({ count: prev.count + 1 }));
  }, []);
  
  return (
    <Context.Provider value={{ state, setState, increment }}>
      {children}
    </Context.Provider>
  );
};
```

### **6.2 Oubli d'Exporter le Context**

```jsx
// ❌ Mauvais - Seul le Provider est exporté
export const LoadingProvider = ({ children }) => { /* ... */ };
// Le Context n'est pas exporté !

// ✅ Bon - Les deux sont exportés
export const LoadingProvider = ({ children }) => { /* ... */ };
export { LoadingContext };
```

### **6.3 Utilisation Hors Provider**

```jsx
// ❌ Mauvais - Utilisation sans Provider
const Component = () => {
  const { user } = useContext(UserContext); // Erreur !
  return <div>{user.name}</div>;
};

// ✅ Bon - Avec vérification
const Component = () => {
  const context = useContext(UserContext);
  if (!context) {
    return <div>Chargement...</div>;
  }
  return <div>{context.user.name}</div>;
};
```

---

## **7. Exercices Pratiques**

### **Exercice 1 : Créer un Context de Panier**

```jsx
// CartContext.jsx
import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
```

### **Exercice 2 : Context avec LocalStorage**

```jsx
// SettingsContext.jsx
import { createContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    language: 'fr',
    notifications: true,
    theme: 'light'
  });

  // Charger depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext };
```

---

## **8. Résumé des Points Clés**

### **✅ À Retenir**

1. **Context = Tunnel de communication** entre composants
2. **Provider = Fournisseur** de données
3. **useContext = Accès** aux données partagées
4. **Exporter Context ET Provider**
5. **Vérifier l'existence du Context** avant utilisation

### **🔄 Flux de Données**

```
createContext() → Provider → Enfants → useContext()
```

### **📁 Structure Recommandée**

```
contexts/
├── UserContext.jsx
├── LoadingContext.jsx
└── ThemeContext.jsx

hooks/
├── useUser.js
├── useLoading.js
└── useTheme.js
```

---

## **9. Quiz de Vérification**

**Question 1 :** Que fait `createContext()` ?
- [ ] Crée un composant Provider
- [x] Crée un tunnel de communication
- [ ] Crée un état global

**Question 2 :** Que représente `children` dans un Provider ?
- [x] Tous les composants enfants
- [ ] Les props du composant
- [ ] Les données partagées

**Question 3 :** Comment accéder aux données du Context dans un composant enfant ?
- [ ] `import { Provider } from './Context'`
- [x] `useContext(Context)`
- [ ] `props.context`

**Question 4 :** Pourquoi faut-il exporter le Context ET le Provider ?
- [ ] Pour la performance
- [x] Les enfants ont besoin du Context, l'App a besoin du Provider
- [ ] Pour éviter les erreurs de compilation

---

## **10. Application à Votre Projet Villa**

### **Context pour Votre Site de Villa**

```jsx
// VillaContext.jsx
import { createContext, useState } from 'react';

const VillaContext = createContext();

export const VillaProvider = ({ children }) => {
  const [villaState, setVillaState] = useState({
    // État de chargement
    loading: {
      images: false,
      videos: false,
      data: false
    },
    // État de la réservation
    reservation: {
      isOpen: false,
      selectedDates: null,
      guests: 1
    },
    // État de la vidéo
    video: {
      isPlaying: false,
      isFullscreen: false
    }
  });

  const updateLoading = (type, value) => {
    setVillaState(prev => ({
      ...prev,
      loading: {
        ...prev.loading,
        [type]: value
      }
    }));
  };

  const toggleReservation = () => {
    setVillaState(prev => ({
      ...prev,
      reservation: {
        ...prev.reservation,
        isOpen: !prev.reservation.isOpen
      }
    }));
  };

  const toggleVideo = () => {
    setVillaState(prev => ({
      ...prev,
      video: {
        ...prev.video,
        isPlaying: !prev.video.isPlaying
      }
    }));
  };

  return (
    <VillaContext.Provider value={{ 
      villaState, 
      updateLoading, 
      toggleReservation, 
      toggleVideo 
    }}>
      {children}
    </VillaContext.Provider>
  );
};

export { VillaContext };
```

### **Utilisation dans Votre App**

```jsx
// App.jsx ou index.astro
import { VillaProvider } from './contexts/VillaContext';

function App() {
  return (
    <VillaProvider>
      <Header />
      <Herov2 />
      <About />
      <Location />
      <Footer />
    </VillaProvider>
  );
}
```

### **Utilisation dans Herov2**

```jsx
// Herov2.jsx
import { useContext, useEffect } from 'react';
import { VillaContext } from './contexts/VillaContext';

const Herov2 = () => {
  const { villaState, updateLoading, toggleVideo } = useContext(VillaContext);

  useEffect(() => {
    // Charger les ressources
    updateLoading('images', true);
    updateLoading('videos', true);

    // Simulation du chargement
    setTimeout(() => {
      updateLoading('images', false);
      updateLoading('videos', false);
    }, 2000);
  }, [updateLoading]);

  return (
    <section className="hero">
      {/* Votre contenu existant */}
      <button onClick={toggleVideo}>
        {villaState.video.isPlaying ? 'Pause' : 'Play'}
      </button>
    </section>
  );
};
```

---

**🎯 Vous êtes maintenant prêt à utiliser le Context API dans vos projets React !**

**📝 Prochaines étapes :**
1. Créez votre premier Context
2. Intégrez-le dans votre projet
3. Testez le partage de données entre composants
4. Optimisez avec des hooks personnalisés

**💡 Conseil :** Commencez par un Context simple (comme le loading) avant de passer à des Contexts plus complexes ! 